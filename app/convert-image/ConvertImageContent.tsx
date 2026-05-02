"use client";

import Link from "next/link";
import LocalizedToolSeoPage, { type LocalizedFaq, type LocalizedText, type LocalizedToolSection } from "@/components/LocalizedToolSeoPage";
import { useLanguage } from "@/components/LanguageProvider";
import { withLocalePath } from "@/lib/i18n";

const page = {
  eyebrow: { en: "Image utility", es: "Utilidad de imagen" },
  title: { en: "Free Image Converter", es: "Conversor de imágenes gratis" },
  description: {
    en: "Convert images to publishing-friendly formats such as WebP, JPG or PNG without uploading the file to a server.",
    es: "Convierte imágenes a formatos prácticos para publicar, como WebP, JPG o PNG, sin subir el archivo a un servidor."
  },
  toolDescription: {
    en: "Upload an image and use the Compress and convert panel to export a new local file in a supported format.",
    es: "Sube una imagen y usa el panel Comprimir y convertir para exportar un nuevo archivo local en un formato compatible."
  }
} satisfies Record<string, LocalizedText>;

const sections: LocalizedToolSection[] = [
  {
    heading: { en: "Convert JPG, PNG and WebP", es: "Convertir JPG, PNG y WebP" },
    paragraphs: [
      {
        en: "Canvas export can create practical JPG, PNG and WebP versions for many browser-supported raster images.",
        es: "La exportación por Canvas puede crear versiones prácticas en JPG, PNG y WebP para muchas imágenes raster compatibles con el navegador."
      },
      {
        en: "The conversion is designed for publishing copies, not for archival master files or professional prepress workflows.",
        es: "La conversión está pensada para copias de publicación, no para archivos maestros, archivo histórico ni flujos profesionales de preimpresión."
      }
    ]
  },
  {
    heading: { en: "Format recommendations", es: "Recomendaciones de formato" },
    paragraphs: [
      {
        en: "WebP is often useful for modern web publishing, JPG is common for photos, and PNG is useful when transparency or crisp graphics are important.",
        es: "WebP suele ser útil para publicación web moderna, JPG es común para fotos y PNG es útil cuando importan transparencia o gráficos nítidos."
      },
      {
        en: "PublishPixel recommends the output format based on the current file, transparency signal and selected publishing preset.",
        es: "PublishPixel recomienda el formato de salida según el archivo actual, la señal de transparencia y el preset de publicación seleccionado."
      }
    ]
  },
  {
    heading: { en: "Clear limitations", es: "Limitaciones claras" },
    paragraphs: [
      {
        en: "Browser support differs. If a format cannot be exported, the app shows a clear message instead of pretending the conversion succeeded.",
        es: "El soporte del navegador varía. Si un formato no puede exportarse, la app muestra un mensaje claro en vez de fingir que la conversión funcionó."
      },
      {
        en: "SVG files receive basic safety-conscious analysis, but the app does not execute user SVG markup or promise SVG-to-raster conversion.",
        es: "Los archivos SVG reciben un análisis básico con enfoque de seguridad, pero la app no ejecuta marcado SVG del usuario ni promete conversión SVG a raster."
      }
    ]
  }
];

const faqs: LocalizedFaq[] = [
  {
    question: { en: "Which conversions are supported?", es: "¿Qué conversiones son compatibles?" },
    answer: {
      en: "The browser export tool supports common raster conversions such as PNG to JPG, JPG to WebP, PNG to WebP and WebP to JPG when the browser allows it.",
      es: "La herramienta de exportación del navegador soporta conversiones raster comunes como PNG a JPG, JPG a WebP, PNG a WebP y WebP a JPG cuando el navegador lo permite."
    }
  },
  {
    question: { en: "Will transparency be preserved?", es: "¿Se conservará la transparencia?" },
    answer: {
      en: "Transparency can be preserved in PNG and WebP exports. JPG does not support transparency and uses a white background.",
      es: "La transparencia puede conservarse en exportaciones PNG y WebP. JPG no soporta transparencia y usa un fondo blanco."
    }
  },
  {
    question: { en: "Can I convert SVG?", es: "¿Puedo convertir SVG?" },
    answer: {
      en: "This app performs basic SVG checks but does not export SVG as raster because SVG handling can vary by browser and workflow.",
      es: "Esta app hace chequeos básicos de SVG, pero no exporta SVG como raster porque su manejo varía según navegador y flujo de trabajo."
    }
  },
  {
    question: { en: "Is conversion private?", es: "¿La conversión es privada?" },
    answer: {
      en: "Yes. The conversion happens locally in the browser and the image is not uploaded by this app.",
      es: "Sí. La conversión ocurre localmente en el navegador y esta app no sube la imagen."
    }
  }
];

const table = [
  {
    format: { en: "JPG", es: "JPG" },
    best: { en: "Photos and broad compatibility", es: "Fotos y compatibilidad amplia" },
    watch: { en: "No transparency support", es: "No soporta transparencia" }
  },
  {
    format: { en: "PNG", es: "PNG" },
    best: { en: "Transparency, icons and crisp graphics", es: "Transparencia, iconos y gráficos nítidos" },
    watch: { en: "Can be heavy for large photos", es: "Puede ser pesado para fotos grandes" }
  },
  {
    format: { en: "WebP", es: "WebP" },
    best: { en: "Modern web pages and smaller exports", es: "Páginas modernas y exportaciones más ligeras" },
    watch: { en: "Check compatibility for older workflows", es: "Verifica compatibilidad en flujos antiguos" }
  },
  {
    format: { en: "SVG", es: "SVG" },
    best: { en: "Simple vector logos and icons", es: "Logos e iconos vectoriales simples" },
    watch: { en: "Do not execute untrusted SVG markup", es: "No ejecutes SVG no confiable" }
  }
];

const cards = [
  {
    title: { en: "When conversion helps", es: "Cuándo ayuda convertir" },
    body: {
      en: "Convert PNG photos to WebP or JPG when transparency is not needed. Convert JPG to WebP when your website supports modern formats and you want a smaller publishing copy. Keep PNG or WebP when transparent edges are part of the design.",
      es: "Convierte fotos PNG a WebP o JPG cuando no necesites transparencia. Convierte JPG a WebP si tu sitio soporta formatos modernos y quieres una copia más ligera. Mantén PNG o WebP cuando los bordes transparentes sean parte del diseño."
    }
  },
  {
    title: { en: "What conversion cannot solve", es: "Qué no puede resolver la conversión" },
    body: {
      en: "Format conversion does not fix a poor crop, blurry source, inaccurate alt text or oversized dimensions by itself. Use it together with resizing, compression and the Smart Image Publish Check.",
      es: "Convertir formato no arregla por sí solo un mal recorte, una fuente borrosa, alt text impreciso o dimensiones sobredimensionadas. Úsalo junto con redimensionado, compresión y el Smart Image Publish Check."
    }
  }
];

export default function ConvertImageContent() {
  const { language } = useLanguage();

  return (
    <LocalizedToolSeoPage
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      initialPreset="website-blog"
      toolDescription={page.toolDescription}
      sections={sections}
      faqs={faqs}
    >
      <div className="mx-auto max-w-4xl">
        <p className="label">{language === "es" ? "Flujo de formato" : "Format workflow"}</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          {language === "es"
            ? "Convierte imágenes en formatos prácticos para publicar"
            : "Convert images into practical publishing formats"}
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {language === "es"
            ? "Cada contexto de publicación necesita formatos distintos. JPG suele ser útil para fotos, PNG para transparencia y gráficos nítidos, mientras WebP puede ofrecer un gran equilibrio entre calidad y peso en páginas web modernas. Elegir mal el formato puede hacer el archivo más pesado de lo necesario o eliminar transparencia importante."
            : "Different publishing contexts need different image formats. JPG is often useful for photos, PNG is useful for transparency and crisp interface graphics, while WebP can provide a strong balance between quality and file size for modern web pages. Choosing the wrong format can make a file heavier than necessary or remove transparency that the design needs."}
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {language === "es"
            ? "PublishPixel crea una copia de publicación basada en el navegador. No reemplaza formatos profesionales de archivo, flujos de impresión ni archivos fuente originales. La idea es crear una versión web práctica, comprobar si el formato encaja con el destino y evitar cambios accidentales como convertir un logo transparente en JPG."
            : "PublishPixel creates a browser-based publishing copy. It is not meant to replace professional archival formats, print workflows or original source files. The point is to create a practical web version, check whether the format fits the destination and avoid accidental changes such as flattening a transparent logo into a JPG."}
        </p>

        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Formato" : "Format"}</th>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Mejor para" : "Best for"}</th>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Cuidado con" : "Watch out for"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {table.map((row) => (
                <tr key={row.format.en}>
                  {[row.format, row.best, row.watch].map((cell) => (
                    <td key={cell.en} className="px-4 py-4 text-slate-600 dark:text-slate-400">{cell[language]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <article key={card.title.en} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-bold text-slate-950 dark:text-white">{card.title[language]}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{card.body[language]}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-900/70 dark:bg-blue-950/35">
          <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">
            {language === "es" ? "Elige el formato después de revisar el destino" : "Choose the format after checking the destination"}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
            {language === "es"
              ? "Una imagen web, header de email, preview social y ficha de producto pueden no necesitar el mismo formato. Empieza con el preset de destino, revisa si importa la transparencia y exporta el archivo más pequeño que siga viéndose claro en contexto."
              : "A website image, email header, social preview and product listing may not need the same format. Start with the destination preset, check whether transparency matters, then export the smallest file that still looks clear in context."}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={withLocalePath("/smart-image-publish-check", language)} className="button-primary">
              {language === "es" ? "Comparar con presets" : "Compare with presets"}
            </Link>
            <Link href={withLocalePath("/guides/webp-vs-jpeg-vs-png", language)} className="button-secondary">
              {language === "es" ? "Leer guía de formatos" : "Read format guide"}
            </Link>
            <Link href={withLocalePath("/compress-image", language)} className="button-secondary">
              {language === "es" ? "Comprimir después de convertir" : "Compress after converting"}
            </Link>
          </div>
        </div>
      </div>
    </LocalizedToolSeoPage>
  );
}
