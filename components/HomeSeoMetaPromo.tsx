"use client";

import LocalizedLink from "./LocalizedLink";
import { useLanguage } from "./LanguageProvider";

export default function HomeSeoMetaPromo() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <section className="shell py-14">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="label">{isEs ? "Nueva herramienta SEO" : "New SEO tool"}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            {isEs ? "Revisor SEO y metadatos de imagen" : "Ultimate Image SEO & Meta Checker"}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {isEs
              ? "Analiza el peso, las dimensiones, el formato, el nombre del archivo y la preparación de publicación de una imagen en un solo flujo. Es útil para revisar activos antes de subirlos al CMS, al blog o a una vista previa social."
              : "Review file weight, dimensions, format, filename quality and publishing readiness in one workflow. It is useful for checking assets before they go into a CMS, blog article or social preview."}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {isEs
              ? "La herramienta vive dentro del producto principal y usa el flujo real de PublishPixel para revisar SEO de imágenes, metadatos, optimización web y tamaños para redes sociales."
              : "The tool now lives inside the main product, uses the real PublishPixel workflow, and is positioned for searches around image SEO checker, image meta checker, website image optimiser and social media image sizes."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LocalizedLink href="/image-seo-meta-checker" className="button-primary">
              {isEs ? "Abrir la herramienta" : "Open the tool"}
            </LocalizedLink>
            <LocalizedLink href="/website-image-optimizer" className="button-secondary">
              {isEs ? "Ver optimizador web" : "View website optimizer"}
            </LocalizedLink>
          </div>
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <LocalizedLink
              href="/social-media-image-sizes"
              className="text-sm font-bold text-slate-950 hover:text-blue-700 dark:text-white dark:hover:text-blue-300"
            >
              {isEs ? "Guía de tamaños de imagen para redes sociales" : "Social Media Image Sizes Guide"}
            </LocalizedLink>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {isEs
                ? "Consulta dimensiones recomendadas para las principales plataformas sociales y usa valores seguros para publicaciones, historias, reels, banners y miniaturas."
                : "Find the recommended image dimensions for every major social platform."}
            </p>
          </div>
        </div>

        <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-lg font-extrabold tracking-normal text-slate-950 dark:text-white">
            {isEs ? "Que revisa" : "What it checks"}
          </h3>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
            <li>{isEs ? "Peso del archivo y oportunidad de compresión" : "File weight and compression opportunity"}</li>
            <li>{isEs ? "Dimensiones y proporción para web y redes sociales" : "Dimensions and aspect ratio for web and social"}</li>
            <li>{isEs ? "Calidad del nombre de archivo para SEO" : "SEO filename quality"}</li>
            <li>{isEs ? "Compatibilidad con vistas Open Graph y miniaturas" : "Open Graph and thumbnail fit"}</li>
            <li>{isEs ? "Señales prácticas antes de publicar" : "Practical pre-publish signals"}</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
