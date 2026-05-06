import Link from "next/link";
import SpanishToolPage from "@/components/SpanishToolPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Revisor SEO y metadatos de imagen",
  description:
    "Revisa peso, dimensiones, nombre de archivo, formato y preparacion de una imagen antes de subirla a tu sitio o compartirla.",
  path: "/es/image-seo-meta-checker",
  locale: "es"
});

export default function SpanishImageSeoMetaCheckerPage() {
  return (
    <>
      <SpanishToolPage
        eyebrow="SEO de imagen"
        title="Revisor SEO y metadatos de imagen"
        description="Analiza peso, dimensiones, nombre de archivo, formato y preparacion de publicacion en un flujo privado basado en navegador."
        preset="website-blog"
        toolDescription="Sube una imagen y obten una revision practica para SEO de imagen, rendimiento web, nombres de archivo y compatibilidad con vistas previas sociales."
        sections={[
          {
            title: "Antes de subir",
            body: "Esta herramienta esta pensada para revisar una imagen antes de que entre en el CMS, la tienda o la pagina final. Asi es mas facil corregir dimensiones, peso y nombre del archivo."
          },
          {
            title: "SEO y contexto",
            body: "El valor no esta solo en el alt text. Tambien importan el tamaño real, la proporcion, el formato, el nombre del archivo y el canal donde la imagen va a aparecer."
          },
          {
            title: "Privacidad local",
            body: "La imagen se analiza localmente en tu navegador. PublishPixel no necesita subir el archivo a un servidor para revisar señales tecnicas basicas."
          }
        ]}
        ctaHref="/es/smart-image-publish-check"
        ctaLabel="Ir a la revision completa"
      />

      <section className="shell space-y-12 py-12">
        <section>
          <p className="label">Google Images</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Por que importa el SEO de imagen
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Una imagen bien preparada puede ayudar a la claridad de la pagina, a la velocidad de carga y a la coherencia entre buscadores, vistas previas sociales y contenido editorial. No garantiza trafico ni rankings, pero si reduce errores comunes antes de publicar.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            El objetivo es tomar mejores decisiones antes de subir el archivo: revisar el nombre, el peso, las dimensiones, el formato y el uso real de la imagen en el sitio o campaña.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Checklist de SEO de imagen
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li>Usa nombres de archivo descriptivos</li>
              <li>Añade texto alternativo preciso</li>
              <li>Comprime imagenes pesadas antes de publicar</li>
              <li>Usa WebP cuando tenga sentido</li>
              <li>Ajusta el tamaño a la ubicacion real</li>
              <li>Define width y height para evitar saltos</li>
              <li>Prepara variantes para diferentes pantallas</li>
              <li>Crea recortes especificos para social cuando haga falta</li>
            </ul>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Errores comunes
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li>Subir imagenes enormes sin necesidad</li>
              <li>Usar nombres genericos como IMG_1234</li>
              <li>Reutilizar el mismo recorte en todos los canales</li>
              <li>Ignorar el peso final en movil</li>
              <li>Olvidar vistas Open Graph y sociales</li>
              <li>Escribir texto alternativo vago o forzado</li>
            </ul>
          </article>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Siguientes pasos recomendados
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Si la imagen necesita mejora, pasa al siguiente paso concreto: comprimir, redimensionar o revisar la preparacion completa antes de publicarla en el canal final.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/es/compress-image" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
              Comprimir imagen
            </Link>
            <Link href="/es/resize-image" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
              Redimensionar imagen
            </Link>
            <Link href="/es/smart-image-publish-check" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
              Revision completa
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}