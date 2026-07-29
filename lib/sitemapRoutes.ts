/**
 * Registro central de rutas indexables del sitio.
 *
 * `lastModified` debe reflejar la fecha REAL del último cambio de contenido de
 * la página, no la fecha del último despliegue. Google usa lastmod para decidir
 * a qué URLs dedica presupuesto de rastreo: si todas las fechas cambian en cada
 * build, la señal se vuelve ruido y deja de tenerse en cuenta.
 *
 * Al editar el contenido de una página, actualiza aquí su fecha (AAAA-MM-DD).
 * `npm run sitemap:dates` imprime la fecha del último commit de cada fichero
 * fuente para comprobar que este registro sigue alineado con el repositorio.
 *
 * Las páginas legales llevan noindex (ver PR #10) y quedan fuera a propósito,
 * igual que las rutas alias que solo emiten un 301.
 */

export type SitemapRoute = {
  /** Ruta en inglés, siempre con barra inicial. La variante /es se deriva. */
  path: string;
  /** Fecha real del último cambio de contenido (AAAA-MM-DD). */
  lastModified: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
  /** Ficheros fuente que determinan la fecha, para `npm run sitemap:dates`. */
  sources: string[];
};

export const SITEMAP_ROUTES: SitemapRoute[] = [
  {
    path: "/",
    lastModified: "2026-05-19",
    changeFrequency: "weekly",
    priority: 1.0,
    sources: ["app/page.tsx"]
  },
  {
    path: "/smart-image-publish-check",
    lastModified: "2026-06-27",
    changeFrequency: "monthly",
    priority: 0.95,
    sources: ["app/smart-image-publish-check/page.tsx"]
  },
  {
    path: "/compress-image",
    lastModified: "2026-05-02",
    changeFrequency: "monthly",
    priority: 0.9,
    sources: ["app/compress-image/page.tsx"]
  },
  {
    path: "/resize-image",
    lastModified: "2026-05-02",
    changeFrequency: "monthly",
    priority: 0.9,
    sources: ["app/resize-image/page.tsx"]
  },
  {
    path: "/convert-image",
    lastModified: "2026-05-02",
    changeFrequency: "monthly",
    priority: 0.9,
    sources: ["app/convert-image/page.tsx"]
  },
  {
    path: "/social-media-image-sizes",
    lastModified: "2026-07-02",
    changeFrequency: "monthly",
    priority: 0.85,
    sources: ["app/social-media-image-sizes/page.tsx", "lib/socialImageSizes.ts"]
  },
  {
    path: "/open-graph-image-checker",
    lastModified: "2026-05-01",
    changeFrequency: "monthly",
    priority: 0.85,
    sources: ["app/open-graph-image-checker/page.tsx"]
  },
  {
    path: "/youtube-thumbnail-checker",
    lastModified: "2026-05-18",
    changeFrequency: "monthly",
    priority: 0.85,
    sources: ["app/youtube-thumbnail-checker/page.tsx"]
  },
  {
    path: "/image-alt-text-checker",
    lastModified: "2026-05-01",
    changeFrequency: "monthly",
    priority: 0.85,
    sources: ["app/image-alt-text-checker/page.tsx"]
  },
  {
    path: "/image-metadata-checker",
    lastModified: "2026-05-01",
    changeFrequency: "monthly",
    priority: 0.85,
    sources: ["app/image-metadata-checker/page.tsx"]
  },
  {
    path: "/website-image-optimizer",
    lastModified: "2026-06-27",
    changeFrequency: "monthly",
    priority: 0.85,
    sources: ["app/website-image-optimizer/page.tsx"]
  },
  {
    path: "/image-seo-meta-checker",
    lastModified: "2026-05-18",
    changeFrequency: "monthly",
    priority: 0.85,
    sources: ["app/image-seo-meta-checker/page.tsx"]
  },
  {
    path: "/instagram-image-checker",
    lastModified: "2026-05-18",
    changeFrequency: "monthly",
    priority: 0.85,
    sources: ["app/instagram-image-checker/page.tsx"]
  },
  {
    path: "/guides",
    lastModified: "2026-05-02",
    changeFrequency: "monthly",
    priority: 0.75,
    sources: ["app/guides/page.tsx"]
  },
  {
    path: "/about",
    lastModified: "2026-05-03",
    changeFrequency: "monthly",
    priority: 0.6,
    sources: ["app/about/page.tsx"]
  }
];

/**
 * Guías editoriales. Comparten fecha porque su contenido vive en los mismos
 * módulos (`lib/guides.ts`, `lib/guidesEs.ts`, `lib/guideEnhancements.ts`),
 * revisados en bloque el 2026-06-27.
 */
export const GUIDES_LAST_MODIFIED = "2026-06-27";

export const GUIDE_SOURCES = [
  "lib/guides.ts",
  "lib/guidesEs.ts",
  "lib/guideEnhancements.ts"
];
