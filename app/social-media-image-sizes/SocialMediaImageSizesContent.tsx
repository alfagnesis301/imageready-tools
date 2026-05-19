"use client";

import AdSlot from "@/components/AdSlot";
import FAQ from "@/components/FAQ";
import LocalizedLink from "@/components/LocalizedLink";
import SmartPublishCheck from "@/components/SmartPublishCheck";
import { useLanguage } from "@/components/LanguageProvider";
import {
  SOCIAL_MEDIA_IMAGE_OG_ABSOLUTE,
  SOCIAL_MEDIA_IMAGE_SIZES,
  UNIVERSAL_SOCIAL_IMAGE_SIZES,
  getCheatSheetRows,
  getSocialMediaFaqs,
  type LanguageCode
} from "@/lib/socialImageSizes";

const TOOL_LINKS = [
  {
    href: "/website-image-optimizer",
    anchor: { en: "Website Image Optimizer", es: "Optimizador de imágenes para sitios web" },
    description: {
      en: "Compress and optimize your images before uploading them to your website or social channels.",
      es: "Comprime y optimiza tus imágenes antes de subirlas a tu sitio o a canales sociales."
    }
  },
  {
    href: "/resize-image",
    anchor: { en: "Resize Image Online", es: "Redimensionar imagen online" },
    description: {
      en: "Resize images to the recommended social media dimensions.",
      es: "Redimensiona imágenes a los tamaños recomendados para redes sociales."
    }
  },
  {
    href: "/compress-image",
    anchor: { en: "Compress Image Online", es: "Comprimir imagen online" },
    description: {
      en: "Reduce file size while keeping your social media images sharp.",
      es: "Reduce el peso del archivo manteniendo nítidas tus imágenes para redes sociales."
    }
  },
  {
    href: "/smart-image-publish-check",
    anchor: { en: "Smart Image Publish Check", es: "Revisión inteligente de imágenes" },
    description: {
      en: "Check whether your image is ready to publish before uploading.",
      es: "Comprueba si tu imagen está lista para publicarse antes de subirla."
    }
  }
];

const CROPPING_TIPS = {
  en: [
    "Keep important text away from edges.",
    "Center faces, logos, and product details.",
    "Export separate versions for square, portrait, and vertical.",
    "Use 9:16 for stories, reels, shorts, and TikTok.",
    "Use 4:5 for mobile feed posts where supported.",
    "Preview images before publishing.",
    "Compress images without making text blurry.",
    "Use JPG for photos and PNG or WebP for graphics where appropriate."
  ],
  es: [
    "Mantén el texto importante lejos de los bordes.",
    "Centra rostros, logos y detalles de producto.",
    "Exporta versiones separadas para formato cuadrado, vertical e historias.",
    "Usa 9:16 para historias, reels, shorts y TikTok.",
    "Usa 4:5 para publicaciones pensadas para móvil cuando la plataforma lo soporte.",
    "Previsualiza las imágenes antes de publicar.",
    "Comprime las imágenes sin volver borroso el texto.",
    "Usa JPG para fotos y PNG o WebP para gráficos cuando tenga sentido."
  ]
};

const TOC_ITEMS = {
  en: [
    ["cheat-sheet", "Social media image sizes cheat sheet"],
    ["instagram-image-sizes", "Instagram image sizes"],
    ["facebook-image-sizes", "Facebook image sizes"],
    ["x-twitter-image-sizes", "X / Twitter image sizes"],
    ["linkedin-image-sizes", "LinkedIn image sizes"],
    ["youtube-image-sizes", "YouTube image sizes"],
    ["tiktok-image-sizes", "TikTok image sizes"],
    ["pinterest-image-sizes", "Pinterest image sizes"],
    ["best-universal-image-sizes", "Best universal image sizes"],
    ["avoid-cropping", "How to avoid cropping"],
    ["optimize-images", "How to optimize images before publishing"],
    ["faq", "FAQ"]
  ],
  es: [
    ["cheat-sheet", "Referencia rápida de tamaños para redes sociales"],
    ["instagram-image-sizes", "Tamaños de imagen para Instagram"],
    ["facebook-image-sizes", "Tamaños de imagen para Facebook"],
    ["x-twitter-image-sizes", "Tamaños de imagen para X / Twitter"],
    ["linkedin-image-sizes", "Tamaños de imagen para LinkedIn"],
    ["youtube-image-sizes", "Tamaños de imagen para YouTube"],
    ["tiktok-image-sizes", "Tamaños de imagen para TikTok"],
    ["pinterest-image-sizes", "Tamaños de imagen para Pinterest"],
    ["best-universal-image-sizes", "Mejores tamaños universales"],
    ["avoid-cropping", "Cómo evitar recortes"],
    ["optimize-images", "Cómo optimizar imágenes antes de publicar"],
    ["faq", "Preguntas frecuentes"]
  ]
};

const PLATFORM_HEADINGS = {
  instagram: { en: "Instagram Image Sizes", es: "Tamaños de imagen para Instagram" },
  facebook: { en: "Facebook Image Sizes", es: "Tamaños de imagen para Facebook" },
  "x-twitter": { en: "X / Twitter Image Sizes", es: "Tamaños de imagen para X / Twitter" },
  linkedin: { en: "LinkedIn Image Sizes", es: "Tamaños de imagen para LinkedIn" },
  youtube: { en: "YouTube Image Sizes", es: "Tamaños de imagen para YouTube" },
  tiktok: { en: "TikTok Image Sizes", es: "Tamaños de imagen para TikTok" },
  pinterest: { en: "Pinterest Image Sizes", es: "Tamaños de imagen para Pinterest" }
} as const;

const QUICK_ANSWER = {
  en: "Most social platforms work well with 1080 px wide images for feed posts, 1080 x 1920 px for vertical stories or short-form video covers, and platform-specific banner sizes for profiles and channels. The safest 2026 workflow is to design one square version, one 4:5 portrait version, and one 9:16 vertical version, then export platform-specific crops.",
  es: "La mayoría de plataformas funcionan bien con imágenes de 1080 px de ancho para el feed, 1080 x 1920 px para historias verticales o portadas de vídeo corto, y banners específicos para perfiles y canales. El flujo más seguro en 2026 es diseñar una versión cuadrada, una versión vertical 4:5 y una versión 9:16, y después exportar recortes específicos por plataforma."
};

const PAGE_COPY = {
  en: {
    title: "Social Media Image Sizes 2026: Complete Guide for Every Platform",
    intro:
      "Find the recommended image dimensions for Instagram, Facebook, X, LinkedIn, YouTube, TikTok, Pinterest, and more — with safe defaults for feed posts, stories, reels, banners, thumbnails, and profile images.",
    microcopy: "Free image size guide for creators, marketers, and publishers.",
    quickAnswerTitle: "Quick answer",
    tocTitle: "Table of contents",
    toolEyebrow: "Check image sizes with your own file",
    toolTitle: "Check Image Sizes",
    toolDescription:
      "Upload an image and compare it against common social media placements, dimensions, aspect ratios, and file-size expectations before publishing.",
    cheatSheetEyebrow: "Fast reference",
    cheatSheetTitle: "Social Media Image Sizes Cheat Sheet",
    cheatSheetIntro:
      "Use this table as a practical starting point for the most common placements across major social platforms in 2026.",
    universalTitle: "Best Universal Image Sizes to Create First",
    universalIntro:
      "These five exports cover most publishing needs for creators, marketers, and publishers. Build these first, then create platform-specific crops when a channel needs something more precise.",
    croppingTitle: "How to Avoid Cropping on Social Media",
    croppingIntro:
      "A technically correct size can still crop badly if important content sits too close to the edges. Safe layouts and preview checks matter as much as the raw dimensions.",
    optimizeTitle: "How to Optimize Images Before Publishing",
    optimizeP1:
      "Social media image dimensions are only part of the job. A file can match the recommended canvas and still be heavier than needed, soft after compression, or difficult to read on mobile.",
    optimizeP2:
      "A practical workflow is to resize first, export in the most suitable format for the image, and compress the final publishing copy without making text or product edges blurry.",
    optimizeP3:
      "PublishPixel can help you review dimensions, optimize file size, and sanity-check whether an image is ready before it goes live.",
    faqTitle: "Social Media Image Sizes FAQ",
    relatedTitle: "Related tools",
    relatedIntro:
      "Use these PublishPixel tools to resize, compress, optimize, or review an image before you upload it to a social platform.",
    finalNote:
      "These sizes are recommended starting points, not permanent rules. Social platforms change interfaces, crops, and display behavior over time, so always preview important uploads before publishing."
  },
  es: {
    title: "Tamaños de imagen para redes sociales 2026: guía completa para cada plataforma",
    intro:
      "Consulta dimensiones recomendadas para Instagram, Facebook, X, LinkedIn, YouTube, TikTok, Pinterest y más, con valores seguros para publicaciones de feed, historias, reels, banners, miniaturas e imágenes de perfil.",
    microcopy: "Guía gratuita de tamaños para creadores, profesionales de marketing y editores.",
    quickAnswerTitle: "Respuesta rápida",
    tocTitle: "Tabla de contenidos",
    toolEyebrow: "Comprueba el tamaño de tu propia imagen",
    toolTitle: "Comprobar tamaños de imagen",
    toolDescription:
      "Sube una imagen y compárala con ubicaciones sociales comunes, dimensiones, proporciones y expectativas de peso antes de publicar.",
    cheatSheetEyebrow: "Referencia rápida",
    cheatSheetTitle: "Referencia rápida de tamaños para redes sociales",
    cheatSheetIntro:
      "Usa esta tabla como punto de partida práctico para las ubicaciones más comunes de las principales plataformas sociales en 2026.",
    universalTitle: "Mejores tamaños universales para crear primero",
    universalIntro:
      "Estas cinco versiones cubren la mayoría de necesidades de publicación para creadores, profesionales de marketing y editores. Crea estas primero y luego exporta recortes específicos cuando una plataforma lo necesite.",
    croppingTitle: "Cómo evitar recortes en redes sociales",
    croppingIntro:
      "Un tamaño técnicamente correcto aún puede recortarse mal si el contenido importante queda demasiado cerca de los bordes. El diseño seguro y la vista previa importan tanto como las dimensiones.",
    optimizeTitle: "Cómo optimizar imágenes antes de publicar",
    optimizeP1:
      "Las dimensiones son solo una parte del trabajo. Un archivo puede coincidir con el lienzo recomendado y aun así pesar demasiado, perder nitidez tras comprimir o verse mal en móvil.",
    optimizeP2:
      "Un flujo práctico es redimensionar primero, exportar en el formato más adecuado para la imagen y comprimir la copia final sin volver borroso el texto ni los detalles del producto.",
    optimizeP3:
      "PublishPixel puede ayudarte a revisar dimensiones, optimizar el peso y comprobar si una imagen parece lista antes de publicarla.",
    faqTitle: "Preguntas frecuentes sobre tamaños de imagen para redes sociales",
    relatedTitle: "Herramientas relacionadas",
    relatedIntro:
      "Usa estas herramientas de PublishPixel para redimensionar, comprimir, optimizar o revisar una imagen antes de subirla a una plataforma social.",
    finalNote:
      "Estos tamaños son puntos de partida recomendados, no reglas permanentes. Las plataformas cambian interfaces, recortes y comportamiento de visualización con el tiempo, así que conviene previsualizar siempre las subidas importantes."
  }
} as const;

export default function SocialMediaImageSizesContent() {
  const { language } = useLanguage();
  const copy = PAGE_COPY[language as LanguageCode];
  const faqItems = getSocialMediaFaqs(language as LanguageCode);
  const cheatSheetRows = getCheatSheetRows();
  const tocItems = TOC_ITEMS[language as LanguageCode];
  const pagePath = language === "es" ? "/es/social-media-image-sizes" : "/social-media-image-sizes";
  const pageUrl = `https://publishpixel.net${pagePath}`;

  const graphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://publishpixel.net/#organization",
        name: "PublishPixel",
        url: "https://publishpixel.net",
        logo: {
          "@type": "ImageObject",
          url: "https://publishpixel.net/favicon.svg"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: language === "es" ? "Inicio" : "Home",
            item: language === "es" ? "https://publishpixel.net/es" : "https://publishpixel.net/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: copy.title,
            item: pageUrl
          }
        ]
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: copy.title,
        description:
          language === "es"
            ? "Consulta dimensiones recomendadas para Instagram, Facebook, X, LinkedIn, YouTube, TikTok, Pinterest y más."
            : "Find the recommended image dimensions for Instagram, Facebook, X, LinkedIn, YouTube, TikTok, Pinterest, and more.",
        image: SOCIAL_MEDIA_IMAGE_OG_ABSOLUTE,
        datePublished: "2026-05-09",
        dateModified: "2026-05-09",
        author: {
          "@type": "Organization",
          name: "PublishPixel",
          url: "https://publishpixel.net"
        },
        publisher: {
          "@type": "Organization",
          name: "PublishPixel",
          url: "https://publishpixel.net",
          logo: {
            "@type": "ImageObject",
            url: "https://publishpixel.net/favicon.svg"
          }
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }}
      />

      <article className="shell py-10 lg:py-14">
        <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <p className="label">{copy.microcopy}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {copy.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#tool" className="button-primary">
                {language === "es" ? "Comprobar tamaños de imagen" : "Check Image Sizes"}
              </a>
              <LocalizedLink href="/website-image-optimizer" className="button-secondary">
                {language === "es" ? "Optimizar una imagen" : "Optimize an Image"}
              </LocalizedLink>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              2026
            </p>
            <h2 className="mt-3 text-xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              {copy.quickAnswerTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {QUICK_ANSWER[language as LanguageCode]}
            </p>
          </aside>
        </section>

        <section className="mt-10 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            {copy.tocTitle}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tocItems.map(([href, label]) => (
              <a
                key={href}
                href={`#${href}`}
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-blue-700 dark:hover:text-blue-300"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <section id="tool" className="mt-10">
          <div className="max-w-3xl">
            <p className="label">{copy.toolEyebrow}</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              {copy.toolTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {copy.toolDescription}
            </p>
          </div>
          <div className="mt-8">
            <SmartPublishCheck
              initialPreset="open-graph"
              heading={language === "es" ? "Comprobar una imagen para redes sociales" : "Check a social media image"}
              description={
                language === "es"
                  ? "Sube una imagen y compárala con dimensiones sociales comunes, proporción, peso y recomendaciones de publicación."
                  : "Upload an image and compare it against common social dimensions, aspect ratios, file size expectations, and publishing recommendations."
              }
            />
          </div>
        </section>
      </article>

      <div className="shell">
        <AdSlot className="mb-12" />
      </div>

      <section id="cheat-sheet" className="shell py-12">
        <div className="max-w-3xl">
          <p className="label">{copy.cheatSheetEyebrow}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            {copy.cheatSheetTitle}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {copy.cheatSheetIntro}
          </p>
        </div>
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
              <tr>
                <th className="px-4 py-3">{language === "es" ? "Plataforma" : "Platform"}</th>
                <th className="px-4 py-3">{language === "es" ? "Tipo de imagen" : "Image type"}</th>
                <th className="px-4 py-3">{language === "es" ? "Tamaño recomendado" : "Recommended size"}</th>
                <th className="px-4 py-3">{language === "es" ? "Proporción" : "Aspect ratio"}</th>
                <th className="px-4 py-3">{language === "es" ? "Notas" : "Notes"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {cheatSheetRows.map(({ platform, item }) => (
                <tr key={`${platform}-${item.id}`}>
                  <td className="px-4 py-4 font-semibold text-slate-950 dark:text-white">{platform}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{item.type[language as LanguageCode]}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{item.dimensions}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{item.aspectRatio}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{item.notes[language as LanguageCode]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/58 py-14 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="shell space-y-8">
          {SOCIAL_MEDIA_IMAGE_SIZES.map((platform) => (
            <section
              key={platform.id}
              id={`${platform.id}-image-sizes`}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
                {PLATFORM_HEADINGS[platform.id as keyof typeof PLATFORM_HEADINGS][language as LanguageCode]}
              </h2>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                {platform.intro[language as LanguageCode]}
              </p>
              <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
                  <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
                    <tr>
                      <th className="px-4 py-3">{language === "es" ? "Tipo" : "Image type"}</th>
                      <th className="px-4 py-3">{language === "es" ? "Tamaño" : "Recommended size"}</th>
                      <th className="px-4 py-3">{language === "es" ? "Proporción" : "Aspect ratio"}</th>
                      <th className="px-4 py-3">{language === "es" ? "Notas" : "Notes"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {platform.items.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-4 font-semibold text-slate-950 dark:text-white">
                          {item.type[language as LanguageCode]}
                        </td>
                        <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{item.dimensions}</td>
                        <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{item.aspectRatio}</td>
                        <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{item.notes[language as LanguageCode]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section id="best-universal-image-sizes" className="shell py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            {copy.universalTitle}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {copy.universalIntro}
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {UNIVERSAL_SOCIAL_IMAGE_SIZES.map((size, index) => (
            <article
              key={size.id}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                {index + 1}
              </p>
              <h3 className="mt-3 text-lg font-extrabold tracking-normal text-slate-950 dark:text-white">
                {size.label[language as LanguageCode]}
              </h3>
              <p className="mt-2 text-sm font-semibold text-blue-700 dark:text-blue-300">{size.dimensions}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {size.description[language as LanguageCode]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="avoid-cropping" className="border-y border-slate-200 bg-white/58 py-14 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              {copy.croppingTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {copy.croppingIntro}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <ul className="grid gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              {CROPPING_TIPS[language as LanguageCode].map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="optimize-images" className="shell py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            {copy.optimizeTitle}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{copy.optimizeP1}</p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{copy.optimizeP2}</p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{copy.optimizeP3}</p>
        </div>
      </section>

      <section id="faq" className="shell py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            {copy.faqTitle}
          </h2>
        </div>
        <div className="mt-8">
          <FAQ items={faqItems} />
        </div>
      </section>

      <section id="related-tools" className="shell pb-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            {copy.relatedTitle}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {copy.relatedIntro}
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {TOOL_LINKS.map((tool) => (
            <article
              key={tool.href}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <LocalizedLink href={tool.href} className="text-sm font-bold text-slate-950 hover:text-blue-700 dark:text-white dark:hover:text-blue-300">
                {tool.anchor[language as LanguageCode]}
              </LocalizedLink>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {tool.description[language as LanguageCode]}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-5 text-sm leading-7 text-blue-950 dark:border-blue-900/70 dark:bg-blue-950/35 dark:text-blue-100">
          {copy.finalNote}
        </div>
        <AdSlot variant="inline" className="mt-10" />
      </section>
    </>
  );
}
