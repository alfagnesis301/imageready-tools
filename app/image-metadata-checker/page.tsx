import Link from "next/link";
import FAQ from "@/components/FAQ";
import SmartPublishCheck from "@/components/SmartPublishCheck";
import { createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Image Metadata Checker",
  description:
    "Check image publishing privacy signals and learn why metadata matters before sharing photos online.",
  path: "/image-metadata-checker"
});

const faqs = [
  {
    question: "Can a browser check every metadata field?",
    answer:
      "No. Browser checks are useful for basic signals, but sensitive files should be verified with a dedicated metadata tool."
  },
  {
    question: "Does Canvas export remove metadata?",
    answer:
      "Canvas export usually does not preserve EXIF metadata, but this should not be treated as a perfect guarantee."
  },
  {
    question: "Should I publish original photos?",
    answer:
      "For public use, it is usually safer to publish an exported copy and keep the original private."
  },
  {
    question: "What else should I review?",
    answer:
      "Check visible details such as addresses, documents, screens, badges, faces and reflections."
  }
];

export default function ImageMetadataCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <section className="shell py-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="label">Privacy tool</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            Image Metadata Checker
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Review basic image privacy and publishing signals before sharing a photo online. Learn
            why metadata, visible details and exported copies matter for safer publishing.
          </p>
        </div>
        <div className="mt-8">
          <SmartPublishCheck
            initialPreset="website-blog"
            heading="Image Metadata Checker"
            description="Upload an image to review browser-readable metadata signals, file size, format and publishing readiness."
          />
        </div>
      </section>

      <section className="shell py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Why metadata matters before publishing
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Some image files can contain metadata such as camera model, timestamps, editing
            software or location-related information. Browser-based export may remove some embedded
            metadata, but it should not be treated as a perfect privacy guarantee across every
            browser, file type or workflow.
          </p>
          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
              Photo privacy checklist
            </h3>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              <li>Check whether the image includes sensitive visible details.</li>
              <li>Remove unnecessary metadata before public publishing.</li>
              <li>Keep the original private and publish an exported copy.</li>
              <li>Be careful with photos of documents, addresses or children.</li>
              <li>Verify privacy-sensitive images with dedicated metadata tools.</li>
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/guides/remove-image-metadata" className="button-primary">Metadata guide</Link>
            <Link href="/guides/photo-privacy-before-publishing" className="button-secondary">Photo privacy guide</Link>
          </div>
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
