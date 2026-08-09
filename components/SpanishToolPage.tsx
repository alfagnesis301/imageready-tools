import Link from "next/link";
import Breadcrumbs, { breadcrumbJsonLd } from "./Breadcrumbs";
import FAQ from "./FAQ";
import SmartPublishCheck from "./SmartPublishCheck";
import { faqJsonLd } from "@/lib/seo";

type SpanishToolPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  preset?: React.ComponentProps<typeof SmartPublishCheck>["initialPreset"];
  toolDescription: string;
  sections: {
    title: string;
    body: string;
  }[];
  checklist?: string[];
  commonMistakes?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  relatedLinks?: {
    href: string;
    label: string;
    description: string;
  }[];
  ctaHref?: string;
  ctaLabel?: string;
};

export default function SpanishToolPage({
  eyebrow,
  title,
  description,
  path,
  preset = "website-blog",
  toolDescription,
  sections,
  checklist = [],
  commonMistakes = [],
  faqs = [],
  relatedLinks = [],
  ctaHref = "/es",
  ctaLabel = "Volver a la revisión principal"
}: SpanishToolPageProps) {
  // Ver ToolSeoPage: el nivel "Herramientas" apuntaba a /es igual que "Inicio".
  const breadcrumbs = [
    { name: "Inicio", href: "/es" },
    { name: title, href: path }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      {faqs.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
      ) : null}
      <section className="shell py-10">
        <div className="max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="label">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            {title}
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p>
        </div>
        <div className="mt-8">
          {/* Ver ToolSeoPage: el H2 de la tarjeta repetía el H1. */}
          <SmartPublishCheck
            initialPreset={preset}
            heading="Sube una imagen para ejecutar la revisión"
            description={toolDescription}
          />
        </div>
      </section>

      {checklist.length || commonMistakes.length ? (
        <section className="shell pb-4">
          <div className="grid gap-5 lg:grid-cols-2">
            {checklist.length ? (
              <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-xl font-extrabold tracking-normal text-slate-950 dark:text-white">
                  Checklist antes de publicar
                </h2>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}
            {commonMistakes.length ? (
              <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-xl font-extrabold tracking-normal text-slate-950 dark:text-white">
                  Errores comunes
                </h2>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {commonMistakes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </section>
      ) : null}

      {relatedLinks.length || faqs.length ? (
        <section className="shell py-10">
          {relatedLinks.length ? (
            <div>
              <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
                Guías relacionadas
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {relatedLinks.map((link) => (
                  <article
                    key={link.href}
                    className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <Link href={link.href} className="text-sm font-bold text-slate-950 hover:text-blue-700 dark:text-white dark:hover:text-blue-300">
                      {link.label}
                    </Link>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {link.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
          {faqs.length ? (
            <div className={relatedLinks.length ? "mt-10" : undefined}>
              <p className="label">Preguntas frecuentes</p>
              <FAQ items={faqs} />
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="shell py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-lg font-extrabold tracking-normal text-slate-950 dark:text-white">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{section.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-900/70 dark:bg-blue-950/35">
          <p className="text-sm leading-7 text-blue-950 dark:text-blue-100">
            Las recomendaciones son estimaciones basadas en señales disponibles en el navegador y
            patrones comunes de publicación. Para cargas críticas, verifica siempre los requisitos
            oficiales de la plataforma.
          </p>
          <Link href={ctaHref} className="button-primary mt-4">
            {ctaLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
