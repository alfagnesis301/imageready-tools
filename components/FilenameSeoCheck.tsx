"use client";

import { scoreFilename } from "@/lib/filenameSeo";
import { useLanguage } from "./LanguageProvider";

type FilenameSeoCheckProps = {
  filename: string;
};

export default function FilenameSeoCheck({ filename }: FilenameSeoCheckProps) {
  const { t } = useLanguage();
  const result = scoreFilename(filename);
  const statusKey =
    result.score >= 85 ? "filename.strong" : result.score >= 70 ? "filename.usable" : "filename.needsCleanup";
  const colorClass =
    result.score >= 85
      ? "border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900/70 dark:bg-emerald-950/35 dark:text-emerald-100"
      : result.score >= 70
        ? "border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900/70 dark:bg-amber-950/35 dark:text-amber-100"
        : "border-red-200 bg-red-50 text-red-950 dark:border-red-900/70 dark:bg-red-950/35 dark:text-red-100";

  return (
    <section className={`rounded-lg border p-4 ${colorClass}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-bold">{t("filename.title", { status: t(statusKey) })}</h3>
          <p className="mt-1 break-all text-xs opacity-80">{filename}</p>
        </div>
        <span className="rounded-lg bg-white/70 px-2.5 py-1 text-xs font-black text-slate-950 dark:bg-slate-950/40 dark:text-white">
          {result.score}/100
        </span>
      </div>
      <p className="mt-3 text-sm leading-6">
        {t("filename.description")}
      </p>
      {result.issues.length ? (
        <ul className="mt-3 space-y-2 text-sm leading-6">
          {result.issues.map((issue) => (
            <li key={issue}>- {translateFilenameMessage(issue, t)}</li>
          ))}
        </ul>
      ) : (
        <ul className="mt-3 space-y-2 text-sm leading-6">
          {result.goodPoints.slice(0, 2).map((point) => (
            <li key={point}>- {translateFilenameMessage(point, t)}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function translateFilenameMessage(message: string, t: (key: string) => string) {
  const messageKeys: Record<string, string> = {
    "Use hyphens instead of spaces.": "filename.issue.spaces",
    "Use hyphens instead of underscores.": "filename.issue.underscores",
    "Avoid special characters in image filenames.": "filename.issue.characters",
    "Keep filenames short and descriptive.": "filename.issue.length",
    "Replace generic camera, screenshot or draft names with descriptive words.": "filename.issue.generic",
    "Use descriptive hyphen-separated words.": "filename.issue.hyphens",
    "Filename is readable and hyphen-separated.": "filename.good.readable",
    "Filename length is practical for publishing workflows.": "filename.good.length",
    "Filename avoids unusual characters.": "filename.good.characters"
  };

  return messageKeys[message] ? t(messageKeys[message]) : message;
}
