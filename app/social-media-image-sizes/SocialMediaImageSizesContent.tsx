"use client";

import AdSlot from "@/components/AdSlot";
import FAQ from "@/components/FAQ";
import SmartPublishCheck from "@/components/SmartPublishCheck";
import { useLanguage, type Language } from "@/components/LanguageProvider";
import { faqJsonLd } from "@/lib/seo";

const faqs = [
  {
    question: {
      en: "Are these official social media requirements?",
      es: "¿Estos son requisitos oficiales de redes sociales?"
    },
    answer: {
      en: "No. This guide lists commonly used dimensions and practical publishing recommendations. Always verify official requirements for critical campaigns.",
      es: "No. Esta guía recoge dimensiones comunes y recomendaciones prácticas de publicación. Verifica siempre requisitos oficiales para campañas críticas."
    }
  },
  {
    question: { en: "Why do aspect ratios matter?", es: "¿Por qué importan las proporciones?" },
    answer: {
      en: "Aspect ratios help platforms display your image without unexpected cropping, borders or awkward previews.",
      es: "Las proporciones ayudan a que las plataformas muestren tu imagen sin recortes inesperados, bordes o vistas previas torpes."
    }
  },
  {
    question: { en: "Can one image work everywhere?", es: "¿Una sola imagen puede funcionar en todas partes?" },
    answer: {
      en: "Sometimes a flexible source image can be adapted, but important channels often deserve dedicated crops or exports.",
      es: "A veces una fuente flexible puede adaptarse, pero los canales importantes suelen merecer recortes o exportaciones dedicadas."
    }
  },
  {
    question: { en: "Should every image be WebP?", es: "¿Todas las imágenes deberían ser WebP?" },
    answer: {
      en: "WebP is useful for websites, while some upload workflows still prefer JPG or PNG. Choose based on the destination.",
      es: "WebP es útil para sitios web, mientras algunos flujos de subida aún prefieren JPG o PNG. Elige según el destino."
    }
  }
];

const rows = [
  {
    platform: "Open Graph",
    use: { en: "Article or website preview", es: "Vista previa de artículo o sitio web" },
    size: { en: "1200 x 630 px", es: "1200 x 630 px" },
    ratio: { en: "1.91:1", es: "1.91:1" },
    note: {
      en: "Keep important content centered and use JPG or PNG when sharing compatibility matters.",
      es: "Mantén el contenido importante centrado y usa JPG o PNG cuando importe la compatibilidad al compartir."
    }
  },
  {
    platform: "Google Discover",
    use: { en: "Large article image", es: "Imagen grande de artículo" },
    size: { en: "1200 px wide or larger", es: "1200 px de ancho o más" },
    ratio: { en: "16:9 commonly used", es: "16:9 usado con frecuencia" },
    note: {
      en: "Use high-quality imagery and compress carefully to balance quality and speed.",
      es: "Usa imágenes de alta calidad y comprime con cuidado para equilibrar calidad y velocidad."
    }
  },
  {
    platform: "YouTube",
    use: { en: "Video thumbnail", es: "Miniatura de video" },
    size: { en: "1280 x 720 px", es: "1280 x 720 px" },
    ratio: { en: "16:9", es: "16:9" },
    note: {
      en: "Leave safe space around text and faces because overlays may cover edges.",
      es: "Deja espacio seguro alrededor de texto y rostros porque las superposiciones pueden cubrir bordes."
    }
  },
  {
    platform: "Instagram",
    use: { en: "Square post", es: "Publicación cuadrada" },
    size: { en: "1080 x 1080 px", es: "1080 x 1080 px" },
    ratio: { en: "1:1", es: "1:1" },
    note: {
      en: "Works well for grid consistency and product-focused images.",
      es: "Funciona bien para consistencia de cuadrícula e imágenes centradas en producto."
    }
  },
  {
    platform: "Instagram",
    use: { en: "Portrait post", es: "Publicación vertical" },
    size: { en: "1080 x 1350 px", es: "1080 x 1350 px" },
    ratio: { en: "4:5", es: "4:5" },
    note: {
      en: "Often gives more vertical space in the feed.",
      es: "Suele dar más espacio vertical en el feed."
    }
  },
  {
    platform: "Instagram",
    use: { en: "Story or vertical creative", es: "Historia o pieza vertical" },
    size: { en: "1080 x 1920 px", es: "1080 x 1920 px" },
    ratio: { en: "9:16", es: "9:16" },
    note: {
      en: "Keep key content away from top and bottom UI areas.",
      es: "Mantén el contenido clave lejos de las zonas de interfaz superior e inferior."
    }
  },
  {
    platform: "LinkedIn",
    use: { en: "Feed image", es: "Imagen de feed" },
    size: { en: "1200 x 627 px", es: "1200 x 627 px" },
    ratio: { en: "1.91:1", es: "1.91:1" },
    note: {
      en: "Use a clear focal area and avoid tiny text.",
      es: "Usa un área focal clara y evita texto demasiado pequeño."
    }
  },
  {
    platform: "Pinterest",
    use: { en: "Standard pin", es: "Pin estándar" },
    size: { en: "1000 x 1500 px", es: "1000 x 1500 px" },
    ratio: { en: "2:3", es: "2:3" },
    note: {
      en: "Tall images usually provide more room for detail.",
      es: "Las imágenes altas suelen dar más espacio para detalle."
    }
  },
  {
    platform: "E-commerce",
    use: { en: "Product image", es: "Imagen de producto" },
    size: { en: "1000 x 1000 px or larger", es: "1000 x 1000 px o más" },
    ratio: { en: "1:1", es: "1:1" },
    note: {
      en: "A clean background is usually helpful, but this tool does not detect background quality.",
      es: "Un fondo limpio suele ayudar, pero esta herramienta no detecta la calidad del fondo."
    }
  },
  {
    platform: "Email",
    use: { en: "Header image", es: "Imagen de encabezado" },
    size: { en: "600-1200 px wide", es: "600-1200 px de ancho" },
    ratio: { en: "Flexible", es: "Flexible" },
    note: {
      en: "Keep files lightweight for faster email loading.",
      es: "Mantén archivos ligeros para una carga más rápida en email."
    }
  }
];

const cards = [
  {
    title: { en: "Start with the destination", es: "Empieza por el destino" },
    body: {
      en: "A social image should be prepared for where it appears: feed, story, preview card, thumbnail, pin or product grid.",
      es: "Una imagen social debe prepararse para donde aparecerá: feed, historia, tarjeta de vista previa, miniatura, pin o cuadrícula de producto."
    }
  },
  {
    title: { en: "Keep a safe focal area", es: "Mantén un área focal segura" },
    body: {
      en: "Interfaces, captions and previews may crop edges. Important content usually works best near the visual center.",
      es: "Interfaces, pies de foto y vistas previas pueden recortar bordes. El contenido importante suele funcionar mejor cerca del centro visual."
    }
  },
  {
    title: { en: "Export intentionally", es: "Exporta con intención" },
    body: {
      en: "Use a dedicated export for important channels instead of relying on one oversized master image everywhere.",
      es: "Usa una exportación dedicada para canales importantes en vez de depender de una imagen maestra sobredimensionada en todas partes."
    }
  }
];

const checklist = [
  {
    en: "Choose the destination before resizing.",
    es: "Elige el destino antes de redimensionar."
  },
  {
    en: "Keep the focal point near the center-safe area.",
    es: "Mantén el punto focal cerca del área central segura."
  },
  {
    en: "Create a separate Open Graph image for important pages.",
    es: "Crea una imagen Open Graph separada para páginas importantes."
  },
  {
    en: "Check text readability on mobile previews.",
    es: "Revisa la legibilidad del texto en vistas previas móviles."
  },
  {
    en: "Compress the final export without blurring key details.",
    es: "Comprime la exportación final sin borrar detalles clave."
  },
  {
    en: "Verify official platform requirements for critical campaigns.",
    es: "Verifica requisitos oficiales de plataforma en campañas críticas."
  }
];

export default function SocialMediaImageSizesContent() {
  const { language } = useLanguage();
  const localizedFaqs = localizeFaqs(language);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(localizedFaqs)) }} />
      <section className="shell py-10">
        <div className="max-w-3xl">
          <p className="label">{language === "es" ? "Guía de publicación" : "Publishing guide"}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            {language === "es" ? "Guía de tamaños de imagen para redes sociales" : "Social Media Image Sizes Guide"}
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            {language === "es"
              ? "Usa esta guía original como punto de partida práctico para tamaños comunes de imágenes sociales, vistas previas, miniaturas, visuales de producto y gráficos de email."
              : "Use this original guide as a practical starting point for common social image sizes, previews, thumbnails, product visuals and email graphics."}
          </p>
        </div>
        <div className="mt-8">
          <SmartPublishCheck
            initialPreset="open-graph"
            heading={language === "es" ? "Revisar una imagen social" : "Check a social media image"}
            description={
              language === "es"
                ? "Sube una imagen y elige un ajuste predefinido social para comparar dimensiones, proporción, peso y formato."
                : "Upload an image and choose a social preset to compare dimensions, ratio, file size and format guidance."
            }
          />
        </div>
      </section>

      <div className="shell">
        <AdSlot className="mb-12" />
      </div>

      <section className="shell py-10">
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Plataforma" : "Platform"}</th>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Uso" : "Use"}</th>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Tamaño recomendado" : "Recommended size"}</th>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Proporción" : "Ratio"}</th>
                <th scope="col" className="px-4 py-3">{language === "es" ? "Nota práctica" : "Practical note"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {rows.map((row) => (
                <tr key={`${row.platform}-${row.use.en}`}>
                  <td className="px-4 py-4 font-bold text-slate-950 dark:text-white">{row.platform}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.use[language]}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.size[language]}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.ratio[language]}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.note[language]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/58 py-14 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="shell grid gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title.en} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-extrabold text-slate-950 dark:text-white">{card.title[language]}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{card.body[language]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell py-14">
        <div className="mx-auto max-w-4xl">
          <p className="label">{language === "es" ? "Flujo multi-plataforma" : "Multi-platform workflow"}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            {language === "es"
              ? "Cómo preparar una imagen para múltiples plataformas sociales"
              : "How to prepare one image for multiple social platforms"}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {language === "es"
              ? "Una sola imagen rara vez encaja perfectamente en cada plataforma. Una tarjeta Open Graph ancha, una publicación cuadrada de Instagram, una historia vertical y un pin alto de Pinterest usan espacios visuales distintos. Para campañas importantes, empieza con un archivo maestro grande y crea exportaciones dedicadas para cada destino."
              : "A single image rarely fits every platform perfectly. A wide Open Graph card, a square Instagram post, a vertical Story and a tall Pinterest pin all use different visual spaces. For important campaigns, start with a large master file and create dedicated exports for each destination."}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {language === "es"
              ? "Mantén rostros, productos, texto y logos importantes lejos de los bordes extremos. Interfaces, pies de foto, superposiciones y recortes de vista previa pueden ocultar detalles cerca del borde."
              : "Keep important faces, products, text and logos away from the extreme edges. Platform interfaces, captions, overlays and preview crops can hide or cut off details near the border."}
          </p>
          <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70">
            <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
              {language === "es" ? "Checklist de exportación social" : "Social image export checklist"}
            </h3>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              {checklist.map((item) => (
                <li key={item.en}>{item[language]}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="shell py-14">
        <div className="max-w-3xl">
          <p className="label">FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            {language === "es" ? "Preguntas sobre tamaños sociales" : "Social image size questions"}
          </h2>
        </div>
        <div className="mt-8">
          <FAQ items={localizedFaqs} />
        </div>
        <AdSlot variant="inline" className="mt-10" />
      </section>
    </>
  );
}

function localizeFaqs(language: Language) {
  return faqs.map((faq) => ({
    question: faq.question[language],
    answer: faq.answer[language]
  }));
}
