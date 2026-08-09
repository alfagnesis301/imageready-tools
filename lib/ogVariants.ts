/**
 * Catálogo de imágenes Open Graph del sitio.
 *
 * Antes se declaraba `/favicon.svg` como og:image con `width: 1200` y
 * `height: 630`: dimensiones falsas y, sobre todo, un formato que Facebook,
 * X/Twitter, LinkedIn y WhatsApp no renderizan. Cada enlace compartido salía
 * sin miniatura, justo en un sitio cuyo argumento es "revisa tus imágenes
 * antes de publicar".
 *
 * El PNG real de 1200x630 lo dibuja `lib/ogImage.tsx` y lo sirve la ruta
 * estática `/og/<slug>` (ver `app/og/[slug]/route.tsx`). Se hace así en lugar
 * de usar la convención `opengraph-image.tsx` de Next porque esa convención NO
 * se hereda entre segmentos: obligaría a un fichero por cada una de las ~40
 * rutas del sitio. Con una URL estable y con extensión, en cambio,
 * `createPageMetadata` la pone por defecto en todas y también se puede
 * referenciar desde los datos estructurados.
 *
 * Este módulo se mantiene aparte del renderizador para que las páginas no
 * arrastren `next/og` solo por leer los metadatos.
 *
 * Los SVG de `public/` se conservan solo como fuente de diseño.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export type OgVariant = {
  /** Línea superior corta: la sección a la que pertenece la página. */
  eyebrow: string;
  /** Titular. Conviene mantenerlo por debajo de ~45 caracteres. */
  title: string;
  /** Una frase de apoyo. */
  subtitle: string;
  /** Texto alternativo que se emite en `og:image:alt`. */
  alt: string;
};

/**
 * Cada clave es el nombre del fichero servido: `/og/<clave>`.
 * `default.png` es la imagen que usa cualquier página sin variante propia.
 */
export const OG_VARIANTS = {
  "default.png": {
    eyebrow: "Image tools",
    title: "Check every image before you publish",
    subtitle: "Size, dimensions, format, alt text and metadata, without uploading the file.",
    alt: "PublishPixel: free in-browser image checks before you publish"
  },
  "smart-check.png": {
    eyebrow: "Pre-publish check",
    title: "Smart Image Publish Check",
    subtitle: "One pass over size, format, dimensions, filename, alt text and metadata.",
    alt: "Smart Image Publish Check: pre-publish image checker"
  },
  "social-sizes.png": {
    eyebrow: "Size guide 2026",
    title: "Social media image sizes",
    subtitle:
      "Exact pixel dimensions for Instagram, Facebook, X, LinkedIn, TikTok, YouTube and Pinterest.",
    alt: "Social media image sizes for every major platform in 2026"
  },
  "instagram.png": {
    eyebrow: "Instagram",
    title: "Instagram image size checker",
    subtitle: "3:4 feed posts, 4:5, square, stories and Reel covers, checked before you upload.",
    alt: "Instagram image size checker: feed, story and Reel formats"
  },
  "metadata.png": {
    eyebrow: "Privacy",
    title: "Image metadata checker",
    subtitle:
      "See the EXIF, GPS and camera data hidden in a photo. The file never leaves your device.",
    alt: "Image metadata checker: inspect EXIF and GPS data in your browser"
  },
  "website-optimizer.png": {
    eyebrow: "Web performance",
    title: "Website image optimizer",
    subtitle: "Compress, resize and convert images so pages stay fast on mobile.",
    alt: "Website image optimizer: compress and resize images for faster pages"
  }
} satisfies Record<string, OgVariant>;

export type OgVariantSlug = keyof typeof OG_VARIANTS;

export const DEFAULT_OG_SLUG: OgVariantSlug = "default.png";

/** Ruta relativa al og:image de una variante, lista para `metadata`. */
export function ogImagePath(slug: OgVariantSlug = DEFAULT_OG_SLUG): string {
  return `/og/${slug}`;
}

/** URL absoluta, para datos estructurados. */
export function ogImageUrl(slug: OgVariantSlug = DEFAULT_OG_SLUG): string {
  return `https://publishpixel.net/og/${slug}`;
}

/** Bloque `images` de `openGraph`/`twitter`, con dimensiones y tipo reales. */
export function ogImageMeta(slug: OgVariantSlug = DEFAULT_OG_SLUG) {
  const variant = OG_VARIANTS[slug] ?? OG_VARIANTS[DEFAULT_OG_SLUG];

  return {
    url: ogImagePath(slug),
    width: OG_SIZE.width,
    height: OG_SIZE.height,
    type: OG_CONTENT_TYPE,
    alt: variant.alt
  };
}
