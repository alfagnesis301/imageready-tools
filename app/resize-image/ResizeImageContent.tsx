"use client";

import Link from "next/link";
import LocalizedToolSeoPage, { type LocalizedFaq, type LocalizedText, type LocalizedToolSection } from "@/components/LocalizedToolSeoPage";
import { useLanguage } from "@/components/LanguageProvider";
import { withLocalePath } from "@/lib/i18n";

const page = {
  eyebrow: { en: "Image utility", es: "Utilidad de imagen" },
  title: { en: "Free Image Resizer", es: "Redimensionador de imágenes gratis" },
  description: {
    en: "Resize images for website layouts, Open Graph previews, YouTube thumbnails, Instagram posts, stories, Pinterest pins and email headers.",
    es: "Redimensiona imágenes para diseños web, vistas previas Open Graph, miniaturas de YouTube, publicaciones de Instagram, historias, pines de Pinterest y encabezados de email."
  },
  toolDescription: {
    en: "Upload an image, check its readiness and use the Resize image panel to export exact dimensions with optional aspect ratio lock.",
    es: "Sube una imagen, revisa su preparación y usa el panel Redimensionar imagen para exportar dimensiones exactas con bloqueo opcional de proporción."
  }
} satisfies Record<string, LocalizedText>;

const sections: LocalizedToolSection[] = [
  {
    heading: { en: "Resize by dimensions", es: "Redimensionar por dimensiones" },
    paragraphs: [
      {
        en: "Set a custom width and height or use common publishing presets for fast exports.",
        es: "Define ancho y alto personalizados o usa ajustes predefinidos comunes de publicación para exportar rápido."
      },
      {
        en: "This is useful when a platform asks for a specific size, when a hero image is too large or when a product grid needs consistent image dimensions.",
        es: "Es útil cuando una plataforma pide un tamaño específico, cuando una imagen principal es demasiado grande o cuando una cuadrícula de producto necesita dimensiones consistentes."
      }
    ]
  },
  {
    heading: { en: "Keep proportions", es: "Mantener proporciones" },
    paragraphs: [
      {
        en: "Aspect ratio lock helps keep the image from looking stretched when only one dimension changes.",
        es: "El bloqueo de proporción ayuda a evitar que la imagen se estire cuando cambias solo una dimensión."
      },
      {
        en: "If the destination needs a different ratio, crop intentionally instead of stretching the file to fit a shape.",
        es: "Si el destino necesita otra proporción, recorta de forma intencional en vez de estirar el archivo para encajarlo."
      }
    ]
  },
  {
    heading: { en: "Common use cases", es: "Casos de uso comunes" },
    paragraphs: [
      {
        en: "Use resizing for share previews, thumbnails, ecommerce grids, email headers and responsive website imagery.",
        es: "Usa redimensionado para vistas previas compartidas, miniaturas, cuadrículas e-commerce, encabezados de email e imágenes adaptables para sitios web."
      },
      {
        en: "For very small source images, resizing upward may meet a numeric target but it cannot restore missing detail, so the checker flags likely blurry results.",
        es: "En imágenes fuente muy pequeñas, ampliar puede cumplir un número de píxeles, pero no recupera detalle perdido; por eso la herramienta avisa si puede verse borroso."
      }
    ]
  }
];

const faqs: LocalizedFaq[] = [
  {
    question: { en: "Can I resize by exact width and height?", es: "¿Puedo redimensionar con ancho y alto exactos?" },
    answer: {
      en: "Yes. Upload an image, set the width and height, then export a resized version locally from your browser.",
      es: "Sí. Sube una imagen, define ancho y alto, y exporta una versión redimensionada localmente desde tu navegador."
    }
  },
  {
    question: { en: "What does lock aspect ratio do?", es: "¿Qué hace bloquear la proporción?" },
    answer: {
      en: "It keeps the image proportions consistent when you change width or height, which helps avoid stretched results.",
      es: "Mantiene las proporciones de la imagen cuando cambias ancho o alto, ayudando a evitar resultados estirados."
    }
  },
  {
    question: { en: "Does resizing make a small image sharper?", es: "¿Redimensionar hace más nítida una imagen pequeña?" },
    answer: {
      en: "No. Upscaling can fit a target size, but it usually cannot restore detail that was not present in the source image.",
      es: "No. Ampliar puede alcanzar un tamaño objetivo, pero normalmente no recupera detalle que no existía en la imagen fuente."
    }
  },
  {
    question: { en: "Which presets are included?", es: "¿Qué ajustes predefinidos incluye?" },
    answer: {
      en: "Common quick sizes include Open Graph, YouTube thumbnail, Instagram square, Story, Pinterest and email header dimensions.",
      es: "Incluye tamaños rápidos comunes como Open Graph, miniatura de YouTube, Instagram cuadrado, historia, Pinterest y encabezado de email."
    }
  }
];

const cards = [
  {
    title: { en: "Avoid oversized uploads", es: "Evita subidas sobredimensionadas" },
    body: {
      en: "A 5000px photo rarely needs to be uploaded at full size for a blog preview, product listing or email header.",
      es: "Una foto de 5000px rara vez necesita subirse completa para una vista previa de blog, ficha de producto o encabezado de email."
    }
  },
  {
    title: { en: "Protect aspect ratio", es: "Protege la proporción" },
    body: {
      en: "Locking the aspect ratio helps prevent stretched faces, products and graphics when one dimension changes.",
      es: "Bloquear la proporción ayuda a evitar rostros, productos y gráficos estirados cuando cambia una dimensión."
    }
  },
  {
    title: { en: "Create channel copies", es: "Crea copias por canal" },
    body: {
      en: "Export dedicated versions for Open Graph, YouTube, Instagram, Pinterest and product pages instead of forcing one crop everywhere.",
      es: "Exporta versiones dedicadas para Open Graph, YouTube, Instagram, Pinterest y páginas de producto en vez de forzar un solo recorte en todas partes."
    }
  }
];

const table = [
  {
    destination: { en: "Open Graph", es: "Open Graph" },
    target: { en: "1200 x 630 px", es: "1200 x 630 px" },
    note: { en: "Use a wide crop with centered focal content", es: "Usa un recorte ancho con el foco centrado" }
  },
  {
    destination: { en: "YouTube thumbnail", es: "Miniatura de YouTube" },
    target: { en: "1280 x 720 px", es: "1280 x 720 px" },
    note: { en: "Keep key text away from edges and overlays", es: "Mantén texto clave lejos de bordes y superposiciones" }
  },
  {
    destination: { en: "Instagram story", es: "Historia de Instagram" },
    target: { en: "1080 x 1920 px", es: "1080 x 1920 px" },
    note: { en: "Use a vertical 9:16 export with safe margins", es: "Usa una exportación vertical 9:16 con márgenes seguros" }
  },
  {
    destination: { en: "Product grid", es: "Grilla de producto" },
    target: { en: "1000 x 1000 px or larger", es: "1000 x 1000 px o más" },
    note: { en: "Keep crops consistent across listings", es: "Mantén recortes consistentes entre listados" }
  }
];

export default function ResizeImageContent() {
  const { language } = useLanguage();

  return (
    <LocalizedToolSeoPage
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      initialPreset="open-graph"
      path="/resize-image"
      toolDescription={page.toolDescription}
      sections={sections}
      faqs={faqs}
    >
      <div className="mx-auto max-w-4xl">
        <p className="label">{language === "es" ? "Flujo de redimensionado" : "Resize workflow"}</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          {language === "es"
            ? "Redimensiona imágenes para el lugar donde realmente aparecerán"
            : "Resize images for the place they will actually appear"}
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {language === "es"
            ? "Redimensionar no es solo hacer una imagen más pequeña. Un buen redimensionado de publicación coincide con el uso final: cuerpo de artículo, vista previa Open Graph, miniatura de YouTube, cuadrícula de producto, encabezado de email o recorte social. Si una imagen es mucho más grande que el diseño, la página envía píxeles que el lector nunca verá."
            : "Resizing is not only about making an image smaller. A good publishing resize matches the final use: article body, Open Graph preview, YouTube thumbnail, product grid, email header or social crop. When an image is far larger than the layout, the page sends pixels that readers never see."}
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {language === "es"
            ? "PublishPixel te ayuda a comparar dimensiones actuales con objetivos comunes antes de exportar una copia local. Esto reduce peso innecesario, ayuda a evitar recortes torpes y mantiene separado el original de la versión que se publicará. Redimensiona antes de comprimir cuando la fuente sea mucho más grande de lo necesario."
            : "PublishPixel helps you compare current dimensions with common publishing targets before exporting a local copy. This reduces unnecessary file weight, helps prevent awkward crops and keeps the original image separate from the version that goes live. Use resizing before compression when the source file is much larger than the destination needs."}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title.en} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-bold text-slate-950 dark:text-white">{card.title[language]}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{card.body[language]}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Destino" : "Destination"}</th>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Objetivo práctico" : "Practical target"}</th>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Nota de redimensionado" : "Resize note"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {table.map((row) => (
                <tr key={row.destination.en}>
                  {[row.destination, row.target, row.note].map((cell) => (
                    <td key={cell.en} className="px-4 py-4 text-slate-600 dark:text-slate-400">{cell[language]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">
            {language === "es" ? "Limitaciones claras del redimensionado" : "Clear resizing limitations"}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {language === "es"
              ? "Redimensionar no puede crear detalle que falta en la imagen fuente. Si el original está borroso o es demasiado pequeño, ampliarlo puede cumplir un objetivo de píxeles pero seguir viéndose débil. Para miniaturas, fotos de producto y secciones principales importantes, empieza con una fuente que ya tenga suficiente detalle y reduce desde ahí."
              : "Resizing cannot create detail that is missing from the source image. If the original is blurry or too small, upscaling may satisfy a pixel target but still look weak. For important thumbnails, product photos and hero sections, start with a source image that already has enough detail and resize down from there."}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={withLocalePath("/smart-image-publish-check", language)} className="button-primary">
              {language === "es" ? "Revisar dimensiones" : "Check dimensions"}
            </Link>
            <Link href={withLocalePath("/guides/image-size-for-web", language)} className="button-secondary">
              {language === "es" ? "Guía de tamaño web" : "Web size guide"}
            </Link>
            <Link href={withLocalePath("/social-media-image-sizes", language)} className="button-secondary">
              {language === "es" ? "Guía de tamaños sociales" : "Social size guide"}
            </Link>
          </div>
        </div>
      </div>
    </LocalizedToolSeoPage>
  );
}
