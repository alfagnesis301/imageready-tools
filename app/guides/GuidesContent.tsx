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
    title: "Cómo escribir alt text útil para imágenes",
    description: "Escribe alt text más claro para accesibilidad, contexto y mejores flujos de publicación."
  },
  "webp-vs-jpeg-vs-png": {
    title: "WebP vs JPEG vs PNG: qué formato de imagen usar",
    description: "Compara formatos comunes y elige un formato práctico para páginas web y previews sociales."
  },
  "image-seo-checklist": {
    title: "Checklist SEO de imágenes antes de publicar",
    description: "Un checklist práctico para nombres de archivo, alt text, dimensiones, peso y previews sociales."
  },
  "social-media-image-sizes": {
    title: "Tamaños de imagen para redes sociales: guía práctica",
    description: "Prepara crops para Open Graph, YouTube, Instagram, LinkedIn, Pinterest y feeds de producto."
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
    description: "Una lista práctica para revisar tamaño, formato, alt text, nombre de archivo, metadatos y previews."
  },
  "open-graph-image-best-practices": {
    title: "Buenas prácticas de imágenes Open Graph para mejores previews",
    description: "Prepara imágenes Open Graph con dimensiones prácticas, zonas seguras, texto legible y exportaciones ligeras."
  },
  "youtube-thumbnail-image-guide": {
    title: "Guía de imágenes para miniaturas de YouTube",
    description: "Prepara miniaturas de YouTube con dimensiones prácticas, texto legible, áreas seguras y composición clara."
  },
  "website-image-performance-checklist": {
    title: "Checklist de rendimiento para imágenes web",
    description: "Mejora la velocidad revisando dimensiones, peso, formato, entrega responsive y flujo de publicación."
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
            ? "Guías prácticas y originales para preparar imágenes antes de publicarlas. Amplían el checker con contexto sobre rendimiento, accesibilidad, privacidad y SEO."
            : "Practical, original guidance for preparing images before they go live. These guides support the checker with deeper context around performance, accessibility, privacy and SEO."}
        </p>
      </div>

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
