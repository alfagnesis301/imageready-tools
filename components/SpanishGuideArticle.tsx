import Link from "next/link";
import Breadcrumbs, { breadcrumbJsonLd } from "./Breadcrumbs";
import FAQ from "./FAQ";
import type { Guide } from "@/lib/guides";
import { articleJsonLd, faqJsonLd } from "@/lib/seo";

const genericFaqs = [
  {
    question: "¿PublishPixel reemplaza los requisitos oficiales de una plataforma?",
    answer:
      "No. PublishPixel ofrece estimaciones prácticas. Para campañas o subidas críticas, verifica siempre la documentación oficial."
  },
  {
    question: "¿Las imágenes se suben a un servidor?",
    answer:
      "No. La revisión principal usa APIs del navegador y no sube tus imágenes a un servidor para analizarlas."
  },
  {
    question: "¿Debo conservar el archivo original?",
    answer:
      "Sí. Mantén el original guardado y exporta una copia de publicación más ligera y adecuada para el canal."
  },
  {
    question: "¿Puede una herramienta automática decidir la calidad final?",
    answer:
      "No por completo. La herramienta ayuda con señales técnicas, pero la revisión visual y editorial sigue siendo humana."
  }
];

const guideSpecificNotes: Record<string, { heading: string; paragraphs: string[] }> = {
  "image-size-for-web": {
    heading: "Ejemplo práctico de dimensiones",
    paragraphs: [
      "Si una imagen aparece dentro de una columna de artículo de 760 px, subir el archivo original de 5000 px normalmente no aporta más valor al lector. Una copia de 1200 a 1600 px de ancho suele dar margen para pantallas nítidas sin cargar demasiados píxeles innecesarios.",
      "En cambio, una imagen principal de una portada puede necesitar más ancho porque ocupa una zona visual grande. La decisión no debería depender solo del archivo original, sino del espacio real donde la imagen se verá en escritorio y móvil."
    ]
  },
  "remove-image-metadata": {
    heading: "Ejemplo práctico de privacidad",
    paragraphs: [
      "Una foto tomada con un teléfono puede pasar por varias aplicaciones antes de publicarse. Algunas eliminan metadatos y otras pueden conservar parte de ellos. Por eso conviene exportar una copia de publicación y verificar archivos sensibles con una herramienta dedicada si la privacidad importa.",
      "También revisa lo que se ve en la imagen: documentos, direcciones, placas, credenciales, pantallas y reflejos pueden revelar más que los metadatos. Quitar EXIF no corrige detalles privados visibles."
    ]
  },
  "image-alt-text": {
    heading: "Ejemplo práctico de texto alternativo",
    paragraphs: [
      "Una misma foto puede necesitar descripciones distintas según la página. En una tienda, una mochila necesita información sobre color, forma o uso. En una entrada editorial, quizá el contexto importante sea que aparece sobre un escritorio de trabajo remoto.",
      "Evita escribir el texto alternativo como una lista de palabras clave. Es mejor una frase breve, específica y honesta que ayude a entender la imagen cuando no puede verse."
    ]
  },
  "webp-vs-jpeg-vs-png": {
    heading: "Ejemplo práctico de formato",
    paragraphs: [
      "Una fotografía grande suele funcionar bien como JPG comprimido o WebP. Un logotipo con transparencia debería mantenerse en PNG, WebP o SVG según el flujo. Convertir todo a un solo formato puede crear archivos pesados o romper fondos transparentes.",
      "La compatibilidad final también importa. Un CMS moderno puede aceptar WebP, mientras una herramienta antigua de email o marketplace puede preferir JPG o PNG. Elige el formato después de revisar el destino."
    ]
  },
  "image-seo-checklist": {
    heading: "Ejemplo práctico de SEO de imágenes",
    paragraphs: [
      "Un archivo llamado IMG_4821.jpg no dice mucho durante la publicación. Un nombre como mochila-negra-viaje-escritorio.jpg es más claro para el equipo, el CMS y el contexto de la página, sin caer en relleno de palabras clave.",
      "La imagen destacada también debería tener una vista previa social dedicada cuando la página sea importante. Eso evita depender de recortes automáticos que pueden cortar texto, rostros o productos."
    ]
  },
  "social-media-image-sizes": {
    heading: "Ejemplo práctico para redes sociales",
    paragraphs: [
      "Una imagen cuadrada puede verse bien en Instagram, pero puede perder fuerza como tarjeta Open Graph si el recorte queda demasiado cerrado. Para campañas importantes, prepara una versión cuadrada, una vertical y una ancha.",
      "Mantén el sujeto principal cerca del área central segura. Interfaces, pies de foto y superposiciones pueden ocultar detalles en bordes superiores, inferiores o laterales."
    ]
  },
  "compress-images-without-losing-quality": {
    heading: "Ejemplo práctico de compresión",
    paragraphs: [
      "Comprimir demasiado una foto de producto puede borrar texturas, bordes y etiquetas. En ese caso, una reducción moderada de calidad junto con redimensionado suele ser mejor que bajar la calidad de forma agresiva.",
      "Guarda siempre el original y exporta una copia para publicar. Si el resultado pierde detalle importante, puedes volver al archivo fuente y probar otro formato o una calidad diferente."
    ]
  },
  "photo-privacy-before-publishing": {
    heading: "Ejemplo práctico antes de publicar una foto",
    paragraphs: [
      "Antes de publicar una foto de oficina, revisa pantallas, pizarras, credenciales, documentos y reflejos. Esos detalles pueden revelar información aunque el archivo no tenga metadatos EXIF legibles.",
      "Para fotos personales o de menores, evita confiar solo en automatizaciones. Elige una copia pública, revisa el contexto completo y verifica que tienes permiso para publicar la imagen."
    ]
  },
  "image-publishing-checklist": {
    heading: "Ejemplo práctico de flujo previo",
    paragraphs: [
      "Antes de subir una imagen a una página de producto, revisa si el archivo tiene nombre claro, dimensiones consistentes con la cuadrícula, peso razonable y formato adecuado. Esa revisión evita corregir problemas después dentro del CMS.",
      "Para una entrada de blog, la prioridad puede ser distinta: imagen destacada, vista previa Open Graph, texto alternativo y carga rápida en móvil. El checklist debe adaptarse al destino."
    ]
  },
  "open-graph-image-best-practices": {
    heading: "Ejemplo práctico de Open Graph",
    paragraphs: [
      "Una tarjeta Open Graph suele mostrarse pequeña en móviles. Si el diseño incluye texto, usa pocas palabras, contraste alto y una zona central segura para evitar recortes.",
      "No dependas de una imagen aleatoria de la página para artículos importantes. Una imagen dedicada de 1200 x 630 px puede hacer que el enlace compartido se vea más intencional."
    ]
  },
  "youtube-thumbnail-image-guide": {
    heading: "Ejemplo práctico de miniatura",
    paragraphs: [
      "Una miniatura puede verse grande durante el diseño, pero muy pequeña en resultados de búsqueda o recomendaciones. Revisa que el rostro, producto o elemento principal siga siendo reconocible a tamaño reducido.",
      "El texto debe ser breve y legible. Si necesitas muchas palabras para explicar la miniatura, quizá la composición visual no está comunicando lo suficiente por sí sola."
    ]
  },
  "website-image-performance-checklist": {
    heading: "Ejemplo práctico de rendimiento",
    paragraphs: [
      "Una página puede tener imágenes correctas individualmente y aun así sentirse lenta si todas son demasiado grandes. Revisa la suma: imagen principal, tarjetas, avatares, capturas y gráficos secundarios.",
      "Optimiza antes de subir al CMS o gestor de contenido. Renombrar, redimensionar y exportar una copia ligera suele ser más simple cuando el archivo todavía está local."
    ]
  }
};

export default function SpanishGuideArticle({ guide }: { guide: Guide }) {
  const specificNote = guideSpecificNotes[guide.slug];
  const breadcrumbs = [
    { name: "Inicio", href: "/es" },
    { name: "Guías", href: "/es/guides" },
    { name: guide.title, href: `/es/guides/${guide.slug}` }
  ];

  return (
    <article className="shell py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(genericFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: guide.title,
              description: guide.description,
              path: `/es/guides/${guide.slug}`,
              dateModified: "2026-05-02",
              author: "PublishPixel Editorial Team"
            })
          )
        }}
      />
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
          {guide.title}
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          {guide.intro}
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900">
            Actualizado el 2 de mayo de 2026
          </span>
          <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900">
            Equipo editorial de PublishPixel
          </span>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-9">
        {guide.sections.map((section) => (
          <section key={section.heading} className="rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/82">
            <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              {section.heading}
            </h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        {specificNote && (
          <section className="rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/82">
            <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              {specificNote.heading}
            </h2>
            {specificNote.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {paragraph}
              </p>
            ))}
          </section>
        )}

        <section className="rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/82">
          <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Cómo ayuda PublishPixel
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            PublishPixel combina revisión de dimensiones, peso, formato, nombre de archivo, texto alternativo
            y señales de privacidad en un flujo basado en navegador. La idea es detectar problemas
            comunes antes de que la imagen llegue al CMS, tienda, campaña o plataforma social.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Las recomendaciones son estimaciones prácticas y no sustituyen la revisión oficial de
            requisitos, derechos de uso, calidad visual o contexto legal. Úsalas como una checklist
            previa a publicar.
          </p>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/82">
          <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Checklist rápido
          </h2>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
            <li>Define el destino de publicación antes de exportar.</li>
            <li>Comprueba dimensiones, proporción y peso del archivo.</li>
            <li>Elige formato según contenido, transparencia y compatibilidad.</li>
            <li>Prepara un nombre de archivo legible y un plan de texto alternativo.</li>
            <li>Revisa privacidad, metadatos y detalles visibles antes de publicar.</li>
          </ul>
        </section>

        <section>
          <p className="label">Flujo relacionado</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Revisa tu imagen antes de publicar
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Usa estas herramientas para preparar una copia de publicación más ligera, clara y
            adecuada al destino.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/es", label: "Revisión inteligente", description: "Obtén una puntuación PublishReady con recomendaciones." },
              { href: "/es/compress-image", label: "Comprimir imagen", description: "Reduce peso sin subir el archivo a un servidor." },
              { href: "/es/resize-image", label: "Redimensionar imagen", description: "Exporta tamaños prácticos para cada canal." },
              { href: "/es/convert-image", label: "Convertir formato", description: "Crea copias WebP, JPG o PNG cuando sea útil." }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft focus-ring dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700"
              >
                <h3 className="text-sm font-bold text-slate-950 dark:text-white">{link.label}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950 dark:border-amber-900/70 dark:bg-amber-950/35 dark:text-amber-100">
          <strong>Nota importante:</strong> Los requisitos de plataformas pueden cambiar. Para una
          campaña, subida o lanzamiento importante, verifica siempre las especificaciones oficiales.
        </section>

        <section>
          <p className="label">Preguntas frecuentes</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Preguntas sobre esta guía
          </h2>
          <div className="mt-5">
            <FAQ items={genericFaqs} />
          </div>
        </section>
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-blue-200 bg-blue-50 p-5 text-sm leading-7 text-blue-950 dark:border-blue-900/70 dark:bg-blue-950/35 dark:text-blue-100">
        <strong>Idea clave:</strong> {guide.takeaway}
      </div>
      <div className="mx-auto mt-6 max-w-3xl">
        <Link href="/es/smart-image-publish-check" className="button-primary">
          Revisar una imagen
        </Link>
      </div>
    </article>
  );
}
