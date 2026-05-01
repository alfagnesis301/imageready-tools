import Link from "next/link";
import ToolSeoPage from "@/components/ToolSeoPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Website Image Optimizer",
  description:
    "Analyze website images for size, speed, SEO filename guidance, WebP recommendations and browser-based optimization.",
  path: "/website-image-optimizer"
});

const faqs = [
  {
    question: "What makes an image good for a website?",
    answer:
      "A website image should usually be large enough for the layout, compressed enough to load quickly and exported in a suitable format."
  },
  {
    question: "Is WebP always the best choice?",
    answer:
      "WebP is often a strong choice for modern websites, but PNG may be needed for some transparent graphics and JPG may be preferred for certain compatibility workflows."
  },
  {
    question: "Can this improve SEO?",
    answer:
      "Optimized images may help page experience and clarity, but this tool does not guarantee rankings. It provides practical SEO-oriented checks."
  },
  {
    question: "Does the optimizer create responsive image markup?",
    answer:
      "No. It helps prepare the image asset. Your website should still use responsive markup and caching where appropriate."
  }
];

export default function WebsiteImageOptimizerPage() {
  return (
    <ToolSeoPage
      eyebrow="Website performance"
      title="Website Image Optimizer"
      description="Prepare images for faster websites with checks for dimensions, file size, format, SEO filename structure and export options."
      initialPreset="website-blog"
      toolDescription="Upload a website image to estimate readiness, compression opportunity and practical WebP or JPG export settings."
      sections={[
        {
          heading: "SEO and speed",
          paragraphs: [
            "The optimizer highlights large files, small source images and basic SEO filename structure so you can prepare assets before publishing.",
            "It is useful before images enter a CMS because naming, dimensions, format and compression are easier to fix while the file is still local."
          ]
        },
        {
          heading: "Compression",
          paragraphs: [
            "Use the export panel to test a lighter version and compare estimated savings before adding the file to a website.",
            "The goal is not the smallest possible file at any cost; it is a practical balance between visual quality and page weight."
          ]
        },
        {
          heading: "WebP recommendations",
          paragraphs: [
            "For many website images, WebP may reduce weight while maintaining useful quality. Keep a compatibility plan for older or specialized environments.",
            "If the image needs transparency, the format recommendation changes so you do not accidentally flatten important transparent areas."
          ]
        }
      ]}
      faqs={faqs}
    >
      <div className="mx-auto max-w-4xl">
        <p className="label">Website image workflow</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          Optimize the asset before it enters your CMS
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Many website image problems start before the file is uploaded. A file may have a vague
          name, oversized dimensions, the wrong format or a file weight that is too heavy for the
          role it plays on the page. PublishPixel helps you catch those issues while the file is
          still local and easy to change.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          This workflow is useful for blog images, landing page visuals, product photos, hero
          sections, author portraits, documentation screenshots and support article graphics. The
          goal is not to chase a perfect number, but to create a practical publishing copy that fits
          the layout and remains clear for the reader.
        </p>
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
              <tr>
                <th className="p-4 font-extrabold">Signal</th>
                <th className="p-4 font-extrabold">What to check</th>
                <th className="p-4 font-extrabold">Why it matters</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">Dimensions</td>
                <td className="p-4">Match the largest real display size</td>
                <td className="p-4">Avoid sending pixels users never see</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">File size</td>
                <td className="p-4">Reduce unnecessary weight</td>
                <td className="p-4">Helps page speed and upload workflow</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">Format</td>
                <td className="p-4">Choose JPG, PNG or WebP intentionally</td>
                <td className="p-4">Wrong formats can create heavy files</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">Filename</td>
                <td className="p-4">Use readable hyphen-separated words</td>
                <td className="p-4">Improves organization and image context</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Link href="/smart-image-publish-check" className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-white">
            Run a full publish check
          </Link>
          <Link href="/compress-image" className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-white">
            Compress a website image
          </Link>
          <Link href="/guides/website-image-performance-checklist" className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-white">
            Read the performance checklist
          </Link>
        </div>
      </div>
    </ToolSeoPage>
  );
}
