import type { ImageFormat } from "./publishRules";

export const EXPORT_BLOCKED_MESSAGE =
  "Your browser blocked or altered the image export. This can happen in Tor or privacy-hardened browsers. Try Chrome, Edge, Firefox, Safari, or export as PNG/JPEG.";

export const WEBP_FALLBACK_MESSAGE =
  "WebP export is not supported or was blocked in this browser. We generated a PNG instead.";

let exportCapabilityPromise: Promise<boolean> | null = null;

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

export async function validateImageBlob(blob: Blob | null | undefined): Promise<boolean> {
  try {
    if (!blob || blob.size === 0 || !blob.type.startsWith("image/")) return false;
    const bitmap = await createImageBitmap(blob);
    const valid = bitmap.width > 0 && bitmap.height > 0;
    bitmap.close?.();
    return valid;
  } catch {
    return false;
  }
}

export async function canvasToBlob(
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality?: number
): Promise<Blob> {
  assertValidCanvasDimensions(canvas.width, canvas.height);
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
  const canvas = await renderImageToCanvas(options);
  return canvasToBlob(canvas, getMimeForFormat(options.format), options.quality);
}

export async function renderValidatedImageToBlob(options: {
  file: File;
  width: number;
  height: number;
  format: ImageFormat;
  quality?: number;
  background?: string;
}): Promise<{ blob: Blob; format: ImageFormat; message?: string }> {
  const canExportReliably = await browserImageExportLooksReliable();
  if (!canExportReliably) throw new Error(EXPORT_BLOCKED_MESSAGE);

  try {
    const blob = await renderImageToBlob(options);
    const requestedMime = getMimeForFormat(options.format);
    const isValid = await validateImageBlob(blob);
    const browserReturnedRequestedType = options.format !== "webp" || blob.type === requestedMime;

    if (isValid && browserReturnedRequestedType) {
      return { blob, format: options.format };
    }
  } catch {
    if (options.format !== "webp") {
      throw new Error(EXPORT_BLOCKED_MESSAGE);
    }
  }

  if (options.format === "webp") {
    try {
      const fallbackBlob = await renderImageToBlob({ ...options, format: "png", quality: undefined });
      if (await validateImageBlob(fallbackBlob)) {
        return { blob: fallbackBlob, format: "png", message: WEBP_FALLBACK_MESSAGE };
      }
    } catch {
      throw new Error(EXPORT_BLOCKED_MESSAGE);
    }
  }

  throw new Error(EXPORT_BLOCKED_MESSAGE);
}

export async function downloadValidatedImageBlob(blob: Blob, filename: string): Promise<void> {
  const canExportReliably = await browserImageExportLooksReliable();
  if (!canExportReliably || !(await validateImageBlob(blob))) {
    throw new Error(EXPORT_BLOCKED_MESSAGE);
  }
  downloadBlob(blob, filename);
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

async function renderImageToCanvas(options: {
  file: File;
  width: number;
  height: number;
  format: ImageFormat;
  background?: string;
}): Promise<HTMLCanvasElement> {
  if (options.format === "svg" || options.file.type === "image/svg+xml") {
    throw new Error("SVG export is not available in the browser-based raster tools.");
  }

  const width = getExportDimension(options.width, "width");
  const height = getExportDimension(options.height, "height");
  const bitmap = await createImageBitmap(options.file);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
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

  return canvas;
}

async function browserImageExportLooksReliable(): Promise<boolean> {
  exportCapabilityPromise ??= testBrowserImageExportCapability();
  return exportCapabilityPromise;
}

async function testBrowserImageExportCapability(): Promise<boolean> {
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 4;
    canvas.height = 4;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return false;

    const expectedColors = [
      [231, 76, 60],
      [46, 204, 113],
      [52, 152, 219],
      [241, 196, 15]
    ];

    expectedColors.forEach(([r, g, b], index) => {
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(index % 2 === 0 ? 0 : 2, index < 2 ? 0 : 2, 2, 2);
    });

    const blob = await canvasToBlob(canvas, "image/png");
    if (!(await validateImageBlob(blob))) return false;

    const bitmap = await createImageBitmap(blob);
    const checkCanvas = document.createElement("canvas");
    checkCanvas.width = 4;
    checkCanvas.height = 4;
    const checkCtx = checkCanvas.getContext("2d", { willReadFrequently: true });
    if (!checkCtx) return false;
    checkCtx.drawImage(bitmap, 0, 0);
    bitmap.close?.();

    const points = [
      [1, 1, expectedColors[0]],
      [3, 1, expectedColors[1]],
      [1, 3, expectedColors[2]],
      [3, 3, expectedColors[3]]
    ] as const;

    return points.every(([x, y, expected]) => {
      const pixel = checkCtx.getImageData(x, y, 1, 1).data;
      return (
        Math.abs(pixel[0] - expected[0]) <= 8 &&
        Math.abs(pixel[1] - expected[1]) <= 8 &&
        Math.abs(pixel[2] - expected[2]) <= 8 &&
        pixel[3] >= 250
      );
    });
  } catch {
    return false;
  }
}

function getExportDimension(value: number, name: "width" | "height"): number {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`Export ${name} must be greater than 0.`);
  }
  return Math.max(1, Math.round(value));
}

function assertValidCanvasDimensions(width: number, height: number): void {
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
    throw new Error("Canvas dimensions are invalid for image export.");
  }
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const next = b;
    b = a % b;
    a = next;
  }
  return Math.max(1, Math.abs(a));
}
