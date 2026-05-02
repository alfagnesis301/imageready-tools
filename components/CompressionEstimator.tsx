"use client";

import { Download, Loader2, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { ImageAnalysisResult } from "@/lib/imageAnalysis";
import {
  downloadBlob,
  estimateOutputSize,
  extensionForFormat,
  formatBytes,
  renderImageToBlob,
  safeFileName
} from "@/lib/imageUtils";
import type { ImageFormat } from "@/lib/publishRules";
import { formatLabel } from "@/lib/publishRules";
import { useLanguage } from "./LanguageProvider";

type CompressionEstimatorProps = {
  analysis: ImageAnalysisResult | null;
};

const EXPORT_FORMATS: ImageFormat[] = ["webp", "jpg", "png"];

export default function CompressionEstimator({ analysis }: CompressionEstimatorProps) {
  const { t } = useLanguage();
  const [quality, setQuality] = useState(0.78);
  const [targetFormat, setTargetFormat] = useState<ImageFormat>("webp");
  const [status, setStatus] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    if (!analysis) return;
    setTargetFormat(analysis.recommendedFormat === "svg" ? "webp" : analysis.recommendedFormat);
    setQuality(analysis.recommendedCompressionLevel);
  }, [analysis]);

  const estimatedSize = useMemo(() => {
    if (!analysis) return 0;
    return estimateOutputSize(analysis.size, quality, targetFormat);
  }, [analysis, quality, targetFormat]);

  const saving = analysis
    ? Math.max(0, Math.round(((analysis.size - estimatedSize) / analysis.size) * 100))
    : 0;
  const disabled = !analysis || analysis.format === "svg";

  async function exportImage() {
    if (!analysis) return;
    setIsExporting(true);
    setStatus(null);
    try {
      const blob = await renderImageToBlob({
        file: analysis.file,
        width: analysis.width,
        height: analysis.height,
        format: targetFormat,
        quality
      });
      downloadBlob(
        blob,
        `${safeFileName(analysis.name)}-optimized.${extensionForFormat(targetFormat)}`
      );
      setStatus(t("compression.success", { format: formatLabel(targetFormat) }));
    } catch (error) {
      setStatus(error instanceof Error ? error.message : t("compression.error"));
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white/82 p-4 dark:border-slate-800 dark:bg-slate-900/82">
      <div className="flex items-center gap-2">
        <SlidersHorizontal size={18} className="text-blue-600 dark:text-blue-300" aria-hidden="true" />
        <h3 className="text-sm font-bold text-slate-950 dark:text-white">{t("compression.title")}</h3>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="quality" className="label">
            {t("compression.quality", { value: Math.round(quality * 100) })}
          </label>
          <input
            id="quality"
            type="range"
            min="0.35"
            max="0.95"
            step="0.01"
            value={quality}
            onChange={(event) => setQuality(Number(event.target.value))}
            disabled={disabled || targetFormat === "png"}
            className="accent-blue-600 disabled:opacity-40"
          />
          <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
            {t("compression.pngHelp")}
          </p>
        </div>
        <div className="grid gap-2">
          <label htmlFor="target-format" className="label">
            {t("compression.exportFormat")}
          </label>
          <select
            id="target-format"
            className="input"
            value={targetFormat}
            onChange={(event) => setTargetFormat(event.target.value as ImageFormat)}
            disabled={disabled}
          >
            {EXPORT_FORMATS.map((format) => (
              <option key={format} value={format}>
                {formatLabel(format)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 grid gap-3 rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-950">
        <p className="text-slate-600 dark:text-slate-400">
          {t("compression.estimatedOutput")}{" "}
          <span className="font-bold text-slate-950 dark:text-white">
            {analysis ? formatBytes(estimatedSize) : t("action.uploadImage")}
          </span>
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          {t("compression.estimatedSaving")}{" "}
          <span className="font-bold text-slate-950 dark:text-white">{analysis ? `${saving}%` : t("compression.notAvailable")}</span>
        </p>
      </div>

      {analysis?.format === "svg" ? (
        <p className="mt-3 text-sm leading-6 text-amber-700 dark:text-amber-200">
          {t("compression.svgExport")}
        </p>
      ) : null}

      <button type="button" className="button-primary mt-4 w-full" onClick={exportImage} disabled={disabled || isExporting}>
        {isExporting ? <Loader2 size={17} className="animate-spin" aria-hidden="true" /> : <Download size={17} aria-hidden="true" />}
        {t("compression.download")}
      </button>

      {status ? (
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400" role="status">
          {status}
        </p>
      ) : null}
    </section>
  );
}
