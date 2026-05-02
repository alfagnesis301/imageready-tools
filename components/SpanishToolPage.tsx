import Link from "next/link";
import SmartPublishCheck from "./SmartPublishCheck";

type SpanishToolPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  preset?: React.ComponentProps<typeof SmartPublishCheck>["initialPreset"];
  toolDescription: string;
  sections: {
    title: string;
    body: string;
  }[];
  ctaHref?: string;
  ctaLabel?: string;
};

export default function SpanishToolPage({
  eyebrow,
  title,
  description,
  preset = "website-blog",
  toolDescription,
  sections,
  ctaHref = "/es",
  ctaLabel = "Volver a la revisión principal"
}: SpanishToolPageProps) {
  return (
    <>
      <section className="shell py-10">
        <div className="max-w-3xl">
          <p className="label">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            {title}
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p>
        </div>
        <div className="mt-8">
          <SmartPublishCheck initialPreset={preset} heading={title} description={toolDescription} />
        </div>
      </section>

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
