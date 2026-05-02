"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS } from "@/lib/constants";
import { withLocalePath } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/82 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/82">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label={t("header.mainNav")}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={withLocalePath(link.href, language)}
              className="focus-ring rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {t(`nav.${link.label}`)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href={`${withLocalePath("/", language)}#tool`} className="button-primary hidden sm:inline-flex">
            {t("action.uploadImage")}
          </Link>
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? t("header.closeMenu") : t("header.openMenu")}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-950">
          <nav className="shell grid gap-1 py-3" aria-label={t("header.mobileNav")}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={withLocalePath(link.href, language)}
                className="focus-ring rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                {t(`nav.${link.label}`)}
              </Link>
            ))}
            <Link href={`${withLocalePath("/", language)}#tool`} className="button-primary mt-2" onClick={() => setOpen(false)}>
              {t("action.uploadImage")}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
