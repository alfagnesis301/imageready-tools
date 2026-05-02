"use client";

import Link from "next/link";
import LocalizedToolSeoPage, { type LocalizedFaq, type LocalizedText, type LocalizedToolSection } from "@/components/LocalizedToolSeoPage";
import { useLanguage } from "@/components/LanguageProvider";
import { withLocalePath } from "@/lib/i18n";

const page = {
  eyebrow: { en: "Image utility", es: "Utilidad de imagen" },
  title: { en: "Free Image Compressor", es: "Compresor de imágenes gratis" },
  description: {
    en: "Reduce image weight for websites, blogs, previews and campaigns with a browser-based compressor that keeps your file local.",
    es: "Reduce el peso de imágenes para websites, blogs, previews y campañas con un compresor en el navegador que mantiene tu archivo local."
  },
  toolDescription: {
    en: "Upload an image, review its file size and use the Compress and convert panel to export an optimized JPG, WebP or PNG preview.",
    es: "Sube una imagen, revisa su peso y usa el panel Comprimir y convertir para exportar una preview optimizada en JPG, WebP o PNG."
  }
} satisfies Record<string, LocalizedText>;

const sections: LocalizedToolSection[] = [
  {
    heading: { en: "What it does", es: "Qué hace" },
    paragraphs: [
      {
        en: "The compressor estimates output size, lets you adjust quality and exports a new image locally when the browser supports the chosen format.",
        es: "El compresor estima el tamaño de salida, permite ajustar la calidad y exporta una nueva imagen localmente cuando el navegador soporta el formato elegido."
      },
      {
        en: "Use it before uploading article images, product photos, thumbnails or campaign graphics so the file is lighter before it reaches a CMS or page builder.",
        es: "Úsalo antes de subir imágenes de artículos, fotos de producto, miniaturas o gráficos de campaña para que el archivo llegue más ligero a tu CMS o constructor de páginas."
      }
    ]
  },
  {
    heading: { en: "Format choices", es: "Elección de formato" },
    paragraphs: [
      {
        en: "Use JPG for many photos, PNG when transparency or crisp graphics matter, and WebP when you want a modern balance of quality and size.",
        es: "Usa JPG para muchas fotos, PNG cuando importen transparencia o gráficos nítidos, y WebP cuando quieras un equilibrio moderno entre calidad y peso."
      },
      {
        en: "If transparency is detected, keep a format that supports it unless you intentionally want a flattened background.",
        es: "Si se detecta transparencia, conserva un formato compatible salvo que quieras a propósito un fondo plano."
      }
    ]
  },
  {
    heading: { en: "When to compress", es: "Cuándo comprimir" },
    paragraphs: [
      {
        en: "Compression is useful before uploading blog images, hero images, product visuals, email graphics and social previews that may slow down loading.",
        es: "La compresión es útil antes de subir imágenes de blog, hero images, visuales de producto, gráficos de email y previews sociales que podrían ralentizar la carga."
      },
      {
        en: "Compression does not replace responsive image markup, caching or a good hosting setup, but it can reduce unnecessary weight at the source.",
        es: "La compresión no reemplaza responsive images, caché ni buen hosting, pero puede reducir peso innecesario desde el archivo de origen."
      }
    ]
  }
];

const faqs: LocalizedFaq[] = [
  {
    question: { en: "How does the image compressor work?", es: "¿Cómo funciona el compresor de imágenes?" },
    answer: {
      en: "After you upload a supported image, the browser draws it to Canvas and exports a new file with the selected quality and format when supported.",
      es: "Después de subir una imagen compatible, el navegador la dibuja en Canvas y exporta un nuevo archivo con la calidad y el formato seleccionados cuando es compatible."
    }
  },
  {
    question: { en: "When should I use WebP?", es: "¿Cuándo debería usar WebP?" },
    answer: {
      en: "WebP is often useful for reducing file size while preserving good visual quality, especially for website and blog images.",
      es: "WebP suele ser útil para reducir peso conservando buena calidad visual, especialmente en imágenes para websites y blogs."
    }
  },
  {
    question: { en: "When is JPG a good choice?", es: "¿Cuándo es buena opción JPG?" },
    answer: {
      en: "JPG is commonly useful for photos and broad compatibility, especially when transparency is not required.",
      es: "JPG suele ser útil para fotos y compatibilidad amplia, especialmente cuando no se necesita transparencia."
    }
  },
  {
    question: { en: "Should I compress PNG files?", es: "¿Debería comprimir archivos PNG?" },
    answer: {
      en: "PNG is useful for transparency and sharp graphics, but it may be heavier for photos. WebP can often be a better publishing format.",
      es: "PNG es útil para transparencia y gráficos nítidos, pero puede ser pesado para fotos. WebP a menudo puede ser mejor formato de publicación."
    }
  }
];

const table = [
  {
    type: { en: "Blog photo", es: "Foto de blog" },
    approach: { en: "Export JPG or WebP at balanced quality", es: "Exportar JPG o WebP con calidad equilibrada" },
    risk: { en: "Large file slowing article load", es: "Archivo pesado que ralentiza el artículo" }
  },
  {
    type: { en: "Product image", es: "Imagen de producto" },
    approach: { en: "Keep detail, reduce unnecessary dimensions", es: "Conservar detalle y reducir dimensiones innecesarias" },
    risk: { en: "Blurry product details after over-compression", es: "Detalles borrosos por exceso de compresión" }
  },
  {
    type: { en: "Transparent graphic", es: "Gráfico transparente" },
    approach: { en: "Use PNG or WebP with transparency", es: "Usar PNG o WebP con transparencia" },
    risk: { en: "Losing transparent background in JPG", es: "Perder el fondo transparente al exportar JPG" }
  },
  {
    type: { en: "Email header", es: "Header de email" },
    approach: { en: "Keep width practical and file lightweight", es: "Mantener ancho práctico y archivo ligero" },
    risk: { en: "Slow loading in email clients", es: "Carga lenta en clientes de email" }
  }
];

const cards = [
  {
    title: { en: "Use cases", es: "Casos de uso" },
    body: {
      en: "Compress blog images, feature images, lightweight product visuals, email banners and preview graphics before they are added to a live publishing system.",
      es: "Comprime imágenes de blog, imágenes destacadas, visuales de producto ligeros, banners de email y gráficos de preview antes de agregarlos a un sistema de publicación real."
    }
  },
  {
    title: { en: "Quality checks", es: "Chequeos de calidad" },
    body: {
      en: "Review faces, product edges, text, gradients and logos after export. File size is only useful when the visual still supports the page.",
      es: "Revisa rostros, bordes de producto, texto, degradados y logos después de exportar. El peso solo importa si la imagen sigue funcionando para la página."
    }
  },
  {
    title: { en: "Limitations", es: "Limitaciones" },
    body: {
      en: "Browser encoders vary. For critical brand, print or archival work, keep your original and verify the exported file in the final destination.",
      es: "Los codificadores del navegador varían. Para marca, impresión o archivo crítico, conserva el original y verifica el archivo exportado en el destino final."
    }
  }
];

const mistakes = [
  {
    title: { en: "Compressing the original instead of a copy", es: "Comprimir el original en vez de una copia" },
    body: {
      en: "Keep the original file untouched. Export a publishing copy so you can always return to the high-quality source later.",
      es: "Mantén intacto el archivo original. Exporta una copia de publicación para poder volver después a la fuente de alta calidad."
    }
  },
  {
    title: { en: "Choosing JPG for transparent graphics", es: "Elegir JPG para gráficos transparentes" },
    body: {
      en: "JPG does not support transparency. Use PNG or WebP if the image needs a transparent background.",
      es: "JPG no soporta transparencia. Usa PNG o WebP si la imagen necesita fondo transparente."
    }
  },
  {
    title: { en: "Over-compressing product images", es: "Comprimir demasiado imágenes de producto" },
    body: {
      en: "Product details, fabric textures, labels and edges can suffer when compression is too aggressive.",
      es: "Detalles de producto, texturas, etiquetas y bordes pueden sufrir cuando la compresión es demasiado agresiva."
    }
  },
  {
    title: { en: "Ignoring dimensions", es: "Ignorar las dimensiones" },
    body: {
      en: "A compressed 5000px image can still be too large. Resize and compress together for better publishing results.",
      es: "Una imagen comprimida de 5000px aún puede ser demasiado grande. Redimensiona y comprime juntos para mejores resultados."
    }
  }
];

export default function CompressImageContent() {
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
        <p className="label">{language === "es" ? "Flujo de compresión" : "Compression workflow"}</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          {language === "es"
            ? "Comprime imágenes antes de que ralenticen tu página"
            : "Compress images before they slow down your page"}
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {language === "es"
            ? "Los archivos de imagen pesados son uno de los problemas más fáciles de pasar por alto antes de publicar. Una foto puede verse perfecta en una herramienta de diseño y aun así ser innecesariamente pesada para un blog, landing page, página de producto o header de email. PublishPixel te ayuda a crear una copia más ligera directamente en tu navegador, mientras el archivo original queda guardado con seguridad."
            : "Large image files are one of the easiest problems to miss before publishing. A photo may look perfect in a design tool but still be unnecessarily heavy for a blog post, landing page, product page or email header. PublishPixel helps you create a lighter publishing copy directly in your browser, so the original file can stay safely stored while the web version is prepared for real use."}
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {language === "es"
            ? "El compresor está diseñado para publicación web práctica. No reemplaza tu imagen maestra, un flujo profesional de impresión ni un pipeline responsive completo. Es un paso rápido antes de subir: revisa el peso actual, elige formato de salida, prueba calidad y descarga una copia más fácil de usar en un CMS, tienda, herramienta de email o campaña."
            : "The compressor is designed for practical web publishing. It is not a replacement for your master image, a professional print workflow or a full responsive image pipeline. Instead, it gives creators, marketers and site owners a fast pre-upload step: check the current weight, choose an output format, test a quality level and download a publishing copy that is easier to move through a CMS, store builder, email tool or campaign page."}
        </p>

        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Tipo de imagen" : "Image type"}</th>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Enfoque recomendado" : "Recommended approach"}</th>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Riesgo principal" : "Main risk"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {table.map((row) => (
                <tr key={row.type.en}>
                  {[row.type, row.approach, row.risk].map((cell) => (
                    <td key={cell.en} className="px-4 py-4 text-slate-600 dark:text-slate-400">{cell[language]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title.en} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-bold text-slate-950 dark:text-white">{card.title[language]}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{card.body[language]}</p>
            </article>
          ))}
        </div>

        <section className="mt-10">
          <h3 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            {language === "es" ? "Errores comunes al comprimir" : "Common compression mistakes"}
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {mistakes.map((item) => (
              <article key={item.title.en} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h4 className="font-bold text-slate-950 dark:text-white">{item.title[language]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.body[language]}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-900/70 dark:bg-blue-950/35">
          <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">
            {language === "es" ? "Continúa el chequeo de publicación" : "Continue the publishing check"}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
            {language === "es"
              ? "La compresión es solo una señal de preparación. Después de exportar una copia más ligera, compara la imagen con un preset de destino, revisa el nombre del archivo, confirma el recorte y evalúa los metadatos antes de publicar."
              : "Compression is only one readiness signal. After exporting a lighter copy, compare the image against a destination preset, check the filename, confirm the crop and review metadata awareness before publishing."}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={withLocalePath("/smart-image-publish-check", language)} className="button-primary">
              {language === "es" ? "Ejecutar Smart Check" : "Run Smart Check"}
            </Link>
            <Link href={withLocalePath("/guides/compress-images-without-losing-quality", language)} className="button-secondary">
              {language === "es" ? "Guía de compresión" : "Compression guide"}
            </Link>
            <Link href={withLocalePath("/guides/webp-vs-jpeg-vs-png", language)} className="button-secondary">
              {language === "es" ? "Guía de formatos" : "Format guide"}
            </Link>
          </div>
        </div>
      </div>
    </LocalizedToolSeoPage>
  );
}
