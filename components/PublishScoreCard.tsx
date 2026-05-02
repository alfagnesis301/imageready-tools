import { AlertCircle, CheckCircle2, Gauge } from "lucide-react";
import type { PublishResult } from "@/lib/publishRules";
import { useLanguage } from "./LanguageProvider";

export default function PublishScoreCard({ result }: { result: PublishResult }) {
  const { t } = useLanguage();
  const scoreColor =
    result.score >= 85
      ? "from-emerald-500 to-emerald-400"
      : result.score >= 65
        ? "from-amber-500 to-yellow-400"
        : "from-red-500 to-orange-500";
  const StatusIcon = result.score >= 85 ? CheckCircle2 : result.score >= 65 ? Gauge : AlertCircle;

  return (
    <div className="rounded-lg border border-slate-200 bg-white/86 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/86">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="label">{t("score.title")}</p>
          <div className="mt-2 flex items-end gap-2">
            <span className="text-5xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              {result.score}
            </span>
            <span className="pb-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
              /100
            </span>
          </div>
        </div>
        <div className="rounded-lg bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          <StatusIcon size={22} aria-hidden="true" />
        </div>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${scoreColor} transition-all duration-500`}
          style={{ width: `${result.score}%` }}
          aria-hidden="true"
        />
      </div>
      <p className="mt-3 text-sm font-bold text-slate-950 dark:text-white">
        {t(`status.${result.status}`)}
      </p>
      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {t(`quality.${result.preset.id}`)}
      </p>
      <div className="mt-4 grid gap-2 text-xs text-slate-600 sm:grid-cols-4 dark:text-slate-400">
        <span>{t("score.dimensions")} {result.scoreParts.dimensions}/40</span>
        <span>{t("score.size")} {result.scoreParts.fileSize}/25</span>
        <span>{t("score.format")} {result.scoreParts.format}/20</span>
        <span>{t("score.context")} {result.scoreParts.context}/15</span>
      </div>
    </div>
  );
}
