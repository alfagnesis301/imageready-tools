"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  const nextLanguage = language === "en" ? "es" : "en";

  return (
    <button
      type="button"
      className="focus-ring inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-black uppercase text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={language === "en" ? t("language.switchToSpanish") : t("language.switchToEnglish")}
      title={language === "en" ? t("language.switchToSpanish") : t("language.switchToEnglish")}
    >
      <Languages size={16} aria-hidden="true" />
      {language === "en" ? "ES" : "EN"}
    </button>
  );
}
