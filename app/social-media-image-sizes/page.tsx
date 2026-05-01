import AdSlot from "@/components/AdSlot";
import FAQ from "@/components/FAQ";
import SmartPublishCheck from "@/components/SmartPublishCheck";
import { SOCIAL_SIZE_ROWS } from "@/lib/constants";
import { createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Social Media Image Sizes Guide",
  description:
    "A practical guide to common social media image sizes for Open Graph, YouTube, Instagram, LinkedIn, Pinterest, e-commerce and email.",
  path: "/social-media-image-sizes"
});

const faqs = [
  {
    question: "Are these official social media requirements?",
    answer:
      "No. This guide lists commonly used dimensions and practical publishing recommendations. Always verify official requirements for critical campaigns."
  },
  {
    question: "Why do aspect ratios matter?",
    answer:
      "Aspect ratios help platforms display your image without unexpected cropping, borders or awkward previews."
  },
  {
    question: "Can one image work everywhere?",
    answer:
      "Sometimes a flexible source image can be adapted, but important channels often deserve dedicated crops or exports."
  },
  {
    question: "Should every image be WebP?",
    answer:
      "WebP is useful for websites, while some upload workflows still prefer JPG or PNG. Choose based on the destination."
  }
];

export default function SocialMediaImageSizesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <section className="shell py-10">
        <div className="max-w-3xl">
          <p className="label">Publishing guide</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            Social Media Image Sizes Guide
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            Use this original guide as a practical starting point for common social image sizes,
            previews, thumbnails, product visuals and email graphics.
          </p>
        </div>
        <div className="mt-8">
          <SmartPublishCheck
            initialPreset="open-graph"
            heading="Check a social media image"
            description="Upload an image and choose a social preset to compare dimensions, ratio, file size and format guidance."
          />
        </div>
      </section>

      <div className="shell">
        <AdSlot className="mb-12" />
      </div>

      <section className="shell py-10">
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-4 py-3">Platform</th>
                <th scope="col" className="px-4 py-3">Use</th>
                <th scope="col" className="px-4 py-3">Recommended size</th>
                <th scope="col" className="px-4 py-3">Ratio</th>
                <th scope="col" className="px-4 py-3">Practical note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {SOCIAL_SIZE_ROWS.map((row) => (
                <tr key={`${row.platform}-${row.use}`}>
                  <td className="px-4 py-4 font-bold text-slate-950 dark:text-white">{row.platform}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.use}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.size}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.ratio}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/58 py-14 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="shell grid gap-8 lg:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white">Start with the destination</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              A social image should be prepared for where it appears: feed, story, preview card,
              thumbnail, pin or product grid.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white">Keep a safe focal area</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Interfaces, captions and previews may crop edges. Important content usually works best
              near the visual center.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white">Export intentionally</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Use a dedicated export for important channels instead of relying on one oversized master
              image everywhere.
            </p>
          </article>
        </div>
      </section>

      <section className="shell py-14">
        <div className="mx-auto max-w-4xl">
          <p className="label">Multi-platform workflow</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            How to prepare one image for multiple social platforms
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            A single image rarely fits every platform perfectly. A wide Open Graph card, a square
            Instagram post, a vertical Story and a tall Pinterest pin all use different visual
            spaces. For important campaigns, start with a large master file and create dedicated
            exports for each destination.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Keep important faces, products, text and logos away from the extreme edges. Platform
            interfaces, captions, overlays and preview crops can hide or cut off details near the
            border.
          </p>
          <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70">
            <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
              Social image export checklist
            </h3>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              <li>Choose the destination before resizing.</li>
              <li>Keep the focal point near the center-safe area.</li>
              <li>Create a separate Open Graph image for important pages.</li>
              <li>Check text readability on mobile previews.</li>
              <li>Compress the final export without blurring key details.</li>
              <li>Verify official platform requirements for critical campaigns.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="shell py-14">
        <div className="max-w-3xl">
          <p className="label">FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Social image size questions
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
