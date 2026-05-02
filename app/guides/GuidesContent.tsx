"use client";

import Link from "next/link";
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

export default function GuidesContent() {
  const { language } = useLanguage();

  return (
    <section className="shell py-12">
      <div className="max-w-3xl">
        <p className="label">{language === "es" ? "Guías PublishPixel" : "PublishPixel guides"}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
          {language === "es" ? "Guías para publicar imágenes" : "Image Publishing Guides"}
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          {language === "es"
            ? "Guías prácticas y originales para preparar imágenes antes de publicarlas. Amplían la revisión con contexto sobre rendimiento, accesibilidad, privacidad y SEO."
            : "Practical, original guidance for preparing images before they go live. These guides support the checker with deeper context around performance, accessibility, privacy and SEO."}
        </p>
      </div>

      {language === "es" && (
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Cómo usar estas guías
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Estas guías están pensadas para ayudarte a preparar imágenes antes de publicarlas.
              Puedes empezar por el objetivo principal: reducir peso, elegir formato, mejorar
              accesibilidad, proteger privacidad, preparar una vista previa social o revisar SEO de
              imágenes.
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
              <li><strong>Rendimiento:</strong> tamaño web, compresión y checklist de rendimiento.</li>
              <li><strong>SEO:</strong> nombres de archivo, texto alternativo y vistas previas.</li>
              <li><strong>Privacidad:</strong> metadatos, detalles visibles y copia para publicar.</li>
              <li><strong>Redes sociales:</strong> Open Graph, YouTube, Instagram, Pinterest y LinkedIn.</li>
              <li><strong>Formatos:</strong> cuándo usar WebP, JPG, PNG o SVG.</li>
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
    </section>
  );
}
