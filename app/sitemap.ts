import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { GUIDES } from "@/lib/guides";
import { getAlternatePaths } from "@/lib/i18n";
import {
  GUIDES_LAST_MODIFIED,
  SITEMAP_ROUTES,
  type SitemapRoute
} from "@/lib/sitemapRoutes";

/**
 * Sitemap generado en build a partir de `lib/sitemapRoutes.ts`.
 *
 * Sustituye al antiguo `public/sitemap.xml`, que tenía todos los lastmod
 * congelados en 2026-05-02 y llevaba a Google a dejar de releerlo (última
 * lectura registrada en Search Console: 28 mayo 2026).
 *
 * Cada URL se emite en sus dos variantes (EN y /es) con las alternativas
 * hreflang que ya usa `createPageMetadata`, de modo que sitemap y <head>
 * declaren exactamente lo mismo.
 */

function absolute(path: string) {
  return new URL(path, SITE_URL).toString();
}

function withAlternates(route: SitemapRoute): MetadataRoute.Sitemap {
  const alternatePaths = getAlternatePaths(route.path);
  const languages = {
    en: absolute(alternatePaths.en),
    es: absolute(alternatePaths.es),
    "x-default": absolute(alternatePaths["x-default"])
  };

  const lastModified = new Date(`${route.lastModified}T00:00:00Z`);

  return [alternatePaths.en, alternatePaths.es].map((path) => ({
    url: absolute(path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: { languages }
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = SITEMAP_ROUTES.flatMap(withAlternates);

  const guideRoutes = GUIDES.flatMap((guide) =>
    withAlternates({
      path: `/guides/${guide.slug}`,
      lastModified: GUIDES_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      sources: []
    })
  );

  return [...staticRoutes, ...guideRoutes];
}
