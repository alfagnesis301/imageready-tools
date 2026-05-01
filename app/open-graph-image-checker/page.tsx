import Link from "next/link";
import FAQ from "@/components/FAQ";
import SmartPublishCheck from "@/components/SmartPublishCheck";
import { createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Open Graph Image Checker",
  description:
    "Check if your Open Graph image is ready for website previews, social cards and article sharing.",
  path: "/open-graph-image-checker"
});

const faqs = [
  {
    question: "What size should an Open Graph image be?",
    answer:
      "A common practical target is 1200 x 630 pixels, close to a 1.91:1 ratio."
  },
  {
    question: "Does this guarantee every platform will crop the image the same way?",
    answer:
      "No. Preview rendering varies, so keep important content away from the edges and verify critical pages."
  },
  {
    question: "Should Open Graph images use JPG or PNG?",
    answer:
      "JPG is common for photos, while PNG is useful for graphics or transparency. File size and destination compatibility still matter."
  },
  {
    question: "Can I use the same image as my page hero?",
    answer:
      "Sometimes, but important pages often benefit from a dedicated Open Graph crop."
  }
];

export default function OpenGraphImageCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <section className="shell py-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="label">Open Graph image tool</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            Open Graph Image Checker
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Check whether an image is a practical fit for Open Graph previews, article cards and
            social sharing. Review dimensions, aspect ratio, file size, format and safe visual
            spacing before publishing.
          </p>
        </div>
        <div className="mt-8">
          <SmartPublishCheck
            initialPreset="open-graph"
            heading="Open Graph Image Checker"
            description="Upload an image and compare it against a practical Open Graph preview target."
          />
        </div>
      </section>

      <section className="shell py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            What makes a strong Open Graph image?
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Open Graph images often appear as preview cards when someone shares a page on social
            platforms, messaging apps or content discovery tools. A strong preview image should be
            large enough to look sharp, light enough to load efficiently and composed so the
            important subject remains visible after cropping.
          </p>
          <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
                <tr>
                  <th scope="col" className="px-4 py-3">Signal</th>
                  <th scope="col" className="px-4 py-3">Practical target</th>
                  <th scope="col" className="px-4 py-3">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {[
                  ["Dimensions", "1200 x 630 px", "Common preview-card size"],
                  ["Ratio", "1.91:1", "Reduces unexpected cropping"],
                  ["Text", "Large and centered", "Small text becomes unreadable on mobile"],
                  ["File weight", "As light as quality allows", "Heavy previews can slow page delivery"]
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-4 text-slate-600 dark:text-slate-400">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="shell py-12">
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">
            Open Graph image checklist
          </h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            <li>Use a dedicated image instead of relying on a random page image.</li>
            <li>Keep important faces, products or text away from the edges.</li>
            <li>Compress the image without making text blurry.</li>
            <li>Use a descriptive filename.</li>
            <li>Add matching page title and description metadata.</li>
            <li>Test the final URL after publishing.</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/guides/open-graph-image-best-practices" className="button-primary">
              Read Open Graph guide
            </Link>
            <Link href="/resize-image" className="button-secondary">Resize image</Link>
            <Link href="/compress-image" className="button-secondary">Compress image</Link>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
