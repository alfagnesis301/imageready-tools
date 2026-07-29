/**
 * Alcance indexable de la versión española.
 *
 * Contexto (auditoría GSC 29 jul 2026): de las 7 URLs en estado "Rastreada:
 * actualmente sin indexar", 6 eran /es/. Google rastreaba la traducción y
 * decidía que no aportaba valor suficiente, y las páginas indexadas del
 * dominio bajaron de 64 a 53. Mantener 27 URLs españolas compitiendo por
 * atención de rastreo cuando solo 5 acumulan demanda medible diluye el
 * presupuesto de rastreo de todo el sitio.
 *
 * Decisión: se mantienen indexables las rutas españolas con demanda real en
 * Search Console; el resto sigue accesible para quien cambie de idioma, pero
 * sale del sitemap y lleva noindex. No se borra ninguna página.
 *
 * Cifras del periodo 30 abr – 27 jul 2026 (3 meses, todo el historial):
 *
 *   /es                              65 imp   pos 55,3   3 clics
 *   /es/image-metadata-checker      149 imp   pos 56,7
 *   /es/image-seo-meta-checker       73 imp   pos 57,7
 *   /es/guides/remove-image-metadata 54 imp   pos 36,0
 *   /es/youtube-thumbnail-checker    23 imp   pos  9,0   1 clic
 *   /es/social-media-image-sizes     13 imp   pos 27,8   <- mejor posición del
 *                                    cluster principal del sitio, se mantiene
 *
 * Las 21 rutas restantes suman 10 impresiones entre todas.
 *
 * Para volver a abrir una ruta española basta añadir su path en inglés aquí:
 * el sitemap, el hreflang y el robots se derivan de esta lista.
 */

import { stripLocaleFromPathname } from "./i18n";

/** Paths EN cuya variante /es se mantiene indexable. */
const SPANISH_INDEXABLE_PATHS = new Set<string>([
  "/",
  "/image-metadata-checker",
  "/image-seo-meta-checker",
  "/guides/remove-image-metadata",
  "/youtube-thumbnail-checker",
  "/social-media-image-sizes"
]);

/**
 * True si la variante española de esta ruta debe indexarse. Acepta el path en
 * cualquiera de los dos idiomas.
 */
export function isSpanishIndexable(path: string) {
  return SPANISH_INDEXABLE_PATHS.has(stripLocaleFromPathname(path));
}

export function isSpanishPath(path: string) {
  return path === "/es" || path.startsWith("/es/");
}
