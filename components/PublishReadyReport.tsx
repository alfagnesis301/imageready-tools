"use client";

import { Clipboard, Check } from "lucide-react";
import { useMemo, useState } from "react";
import { formatBytes } from "@/lib/imageUtils";
import { useLanguage } from "./LanguageProvider";

type PublishReadyReportProps = {
  score: number;
  preset: string;
  format: string;
  width: number;
  height: number;
  size: number;
  recommendations: string[];
};

export default function PublishReadyReport({
  score,
  preset,
  format,
  width,
  height,
  size,
  recommendations
}: PublishReadyReportProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const reportText = useMemo(
    () =>
      [
        t("report.title"),
        `${t("report.score")}: ${score}/100`,
        `${t("report.preset")}: ${preset}`,
        `${t("report.format")}: ${format}`,
        `${t("report.dimensions")}: ${width} x ${height}px`,
        `${t("report.fileSize")}: ${formatBytes(size)}`,
        "",
        t("report.recommendations"),
        ...recommendations.map((item) => `- ${item}`)
      ].join("\n"),
    [format, height, preset, recommendations, score, size, t, width]
  );

  async function copyReport() {
    await navigator.clipboard.writeText(reportText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-950 dark:text-white">{t("report.title")}</h3>
          <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
            {t("report.description")}
          </p>
        </div>
        <button type="button" onClick={copyReport} className="button-secondary shrink-0">
          {copied ? <Check size={16} aria-hidden="true" /> : <Clipboard size={16} aria-hidden="true" />}
          {copied ? t("report.copied") : t("report.copy")}
        </button>
      </div>
      <pre className="mt-4 max-h-72 overflow-auto whitespace-pre-wrap rounded-lg bg-slate-50 p-4 text-xs leading-6 text-slate-700 dark:bg-slate-950 dark:text-slate-300">
        {reportText}
      </pre>
    </section>
  );
}
