import type { ImageFormat } from "./publishRules";

export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** index;
  return `${value >= 10 || index === 0 ? value.toFixed(0) : value.toFixed(1)} ${units[index]}`;
}

export function formatKilobytes(kb: number): string {
  return formatBytes(kb * 1024);
}

export function roundTo(value: number, places = 2): number {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
}

export function ratioToString(width: number, height: number): string {
  if (!width || !height) return "Unknown";
  const divisor = gcd(Math.round(width), Math.round(height));
  const left = Math.round(width / divisor);
  const right = Math.round(height / divisor);
  if (left > 30 || right > 30) return `${roundTo(width / height, 2)}:1`;
  return `${left}:${right}`;
}

export function safeFileName(name: string): string {
  const withoutExtension = name.replace(/\.[^.]+$/, "");
  const slug = withoutExtension
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);

  return slug || "publish-ready-image";
}

export function getMimeForFormat(format: ImageFormat): string {
  if (format === "webp") return "image/webp";
  if (format === "png") return "image/png";
  if (format === "jpg") return "image/jpeg";
  if (format === "svg") return "image/svg+xml";
  if (format === "gif") return "image/gif";
  return "image/jpeg";
}

export function extensionForFormat(format: ImageFormat): string {
  if (format === "jpg") return "jpg";
  return format === "unknown" ? "jpg" : format;
}

export function estimateOutputSize(bytes: number, quality: number, format: ImageFormat): number {
  const normalizedQuality = Math.min(1, Math.max(0.2, quality));
  const formatFactor: Record<ImageFormat, number> = {
    jpg: 0.55,
    png: 0.92,
    webp: 0.42,
    gif: 0.78,
    svg: 0.95,
    unknown: 0.65
  };
  const base = formatFactor[format] || 0.65;
  return Math.max(1024, Math.round(bytes * base * (0.55 + normalizedQuality * 0.65)));
}

export async function canvasToBlob(
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality?: number
): Promise<Blob> {
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, mimeType, quality)
  );
  if (!blob) {
    throw new Error("Your browser could not export this image format.");
  }
  return blob;
}

export async function renderImageToBlob(options: {
  file: File;
  width: number;
  height: number;
  format: ImageFormat;
  quality?: number;
  background?: string;
}): Promise<Blob> {
  if (options.format === "svg" || options.file.type === "image/svg+xml") {
    throw new Error("SVG export is not available in the browser-based raster tools.");
  }

  const bitmap = await createImageBitmap(options.file);
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(options.width));
  canvas.height = Math.max(1, Math.round(options.height));
  const ctx = canvas.getContext("2d", { alpha: options.format !== "jpg" });
  if (!ctx) throw new Error("Canvas is not available in this browser.");

  if (options.format === "jpg") {
    ctx.fillStyle = options.background || "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();

  return canvasToBlob(canvas, getMimeForFormat(options.format), options.quality);
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const next = b;
    b = a % b;
    a = next;
  }
  return Math.max(1, Math.abs(a));
}
