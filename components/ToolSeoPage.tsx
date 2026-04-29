import AdSlot from "./AdSlot";
import FAQ from "./FAQ";
import SmartPublishCheck from "./SmartPublishCheck";
import { faqJsonLd } from "@/lib/seo";
import type { PresetId } from "@/lib/publishRules";

export type SeoFaq = {
  question: string;
  answer: string;
};

export type ToolSection = {
  heading: string;
  paragraphs: string[];
};

type ToolSeoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  initialPreset: PresetId;
  toolDescription: string;
  sections: ToolSection[];
  faqs: SeoFaq[];
  children?: React.ReactNode;
};

export default function ToolSeoPage({
  eyebrow,
  title,
  description,
  initialPreset,
  toolDescription,
  sections,
  faqs,
  children
}: ToolSeoPageProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <section className="shell py-10">
        <div className="max-w-3xl">
          <p className="label">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            {title}
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p>
        </div>
        <div className="mt-8">
          <SmartPublishCheck initialPreset={initialPreset} heading={title} description={toolDescription} />
        </div>
      </section>

      <div className="shell">
        <AdSlot className="mb-12" />
      </div>

      <section className="border-y border-slate-200 bg-white/58 py-14 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="shell grid gap-8 lg:grid-cols-3">
          {sections.map((section) => (
            <article key={section.heading} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-extrabold tracking-normal text-slate-950 dark:text-white">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      {children ? <section className="shell py-14">{children}</section> : null}

      <section className="shell py-14">
        <div className="max-w-3xl">
          <p className="label">FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Questions about {title.toLowerCase()}
          </h2>
        </div>
        <div className="mt-8">
          <FAQ items={faqs} />
        </div>
        <AdSlot variant="inline" className="mt-10" />
      </section>
    </>
  );
}
