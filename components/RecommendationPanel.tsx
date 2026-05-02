import { AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import type { PublishResult } from "@/lib/publishRules";
import { translatePublishText } from "@/lib/publishTranslations";
import { useLanguage } from "./LanguageProvider";

export default function RecommendationPanel({ result }: { result: PublishResult }) {
  const { language, t } = useLanguage();

  return (
    <div className="grid gap-4">
      {result.warnings.length ? (
        <section className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/70 dark:bg-amber-950/35">
          <div className="flex items-center gap-2">
            <AlertTriangle size={18} className="text-amber-600 dark:text-amber-300" aria-hidden="true" />
            <h3 className="text-sm font-bold text-amber-950 dark:text-amber-100">{t("panel.warnings")}</h3>
          </div>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-amber-900 dark:text-amber-100">
            {result.warnings.map((warning) => (
              <li key={warning}>{translatePublishText(warning, language)}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="rounded-lg border border-slate-200 bg-white/82 p-4 dark:border-slate-800 dark:bg-slate-900/82">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-blue-600 dark:text-blue-300" aria-hidden="true" />
          <h3 className="text-sm font-bold text-slate-950 dark:text-white">{t("panel.actions")}</h3>
        </div>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
          {result.recommendations.map((recommendation) => (
            <li key={recommendation}>{translatePublishText(recommendation, language)}</li>
          ))}
        </ul>
      </section>

      {result.goodPoints.length ? (
        <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/70 dark:bg-emerald-950/35">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-300" aria-hidden="true" />
            <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-100">{t("panel.good")}</h3>
          </div>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-emerald-900 dark:text-emerald-100">
            {result.goodPoints.map((point) => (
              <li key={point}>{translatePublishText(point, language)}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
