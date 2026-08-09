"use client";

import Link from "next/link";
import Breadcrumbs, { breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { useLanguage } from "@/components/LanguageProvider";
import { GUIDES } from "@/lib/guides";

const guideEs: Record<string, { title: string; description: string }> = {
  "image-size-for-web": {
    title: "Tamaño de imagen para web: dimensiones prácticas antes de publicar",
    description: "Aprende a elegir dimensiones que se vean nítidas sin ralentizar tus páginas."
  },
  "remove-image-metadata": {
    title: "Cómo eliminar metadatos de una imagen antes de publicar",
    description: "Comprende metadatos EXIF, riesgos de privacidad y formas más seguras de publicar imágenes online."
  },
  "image-alt-text": {
    title: "Cómo escribir texto alternativo útil para imágenes",
    description: "Escribe texto alternativo más claro para accesibilidad, contexto y mejores flujos de publicación."
  },
  "webp-vs-jpeg-vs-png": {
    title: "WebP vs JPEG vs PNG: qué formato de imagen usar",
    description: "Compara formatos comunes y elige un formato práctico para páginas web y vistas previas sociales."
  },
  "image-seo-checklist": {
    title: "Checklist SEO de imágenes antes de publicar",
    description: "Un checklist práctico para nombres de archivo, texto alternativo, dimensiones, peso y vistas previas sociales."
  },
  "social-media-image-sizes": {
    title: "Tamaños de imagen para redes sociales: guía práctica",
    description: "Prepara recortes para Open Graph, YouTube, Instagram, LinkedIn, Pinterest y feeds de producto."
  },
  "compress-images-without-losing-quality": {
    title: "Cómo comprimir imágenes sin perder demasiada calidad",
    description: "Reduce el peso de imágenes manteniendo fotos y gráficos suficientemente claros."
  },
  "photo-privacy-before-publishing": {
    title: "Checklist de privacidad antes de publicar fotos online",
    description: "Revisa metadatos, detalles visibles, permisos y contexto sensible antes de publicar fotos."
  },
  "image-publishing-checklist": {
    title: "Checklist para publicar imágenes antes de subirlas online",
    description: "Una lista práctica para revisar tamaño, formato, texto alternativo, nombre de archivo, metadatos y vistas previas."
  },
  "open-graph-image-best-practices": {
    title: "Buenas prácticas de imágenes Open Graph para mejores vistas previas",
    description: "Prepara imágenes Open Graph con dimensiones prácticas, zonas seguras, texto legible y exportaciones ligeras."
  },
  "youtube-thumbnail-image-guide": {
    title: "Guía de imágenes para miniaturas de YouTube",
    description: "Prepara miniaturas de YouTube con dimensiones prácticas, texto legible, áreas seguras y composición clara."
  },
  "website-image-performance-checklist": {
    title: "Checklist de rendimiento para imágenes web",
    description: "Mejora la velocidad revisando dimensiones, peso, formato, entrega adaptable y flujo de publicación."
  }
};

const categories = [
  {
    key: "image-seo",
    en: {
      title: "Image SEO",
      body: "Review filenames, alt text, preview context and page fit so images support the page instead of looking like isolated assets."
    },
    es: {
      title: "SEO de imágenes",
      body: "Revisa nombres de archivo, texto alternativo, contexto de vista previa y encaje en la página."
    },
    links: ["image-seo-checklist", "image-alt-text", "image-publishing-checklist"]
  },
  {
    key: "compression",
    en: {
      title: "Image compression & formats",
      body: "Choose dimensions, compression and format together. A WebP, JPG or PNG decision only works when it matches the image content and destination."
    },
    es: {
      title: "Compresión y formatos",
      body: "Elige dimensiones, compresión y formato en conjunto según contenido, transparencia y destino."
    },
    links: ["compress-images-without-losing-quality", "webp-vs-jpeg-vs-png", "website-image-performance-checklist"]
  },
  {
    key: "social",
    en: {
      title: "Social media image sizes",
      body: "Prepare square, portrait, vertical and wide crops for link cards, feeds, thumbnails and social publishing workflows."
    },
    es: {
      title: "Tamaños para redes sociales",
      body: "Prepara recortes cuadrados, verticales y anchos para tarjetas, feeds, miniaturas y publicaciones sociales."
    },
    links: ["social-media-image-sizes", "open-graph-image-best-practices", "youtube-thumbnail-image-guide"]
  },
  {
    key: "privacy",
    en: {
      title: "Metadata & privacy",
      body: "Check visible details, EXIF signals and clean publishing copies before photos or screenshots become public."
    },
    es: {
      title: "Metadatos y privacidad",
      body: "Revisa detalles visibles, señales EXIF y copias limpias antes de publicar fotos o capturas."
    },
    links: ["photo-privacy-before-publishing", "remove-image-metadata", "image-publishing-checklist"]
  },
  {
    key: "accessibility",
    en: {
      title: "Accessibility & alt text",
      body: "Plan alt text around the image purpose. Useful images need context; decorative images need a quieter treatment."
    },
    es: {
      title: "Accesibilidad y texto alternativo",
      body: "Planifica el texto alternativo según el propósito de la imagen y evita descripciones forzadas."
    },
    links: ["image-alt-text", "image-seo-checklist"]
  },
  {
    key: "open-graph",
    en: {
      title: "Open Graph & thumbnails",
      body: "Create dedicated preview images with safe areas, readable text and dimensions that match how cards are rendered."
    },
    es: {
      title: "Open Graph y miniaturas",
      body: "Crea vistas previas dedicadas con zona segura, texto legible y dimensiones adecuadas para tarjetas."
    },
    links: ["open-graph-image-best-practices", "youtube-thumbnail-image-guide", "social-media-image-sizes"]
  }
];

const startingPoints = [
  "image-size-for-web",
  "image-seo-checklist",
  "social-media-image-sizes",
  "photo-privacy-before-publishing",
  "webp-vs-jpeg-vs-png",
  "image-alt-text"
];

const toolLinks = [
  {
    href: "/smart-image-publish-check",
    en: "Run the full image readiness check",
    es: "Ejecutar la revisión completa de imagen"
  },
  {
    href: "/website-image-optimizer",
    en: "Optimize a website image",
    es: "Optimizar una imagen web"
  },
  {
    href: "/image-alt-text-checker",
    en: "Check an alt text draft",
    es: "Revisar un borrador de texto alternativo"
  },
  {
    href: "/open-graph-image-checker",
    en: "Check an Open Graph image",
    es: "Revisar una imagen Open Graph"
  },
  {
    href: "/image-seo-meta-checker",
    en: "Review image SEO and metadata",
    es: "Revisar SEO y metadatos de imagen"
  },
  {
    href: "/image-metadata-checker",
    en: "Check image metadata",
    es: "Revisar metadatos de imagen"
  },
  {
    href: "/instagram-image-checker",
    en: "Check an Instagram image",
    es: "Revisar una imagen para Instagram"
  },
  {
    href: "/youtube-thumbnail-checker",
    en: "Check a YouTube thumbnail",
    es: "Revisar una miniatura de YouTube"
  }
];

const faq = {
  en: [
    {
      question: "Where should I start?",
      answer:
        "Start with the image publishing checklist, then move to size, compression, alt text or privacy depending on the problem you need to solve."
    },
    {
      question: "Are these official platform requirements?",
      answer:
        "No. They are practical publishing guides. Always verify official requirements for critical social, marketplace or campaign uploads."
    },
    {
      question: "Should every guide be treated as a separate SEO page?",
      answer:
        "Each guide answers a distinct publishing problem and links to related tools and guides so Google can understand the site structure."
    }
  ],
  es: [
    {
      question: "¿Por dónde empiezo?",
      answer:
        "Empieza por la guía de tamaño de imagen para web si vas a publicar en un sitio, o por el checklist SEO si quieres revisar nombre, peso, texto alternativo y contexto."
    },
    {
      question: "¿Qué formato de imagen conviene usar en una web?",
      answer:
        "Depende del contenido. WebP suele ser práctico para muchas páginas modernas, JPEG funciona bien para fotos y PNG conviene cuando necesitas transparencia o gráficos nítidos."
    },
    {
      question: "¿Debo eliminar metadatos antes de publicar?",
      answer:
        "En fotos personales, sensibles o tomadas con móvil, conviene revisar metadatos y detalles visibles antes de publicar una copia pública."
    },
    {
      question: "¿Por qué importa el texto alternativo?",
      answer:
        "Ayuda a explicar imágenes útiles cuando no se pueden ver o no cargan. Debe escribirse para personas y contexto, no como una lista de palabras clave."
    },
    {
      question: "¿Qué tamaño de imagen es mejor para redes sociales?",
      answer:
        "No hay un único tamaño universal. Prepara al menos una versión cuadrada, una vertical y una ancha, y después ajusta recortes para la plataforma importante."
    }
  ]
};

function getGuideBySlug(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug);
}

export default function GuidesContent() {
  const { language } = useLanguage();
  const breadcrumbs = [
    { name: language === "es" ? "Inicio" : "Home", href: language === "es" ? "/es" : "/" },
    {
      name: language === "es" ? "Guías" : "Guides",
      href: language === "es" ? "/es/guides" : "/guides"
    }
  ];

  return (
    <section className="shell py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <div className="max-w-3xl">
        <Breadcrumbs items={breadcrumbs} />
        <p className="label">{language === "es" ? "Guías PublishPixel" : "PublishPixel guides"}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
          {language === "es" ? "Guías de imágenes web para SEO, redes sociales y publicación" : "Image Publishing Guides"}
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          {language === "es"
            ? "Aprende a preparar imágenes más ligeras, accesibles y listas para publicar en sitios web, redes sociales y vistas previas compartibles. Estas guías conectan decisiones de SEO, rendimiento, privacidad y formato con herramientas prácticas de PublishPixel."
            : "Practical, original guidance for preparing images before they go live. These guides support the checker with deeper context around performance, accessibility, privacy and SEO."}
        </p>
      </div>

      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            {language === "es" ? "Puntos de partida recomendados" : "Recommended starting points"}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {language === "es"
              ? "Empieza por estas guías si necesitas elegir dimensiones, revisar SEO de imágenes, preparar recortes sociales, proteger privacidad, escoger formato o mejorar texto alternativo."
              : "Use these guides to build the basic workflow: review the destination, choose dimensions, prepare image SEO and control performance before files enter a CMS."}
          </p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {startingPoints.map((slug) => {
            const guide = getGuideBySlug(slug)!;
            const localizedGuide = language === "es" ? guideEs[slug] : guide;

            return (
              <Link
                key={slug}
                href={language === "es" ? `/es/guides/${slug}` : `/guides/${slug}`}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-950 transition hover:border-blue-300 hover:text-blue-700 focus-ring dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:hover:border-blue-700 dark:hover:text-blue-300"
              >
                {localizedGuide.title}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            {language === "es" ? "Guías por categoría" : "Guides by category"}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {language === "es"
              ? "Cada categoría resuelve una parte del flujo: definir el destino, preparar una copia ligera, revisar privacidad, mejorar accesibilidad y validar vistas previas antes de publicar."
              : "Each category groups a distinct search intent and points to the tools that support the workflow."}
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const copy = category[language];

            return (
              <section key={category.key} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-extrabold tracking-normal text-slate-950 dark:text-white">
                  {copy.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {copy.body}
                </p>
                <div className="mt-4 grid gap-2">
                  {category.links.map((slug) => {
                    const guide = getGuideBySlug(slug)!;
                    const localizedGuide = language === "es" ? guideEs[slug] : guide;

                    return (
                      <Link
                        key={slug}
                        href={language === "es" ? `/es/guides/${slug}` : `/guides/${slug}`}
                        className="text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
                      >
                        {localizedGuide.title}
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900/70 dark:bg-blue-950/35">
        <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          {language === "es" ? "Herramientas relacionadas" : "Related tools"}
        </h2>
        <p className="mt-4 text-sm leading-7 text-blue-950 dark:text-blue-100">
          {language === "es"
            ? "Después de leer una guía, usa una herramienta específica para comprobar el archivo real antes de publicarlo."
            : "After reading a guide, use a focused tool to check the actual file before publishing."}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {toolLinks.map((tool) => (
            <Link key={tool.href} href={language === "es" ? `/es${tool.href}` : tool.href} className="button-secondary">
              {tool[language]}
            </Link>
          ))}
        </div>
      </section>


      {language === "en" && (
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              How to use these guides
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Start with the publishing goal: reduce file size, choose a format, improve accessibility, protect privacy, prepare a social preview, or make website images faster. Each guide connects the editorial decision to a practical PublishPixel tool.
            </p>
            <h2 className="mt-8 text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              What to review before publishing an image
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Before uploading an image to a website, CMS, store or social platform, review five basics: dimensions, file size, format, filename and context. A technically valid image can still be too heavy, too small, unclear, poorly cropped or mismatched for the channel where it will appear.
            </p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Guides by goal
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              <li><strong>Performance:</strong> web dimensions, compression and website image checklists.</li>
              <li><strong>SEO:</strong> filenames, alt text, image context and link previews.</li>
              <li><strong>Privacy:</strong> metadata, visible details and safer publishing copies.</li>
              <li><strong>Social media:</strong> Open Graph, YouTube, Instagram, Pinterest and LinkedIn image sizes.</li>
              <li><strong>Formats:</strong> when to use WebP, JPG, PNG or SVG for practical publishing.</li>
            </ul>
          </section>
        </div>
      )}

      {language === "es" && (
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Cómo usar estas guías
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Úsalas como un flujo de trabajo: elige primero el destino de la imagen, define
              dimensiones útiles, comprime una copia de publicación, revisa metadatos, redacta texto
              alternativo cuando la imagen comunique información y valida la vista previa social
              antes de publicar.
            </p>
            <h2 className="mt-8 text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Qué revisar antes de publicar una imagen
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Antes de subir una imagen a un sitio web, CMS o gestor de contenido, tienda o red
              social, revisa cinco aspectos básicos: dimensiones, peso, formato, nombre de archivo
              y contexto. Una imagen técnicamente válida puede seguir siendo demasiado pesada,
              demasiado pequeña, poco clara o poco adecuada para el canal donde aparecerá.
            </p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Guías por objetivo
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              <li><strong>Quiero mejorar SEO:</strong> nombres de archivo, texto alternativo, contexto de página y vistas previas.</li>
              <li><strong>Quiero publicar en redes sociales:</strong> recortes Open Graph, YouTube, Instagram, Pinterest y LinkedIn.</li>
              <li><strong>Quiero reducir peso:</strong> dimensiones, compresión y elección de formato.</li>
              <li><strong>Quiero proteger privacidad:</strong> metadatos, detalles visibles y copia pública.</li>
              <li><strong>Quiero mejorar accesibilidad:</strong> propósito de la imagen y texto alternativo útil.</li>
            </ul>
          </section>
        </div>
      )}

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((guide) => {
          const localizedGuide = language === "es" ? guideEs[guide.slug] : guide;

          return (
            <Link
              key={guide.slug}
              href={language === "es" ? `/es/guides/${guide.slug}` : `/guides/${guide.slug}`}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft focus-ring dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700"
            >
              <h2 className="text-base font-extrabold tracking-normal text-slate-950 dark:text-white">
                {localizedGuide.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {localizedGuide.description}
              </p>
            </Link>
          );
        })}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          {language === "es" ? "Preguntas frecuentes sobre las guías" : "Guide hub FAQ"}
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {faq[language].map((item) => (
            <article key={item.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-sm font-bold text-slate-950 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
