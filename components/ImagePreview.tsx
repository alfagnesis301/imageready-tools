"use client";

/* eslint-disable @next/next/no-img-element */

import { FileImage, Trash2 } from "lucide-react";
import type { ImageAnalysisResult } from "@/lib/imageAnalysis";
import { formatBytes } from "@/lib/imageUtils";
import { formatLabel } from "@/lib/publishRules";
import { useLanguage } from "./LanguageProvider";

type ImagePreviewProps = {
  analysis: ImageAnalysisResult;
  objectUrl: string;
  onClear: () => void;
};

export default function ImagePreview({ analysis, objectUrl, onClear }: ImagePreviewProps) {
  const { t } = useLanguage();
  const canPreview = analysis.format !== "svg";

  return (
    <div className="grid gap-4">
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
        {canPreview ? (
          <img
            src={objectUrl}
            alt={t("preview.uploadedAlt")}
            className="max-h-[360px] w-full object-contain"
          />
        ) : (
          <div className="flex min-h-[260px] flex-col items-center justify-center gap-3 p-6 text-center">
            <FileImage size={42} className="text-blue-600" aria-hidden="true" />
            <p className="max-w-sm text-sm text-slate-600 dark:text-slate-400">
              {t("preview.svgNotice")}
            </p>
          </div>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <p className="label">{t("preview.file")}</p>
          <p className="mt-1 break-words text-sm font-semibold text-slate-950 dark:text-white">
            {analysis.name}
          </p>
        </div>
        <div>
          <p className="label">{t("preview.originalSize")}</p>
          <p className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">
            {formatBytes(analysis.size)}
          </p>
        </div>
        <div>
          <p className="label">{t("preview.format")}</p>
          <p className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">
            {formatLabel(analysis.format)}
          </p>
        </div>
        <div>
          <p className="label">{t("preview.dimensions")}</p>
          <p className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">
            {analysis.width} x {analysis.height}px
          </p>
        </div>
      </div>

      <button type="button" className="button-secondary w-full" onClick={onClear}>
        <Trash2 size={17} aria-hidden="true" />
        {t("preview.clear")}
      </button>
    </div>
  );
}
