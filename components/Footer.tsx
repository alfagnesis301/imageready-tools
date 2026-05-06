"use client";

import Link from "next/link";
import Logo from "./Logo";
import {
  CONTACT_EMAIL,
  LEGAL_LINKS,
  NAV_LINKS,
  SITE_TAGLINE,
  SPECIALIZED_TOOL_LINKS
} from "@/lib/constants";
import { withLocalePath } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white/80 py-12 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-md space-y-4">
          <Logo />
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            {language === "es" ? "Prepara cada imagen para publicar." : SITE_TAGLINE}
          </p>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            {t("footer.description")}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-950 dark:text-white">{t("footer.tools")}</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            {[...NAV_LINKS, ...SPECIALIZED_TOOL_LINKS].map((link) => (
              <li key={link.href}>
                <Link
                  href={withLocalePath(link.href, language)}
                  className="text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300"
                >
                  {t(`nav.${link.label}`) === `nav.${link.label}` ? link.label : t(`nav.${link.label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-950 dark:text-white">{t("footer.company")}</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link
                href={withLocalePath("/about", language)}
                className="text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300"
              >
                {t("nav.About")}
              </Link>
            </li>
            <li>
              <Link
                href={withLocalePath("/contact", language)}
                className="text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300"
              >
                {t("nav.Contact")}
              </Link>
            </li>
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={withLocalePath(link.href, language)}
                  className="text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300"
                >
                  {t(`nav.${link.label}`) === `nav.${link.label}` ? link.label : t(`nav.${link.label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="shell mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        <p className="mt-2">{t("footer.contact", { email: CONTACT_EMAIL })}</p>
      </div>
    </footer>
  );
}
