import Link from "next/link";
import Logo from "./Logo";
import { CONTACT_EMAIL, LEGAL_LINKS, NAV_LINKS, SITE_TAGLINE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-12 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-md space-y-4">
          <Logo />
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{SITE_TAGLINE}</p>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            Browser-based image checks for creators, publishers and small teams. Your images are
            analyzed locally and are not uploaded by this app.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-950 dark:text-white">Tools</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-950 dark:text-white">Company</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link
                href="/about"
                className="text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300"
              >
                Contact
              </Link>
            </li>
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="shell mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
        <p>
          © {new Date().getFullYear()} ImageReady Tools. Recommendations are estimates based on
          common publishing patterns.
        </p>
        <p className="mt-2">Contact: {CONTACT_EMAIL}</p>
      </div>
    </footer>
  );
}
