"use client";

import { FileText, Info } from "lucide-react";
import type { ImageAnalysisResult } from "@/lib/imageAnalysis";
import { useLanguage } from "./LanguageProvider";

export default function MetadataPanel({ analysis }: { analysis: ImageAnalysisResult }) {
  const { t } = useLanguage();

  return (
    <div className="rounded-lg border border-slate-200 bg-white/82 p-4 dark:border-slate-800 dark:bg-slate-900/82">
      <div className="flex items-center gap-2">
        <FileText size={18} className="text-blue-600 dark:text-blue-300" aria-hidden="true" />
        <h3 className="text-sm font-bold text-slate-950 dark:text-white">{t("metadata.title")}</h3>
      </div>
      <dl className="mt-3 grid gap-3 text-sm">
        <div>
          <dt className="label">{t("metadata.filename")}</dt>
          <dd className="mt-1 font-semibold text-slate-950 dark:text-white">{analysis.seoFilename}</dd>
        </div>
        <div>
          <dt className="label">{t("metadata.altStructure")}</dt>
          <dd className="mt-1 leading-6 text-slate-600 dark:text-slate-400">
            {analysis.altTextStructure ===
            "Describe the visible subject, context and page purpose without stuffing keywords."
              ? t("metadata.altDefault")
              : analysis.altTextStructure}
          </dd>
        </div>
        <div>
          <dt className="label">{t("metadata.exifSignal")}</dt>
          <dd className="mt-1 leading-6 text-slate-600 dark:text-slate-400">
            {analysis.hasExifMetadata === null
              ? t("metadata.exifNotChecked")
              : analysis.hasExifMetadata
                ? t("metadata.exifDetected")
                : t("metadata.exifNone")}
          </dd>
        </div>
        <div className="flex items-start gap-2 rounded-lg bg-slate-50 p-3 text-slate-600 dark:bg-slate-950 dark:text-slate-400">
          <Info size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>
            {t("metadata.notice")}
          </p>
        </div>
      </dl>
    </div>
  );
}
