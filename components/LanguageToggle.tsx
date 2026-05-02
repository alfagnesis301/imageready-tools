"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import { getLocalizedPath, localeNames } from "@/lib/i18n";

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname() || "/";
  const [queryString, setQueryString] = useState("");
  const nextLanguage = language === "en" ? "es" : "en";
  const nextPath = getLocalizedPath(pathname, nextLanguage);
  const href = queryString ? `${nextPath}?${queryString}` : nextPath;

  useEffect(() => {
    setQueryString(window.location.search.replace(/^\?/, ""));
  }, [pathname]);

  return (
    <Link
      href={href}
      className="focus-ring inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-black uppercase text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={`${t("language.label")}: ${localeNames[nextLanguage]}`}
      title={language === "en" ? t("language.switchToSpanish") : t("language.switchToEnglish")}
      hrefLang={nextLanguage}
    >
      <Languages size={16} aria-hidden="true" />
      <span aria-current={language === "en" ? "true" : undefined}>EN</span>
      <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">/</span>
      <span aria-current={language === "es" ? "true" : undefined}>ES</span>
    </Link>
  );
}
