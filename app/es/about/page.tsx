import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Acerca de",
  description:
    "Conoce PublishPixel, una utilidad privada en navegador para preparar imágenes antes de publicarlas.",
  path: "/es/about",
  locale: "es"
});

export default function SpanishAboutPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Acerca de</p>
        <h1>Acerca de PublishPixel</h1>
        <p>
          PublishPixel es una herramienta gratuita basada en navegador para personas que publican
          imágenes en sitios web, blogs, redes sociales, YouTube, páginas de e-commerce, emails y
          contenido enfocado en SEO.
        </p>
        <p>
          La filosofía del producto es simple: preparar imágenes debe ser práctico, rápido y
          privado. Smart Image Publish Check ofrece una puntuación estimada de preparación, explica
          qué aspectos están bien y señala posibles problemas como archivos demasiado pesados,
          dimensiones pequeñas, proporciones inadecuadas o formatos que pueden no encajar con el
          destino elegido.
        </p>
        <h2>Flujo centrado en la privacidad</h2>
        <p>
          El análisis principal de la imagen ocurre en tu navegador. PublishPixel no sube tu imagen a
          un servidor para analizarla, no guarda imágenes de usuarios y solo usa localStorage para
          preferencias como tema, consentimiento y último preset seleccionado.
        </p>
        <h2>Guías originales de publicación</h2>
        <p>
          Además de la herramienta, PublishPixel publica guías prácticas sobre tamaño de imagen,
          texto alternativo, metadatos, compresión, formatos y privacidad fotográfica. El contenido
          está pensado para creadores reales y propietarios de sitios que necesitan revisiones
          comprensibles antes de publicar.
        </p>
        <h2>Para quién es</h2>
        <p>
          La herramienta está diseñada para bloggers, profesionales SEO, creadores, diseñadores,
          estudiantes, equipos de producto, vendedores de e-commerce y pequeñas empresas que
          necesitan una revisión rápida antes de publicar una imagen.
        </p>
        <h2>Cómo mantenemos recomendaciones responsables</h2>
        <p>
          PublishPixel evita fingir que una revisión automática en navegador puede juzgar por
          completo la calidad visual, derechos de autor, potencial de posicionamiento SEO o
          aprobación final de una plataforma. La herramienta se centra en señales que pueden revisarse
          desde el archivo y el contexto elegido: dimensiones, proporción, peso, formato, estructura
          del nombre de archivo, planificación del texto alternativo y opciones de exportación.
        </p>
        <p>
          Nuestras guías están escritas para decisiones prácticas de publicación, no para promesas
          exageradas. Cuando importe una plataforma, campaña de cliente, requisito de accesibilidad o
          contexto legal, conviene verificar también los requisitos oficiales antes de publicar.
        </p>
        <h2>Qué no hace PublishPixel</h2>
        <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
          <li>No garantiza rankings SEO.</li>
          <li>No verifica propiedad de derechos de autor ni permisos de uso de imagen.</li>
          <li>No promete aprobación en plataformas sociales, buscadores o sistemas publicitarios.</li>
          <li>
            No reemplaza la revisión humana de contenido visual, legibilidad, calidad de marca o
            riesgo legal.
          </li>
        </ul>
      </article>
    </section>
  );
}
