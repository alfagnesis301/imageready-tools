export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español"
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

export function stripLocaleFromPathname(pathname: string) {
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3) || "/";
  return pathname || "/";
}

export function getLocalizedPath(pathname: string, targetLocale: Locale) {
  const cleanPath = stripLocaleFromPathname(pathname);

  if (targetLocale === "es") {
    return cleanPath === "/" ? "/es" : `/es${cleanPath}`;
  }

  return cleanPath || "/";
}

export function withLocalePath(path: string, locale: Locale) {
  if (locale === "en") return path;
  return path === "/" ? "/es" : `/es${path}`;
}

export function getAlternatePaths(path: string) {
  const cleanPath = stripLocaleFromPathname(path);

  return {
    en: cleanPath,
    es: cleanPath === "/" ? "/es" : `/es${cleanPath}`,
    "x-default": cleanPath
  };
}
