/**
 * Layout del árbol en español.
 *
 * Solo el layout raíz puede renderizar <html>, y es un Server Component sin
 * acceso a la ruta, así que el HTML estático se sirve con `lang="en"`. Este
 * script corrige el atributo en cuanto el navegador lo parsea, antes de la
 * hidratación, de modo que un lector de pantalla ya encuentra `lang="es"`.
 *
 * En navegación de cliente el script no se ejecuta (React no ejecuta scripts
 * inline al renderizar en cliente), pero ahí el `useEffect` de
 * LanguageProvider ya fija el idioma. Ambos caminos quedan cubiertos.
 *
 * El idioma real de cada URL lo declaran el hreflang del <head> y el sitemap,
 * que son las señales que Google usa: el atributo `lang` lo ignora.
 */
export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang="es"' }} />
      {children}
    </>
  );
}
