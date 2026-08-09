import Link from "next/link";
import AltTextDraftChecker from "@/components/AltTextDraftChecker";
import Breadcrumbs, { breadcrumbJsonLd } from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Image Alt Text Checker",
  description:
    "Review an image alt text draft for practical length, clarity and common wording issues before publishing.",
  path: "/image-alt-text-checker"
});

const faqs = [
  {
    question: "Does this tool inspect the image content?",
    answer:
      "No. It reviews the structure of your written draft and does not invent visual descriptions."
  },
  {
    question: "How long should alt text be?",
    answer:
      "It should be long enough to explain the useful image context, but short enough to remain readable."
  },
  {
    question: "Should decorative images have alt text?",
    answer:
      "Decorative images usually need empty alt text in final HTML, not a forced description."
  },
  {
    question: "Can alt text help SEO?",
    answer:
      "Clear alt text can support image understanding, but it should be written for users and accessibility first."
  }
];

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Image Alt Text Checker", href: "/image-alt-text-checker" }
];

export default function ImageAltTextCheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <main className="shell py-12">
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="label">Accessibility tool</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            Image Alt Text Checker
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Review the structure of an alt text draft before publishing. This tool does not inspect
            the image content or invent descriptions. It helps check length, clarity and common
            wording issues so you can write a better human description.
          </p>
        </div>

        <AltTextDraftChecker />

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              How to use alt text responsibly
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Alt text should explain the useful visual information in context. A product image,
              chart, portrait, screenshot and decorative background all need different treatment.
              Avoid keyword stuffing, vague phrases and invented details. If the image is
              decorative, the final page may need empty alt text instead of a written description.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              A strong workflow is to draft alt text while the image is still being prepared. That
              way you can review the filename, dimensions, format and accessibility plan before the
              image reaches the CMS.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-extrabold text-slate-950 dark:text-white">Alt text checklist</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              <li>Describe the useful visible subject.</li>
              <li>Include page context when it matters.</li>
              <li>Avoid generic openings such as image of.</li>
              <li>Do not invent details you cannot verify.</li>
              <li>Use empty alt text for decorative images in final HTML.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <FAQ items={faqs} />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/guides/image-alt-text" className="button-primary">Read alt text guide</Link>
            <Link href="/smart-image-publish-check" className="button-secondary">Run full image check</Link>
          </div>
        </section>
      </main>
    </>
  );
}
