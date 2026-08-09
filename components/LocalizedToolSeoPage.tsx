"use client";

import AdSlot from "./AdSlot";
import Breadcrumbs, { breadcrumbJsonLd } from "./Breadcrumbs";
import FAQ from "./FAQ";
import SmartPublishCheck from "./SmartPublishCheck";
import { useLanguage, type Language } from "./LanguageProvider";
import { withLocalePath } from "@/lib/i18n";
import { faqJsonLd } from "@/lib/seo";
import type { PresetId } from "@/lib/publishRules";

export type LocalizedText = Record<Language, string>;

export type LocalizedFaq = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type LocalizedToolSection = {
  heading: LocalizedText;
  paragraphs: LocalizedText[];
};

type LocalizedToolSeoPageProps = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  initialPreset: PresetId;
  path: string;
  toolDescription: LocalizedText;
  sections: LocalizedToolSection[];
  faqs: LocalizedFaq[];
  children?: React.ReactNode;
};

export default function LocalizedToolSeoPage({
  eyebrow,
  title,
  description,
  initialPreset,
  path,
  toolDescription,
  sections,
  faqs,
  children
}: LocalizedToolSeoPageProps) {
  const { language } = useLanguage();
  const localizedFaqs = faqs.map((faq) => ({
    question: faq.question[language],
    answer: faq.answer[language]
  }));
  const localizedPath = withLocalePath(path, language);
  // Ver ToolSeoPage: el nivel "Tools"/"Herramientas" apuntaba a la portada.
  const breadcrumbs = [
    { name: language === "es" ? "Inicio" : "Home", href: language === "es" ? "/es" : "/" },
    { name: title[language], href: localizedPath }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(localizedFaqs)) }}
      />
      <section className="shell py-10">
        <div className="max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="label">{eyebrow[language]}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            {title[language]}
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            {description[language]}
          </p>
        </div>
        <div className="mt-8">
          {/* Ver ToolSeoPage: el H2 de la tarjeta repetía el H1. */}
          <SmartPublishCheck
            initialPreset={initialPreset}
            heading={
              language === "es"
                ? "Sube una imagen para ejecutar la revisión"
                : "Upload an image to run the check"
            }
            description={toolDescription[language]}
          />
        </div>
      </section>

      <div className="shell">
        <AdSlot className="mb-12" />
      </div>

      <section className="border-y border-slate-200 bg-white/58 py-14 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="shell grid gap-8 lg:grid-cols-3">
          {sections.map((section) => (
            <article
              key={section.heading.en}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-lg font-extrabold tracking-normal text-slate-950 dark:text-white">
                {section.heading[language]}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.en} className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {paragraph[language]}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      {children ? <section className="shell py-14">{children}</section> : null}

      <section className="shell py-14">
        <div className="max-w-3xl">
          <p className="label">{language === "es" ? "Preguntas frecuentes" : "FAQ"}</p>
          {/* Encabezado fijo: ver ToolSeoPage. */}
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            {language === "es" ? "Preguntas frecuentes" : "Frequently asked questions"}
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
