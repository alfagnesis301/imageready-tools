import Link from "next/link";
import ToolSeoPage from "@/components/ToolSeoPage";
import { createPageMetadata } from "@/lib/seo";

// "Ultimate" no aporta señal de búsqueda. Las consultas reales de esta URL son
// "image seo checker" (168 imp), "image optimization checker" (48) e
// "image seo test" (22).
export const metadata = createPageMetadata({
  title: "Image SEO Checker: Test Alt Text, File Size and Dimensions",
  description:
    "Free image SEO checker: test alt text, filename, dimensions and file size before you upload. Get practical fixes for every image, private in your browser.",
  path: "/image-seo-meta-checker",
  absoluteTitle: true
});

const faqs = [
  {
    question: "What does this image SEO checker analyze?",
    answer:
      "It reviews dimensions, file size, aspect ratio, filename quality, format suitability, compression opportunity and practical publishing fit for common web and social contexts."
  },
  {
    question: "Does it upload the image to a server?",
    answer:
      "No. The image analysis runs locally in your browser, similar to the other PublishPixel tools."
  },
  {
    question: "Can this tool guarantee Google Images visibility?",
    answer:
      "No. It gives practical recommendations for image SEO and publishing quality, but it does not guarantee rankings, indexing or third-party rendering."
  },
  {
    question: "What should I improve first if my score is low?",
    answer:
      "Start with filename clarity, file weight, dimensions and the intended destination. Those usually create the biggest publishing and performance wins."
  },
  {
    question: "Should I still verify platform requirements?",
    answer:
      "Yes. Social and search platforms can change image guidance, so verify official documentation when the upload is important."
  },
  {
    question: "Can this help improve website performance?",
    answer:
      "It can help you catch oversized assets, weak formats and mismatched image dimensions before they slow down a page."
  }
];

export default function ImageSeoMetaCheckerPage() {
  return (
    <ToolSeoPage
      eyebrow="Image SEO utility"
      title="Image SEO Checker: Test Alt Text, File Size and Dimensions"
      description="Review image size, dimensions, filename structure, format choice and publishing readiness in one browser-based workflow."
      initialPreset="website-blog"
      path="/image-seo-meta-checker"
      toolDescription="Upload an image and get a practical report for website image SEO, compression opportunity, social preview fit and publishing context."
      sections={[
        {
          heading: "Analyze images before upload",
          paragraphs: [
            "This tool is designed for the stage before an image enters your CMS, product page or article workflow. It helps you catch oversized dimensions, generic file names and format mismatches while the file is still easy to change.",
            "Instead of treating image SEO as only alt text or metadata, the checker looks at the broader publishing picture: size, ratio, naming, social compatibility and compression opportunity."
          ]
        },
        {
          heading: "Useful for search and social",
          paragraphs: [
            "A strong image asset should work for readers, support website performance and remain flexible for common placements such as blog featured images, Open Graph previews, thumbnails and social crops.",
            "That is why the checker uses practical presets rather than one generic rule for every image."
          ]
        },
        {
          heading: "Private browser workflow",
          paragraphs: [
            "Images are analyzed locally in your browser and are not uploaded by the checker. Optional export helpers in PublishPixel also run locally when the browser supports them.",
            "The output is a recommendation layer, not a promise of ranking, approval or exact rendering on third-party platforms."
          ]
        }
      ]}
      faqs={faqs}
    >
      <div className="mx-auto max-w-5xl space-y-12">
        <section>
          <p className="label">Google Images and CTR</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Why image SEO matters for Google Images
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Better image preparation can improve how assets support search visibility, page quality and click-through potential. Clean filenames, right-sized dimensions and lighter files do not guarantee traffic, but they can make your pages easier to publish, faster to load and more consistent across search and social previews.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            In practice, strong image SEO means the asset fits the destination. A blog feature image, a Google Discover candidate and an Open Graph preview often need different tradeoffs. PublishPixel helps you make those decisions before the image goes live.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Recommended image sizes
            </h2>
            <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
                  <tr>
                    <th className="p-4 font-extrabold">Placement</th>
                    <th className="p-4 font-extrabold">Practical target</th>
                    <th className="p-4 font-extrabold">Main concern</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-300">
                  <tr className="border-t border-slate-200 dark:border-slate-800">
                    <td className="p-4 font-semibold">Google Discover</td>
                    <td className="p-4">1200 px wide minimum</td>
                    <td className="p-4">Too small for large search previews</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-800">
                    <td className="p-4 font-semibold">Open Graph</td>
                    <td className="p-4">1200 x 630</td>
                    <td className="p-4">Awkward crops in link previews</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-800">
                    <td className="p-4 font-semibold">Blog featured image</td>
                    <td className="p-4">1200 x 675</td>
                    <td className="p-4">Large files slowing article pages</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-800">
                    <td className="p-4 font-semibold">Instagram portrait</td>
                    <td className="p-4">1080 x 1350</td>
                    <td className="p-4">Important content cut near the edges</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Image SEO checklist
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li>Use descriptive hyphen-separated file names</li>
              <li>Add accurate alt text based on the real image context</li>
              <li>Compress large images before publishing</li>
              <li>Prefer modern formats such as WebP when practical</li>
              <li>Match image size to the real placement on the page</li>
              <li>Define width and height attributes to reduce layout shift</li>
              <li>Use responsive images when layouts change by breakpoint</li>
              <li>Create dedicated crops for social previews when needed</li>
            </ul>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Common image SEO mistakes
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li>Uploading huge images straight from a camera or design export</li>
              <li>Keeping generic names such as IMG_1234 or screenshot-final</li>
              <li>Using one crop for every channel and layout</li>
              <li>Ignoring mobile-friendly dimensions and weight</li>
              <li>Skipping Open Graph and social preview planning</li>
              <li>Using alt text that is vague or overly promotional</li>
            </ul>
          </article>

          <article className="rounded-lg border border-blue-200 bg-blue-50 p-5 shadow-sm dark:border-blue-900/70 dark:bg-blue-950/35">
            <h2 className="text-2xl font-extrabold tracking-normal text-blue-950 dark:text-blue-100">
              Continue the publishing workflow
            </h2>
            <p className="mt-4 text-sm leading-7 text-blue-950/90 dark:text-blue-100/90">
              After the score, move into the next action that matters most: compress the file, resize it for the final placement or run a broader publish check before the image reaches the CMS.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link href="/compress-image" className="rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm font-semibold text-blue-900 shadow-sm dark:border-blue-800 dark:bg-slate-900 dark:text-blue-100">
                Compress image
              </Link>
              <Link href="/smart-image-publish-check" className="rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm font-semibold text-blue-900 shadow-sm dark:border-blue-800 dark:bg-slate-900 dark:text-blue-100">
                Run full publish check
              </Link>
            </div>
          </article>
        </section>
      </div>
    </ToolSeoPage>
  );
}
