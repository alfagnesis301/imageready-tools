import Link from "next/link";
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

export default function SpanishGuideArticle({ guide }: { guide: Guide }) {
  return (
    <article className="shell py-12">
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
        <Link href="/es/guides" className="text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300">
          Guías para publicar imágenes
        </Link>
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

        <section className="rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/82">
          <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Cómo ayuda PublishPixel
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            PublishPixel combina revisión de dimensiones, peso, formato, nombre de archivo, alt text
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
            <li>Prepara un nombre de archivo legible y un plan de alt text.</li>
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
