"use client";

import { Download, Loader2, Maximize2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { ImageAnalysisResult } from "@/lib/imageAnalysis";
import {
  downloadBlob,
  extensionForFormat,
  formatBytes,
  renderImageToBlob,
  safeFileName
} from "@/lib/imageUtils";
import type { ImageFormat } from "@/lib/publishRules";
import { formatLabel } from "@/lib/publishRules";

type ResizeSuggestionsProps = {
  analysis: ImageAnalysisResult | null;
};

const SIZE_PRESETS = [
  { label: "Open Graph", width: 1200, height: 630 },
  { label: "YouTube", width: 1280, height: 720 },
  { label: "Instagram Square", width: 1080, height: 1080 },
  { label: "Story", width: 1080, height: 1920 },
  { label: "Pinterest", width: 1000, height: 1500 },
  { label: "Email", width: 1200, height: 400 }
];

export default function ResizeSuggestions({ analysis }: ResizeSuggestionsProps) {
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(630);
  const [lockRatio, setLockRatio] = useState(true);
  const [targetFormat, setTargetFormat] = useState<ImageFormat>("webp");
  const [isExporting, setIsExporting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const aspect = useMemo(() => (analysis ? analysis.width / analysis.height : 1200 / 630), [analysis]);

  useEffect(() => {
    if (!analysis) return;
    setWidth(analysis.width);
    setHeight(analysis.height);
    setTargetFormat(analysis.recommendedFormat === "svg" ? "webp" : analysis.recommendedFormat);
  }, [analysis]);

  function updateWidth(value: number) {
    const next = Math.max(1, value);
    setWidth(next);
    if (lockRatio) setHeight(Math.max(1, Math.round(next / aspect)));
  }

  function updateHeight(value: number) {
    const next = Math.max(1, value);
    setHeight(next);
    if (lockRatio) setWidth(Math.max(1, Math.round(next * aspect)));
  }

  async function exportResized() {
    if (!analysis) return;
    setIsExporting(true);
    setStatus(null);
    try {
      const blob = await renderImageToBlob({
        file: analysis.file,
        width,
        height,
        format: targetFormat,
        quality: 0.82
      });
      downloadBlob(blob, `${safeFileName(analysis.name)}-${width}x${height}.${extensionForFormat(targetFormat)}`);
      setStatus(`Resized image created locally. Estimated size: ${formatBytes(blob.size)}.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "The resized image could not be created.");
    } finally {
      setIsExporting(false);
    }
  }

  const disabled = !analysis || analysis.format === "svg";

  return (
    <section className="rounded-lg border border-slate-200 bg-white/82 p-4 dark:border-slate-800 dark:bg-slate-900/82">
      <div className="flex items-center gap-2">
        <Maximize2 size={18} className="text-violet-600 dark:text-violet-300" aria-hidden="true" />
        <h3 className="text-sm font-bold text-slate-950 dark:text-white">Resize image</h3>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="resize-width" className="label">
            Width
          </label>
          <input
            id="resize-width"
            type="number"
            className="input"
            min={1}
            value={width}
            onChange={(event) => updateWidth(Number(event.target.value))}
            disabled={disabled}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="resize-height" className="label">
            Height
          </label>
          <input
            id="resize-height"
            type="number"
            className="input"
            min={1}
            value={height}
            onChange={(event) => updateHeight(Number(event.target.value))}
            disabled={disabled}
          />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <label className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
          <input
            type="checkbox"
            checked={lockRatio}
            onChange={(event) => setLockRatio(event.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
          />
          Lock aspect ratio
        </label>
        <label className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
          Format
          <select
            className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-sm dark:border-slate-700 dark:bg-slate-950"
            value={targetFormat}
            onChange={(event) => setTargetFormat(event.target.value as ImageFormat)}
            disabled={disabled}
          >
            {(["webp", "jpg", "png"] as ImageFormat[]).map((format) => (
              <option key={format} value={format}>
                {formatLabel(format)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {SIZE_PRESETS.map((preset) => (
          <button
            type="button"
            key={preset.label}
            className="focus-ring rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800"
            onClick={() => {
              setWidth(preset.width);
              setHeight(preset.height);
            }}
            disabled={disabled}
            title={`${preset.width} x ${preset.height}`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {analysis?.format === "svg" ? (
        <p className="mt-3 text-sm leading-6 text-amber-700 dark:text-amber-200">
          SVG resizing is not exported by this browser tool. Use your SVG editor to create raster variants.
        </p>
      ) : null}

      <button type="button" className="button-primary mt-4 w-full" onClick={exportResized} disabled={disabled || isExporting}>
        {isExporting ? <Loader2 size={17} className="animate-spin" aria-hidden="true" /> : <Download size={17} aria-hidden="true" />}
        Download resized image
      </button>

      {status ? (
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400" role="status">
          {status}
        </p>
      ) : null}
    </section>
  );
}
