import Link from "next/link";
import ToolSeoPage from "@/components/ToolSeoPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Free Image Converter",
  description:
    "Convert compatible JPG, PNG and WebP images in your browser and choose practical output formats for publishing.",
  path: "/convert-image"
});

const faqs = [
  {
    question: "Which conversions are supported?",
    answer:
      "The browser export tool supports common raster conversions such as PNG to JPG, JPG to WebP, PNG to WebP and WebP to JPG when the browser allows it."
  },
  {
    question: "Will transparency be preserved?",
    answer:
      "Transparency can be preserved in PNG and WebP exports. JPG does not support transparency and uses a white background."
  },
  {
    question: "Can I convert SVG?",
    answer:
      "This app performs basic SVG checks but does not export SVG as raster because SVG handling can vary by browser and workflow."
  },
  {
    question: "Is conversion private?",
    answer:
      "Yes. The conversion happens locally in the browser and the image is not uploaded by this app."
  }
];

export default function ConvertImagePage() {
  return (
    <ToolSeoPage
      eyebrow="Image utility"
      title="Free Image Converter"
      description="Convert images to publishing-friendly formats such as WebP, JPG or PNG without uploading the file to a server."
      initialPreset="website-blog"
      toolDescription="Upload an image and use the Compress and convert panel to export a new local file in a supported format."
      sections={[
        {
          heading: "Convert JPG, PNG and WebP",
          paragraphs: [
            "Canvas export can create practical JPG, PNG and WebP versions for many browser-supported raster images.",
            "The conversion is designed for publishing copies, not for archival master files or professional prepress workflows."
          ]
        },
        {
          heading: "Format recommendations",
          paragraphs: [
            "WebP is often useful for modern web publishing, JPG is common for photos, and PNG is useful when transparency or crisp graphics are important.",
            "PublishPixel recommends the output format based on the current file, transparency signal and selected publishing preset."
          ]
        },
        {
          heading: "Clear limitations",
          paragraphs: [
            "Browser support differs. If a format cannot be exported, the app shows a clear message instead of pretending the conversion succeeded.",
            "SVG files receive basic safety-conscious analysis, but the app does not execute user SVG markup or promise SVG-to-raster conversion."
          ]
        }
      ]}
      faqs={faqs}
    >
      <div className="mx-auto max-w-4xl">
        <p className="label">Format workflow</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          Convert images into practical publishing formats
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Different publishing contexts need different image formats. JPG is often useful for
          photos, PNG is useful for transparency and crisp interface graphics, while WebP can
          provide a strong balance between quality and file size for modern web pages. Choosing the
          wrong format can make a file heavier than necessary or remove transparency that the design
          needs.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          PublishPixel creates a browser-based publishing copy. It is not meant to replace
          professional archival formats, print workflows or original source files. The point is to
          create a practical web version, check whether the format fits the destination and avoid
          accidental changes such as flattening a transparent logo into a JPG.
        </p>

        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-4 py-3">Format</th>
                <th scope="col" className="px-4 py-3">Best for</th>
                <th scope="col" className="px-4 py-3">Watch out for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {[
                ["JPG", "Photos and broad compatibility", "No transparency support"],
                ["PNG", "Transparency, icons and crisp graphics", "Can be heavy for large photos"],
                ["WebP", "Modern web pages and smaller exports", "Check compatibility for older workflows"],
                ["SVG", "Simple vector logos and icons", "Do not execute untrusted SVG markup"]
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

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-bold text-slate-950 dark:text-white">When conversion helps</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Convert PNG photos to WebP or JPG when transparency is not needed. Convert JPG to
              WebP when your website supports modern formats and you want a smaller publishing copy.
              Keep PNG or WebP when transparent edges are part of the design.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-bold text-slate-950 dark:text-white">What conversion cannot solve</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Format conversion does not fix a poor crop, blurry source, inaccurate alt text or
              oversized dimensions by itself. Use it together with resizing, compression and the
              Smart Image Publish Check.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-900/70 dark:bg-blue-950/35">
          <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">
            Choose the format after checking the destination
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
            A website image, email header, social preview and product listing may not need the same
            format. Start with the destination preset, check whether transparency matters, then
            export the smallest file that still looks clear in context.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/smart-image-publish-check" className="button-primary">Compare with presets</Link>
            <Link href="/guides/webp-vs-jpeg-vs-png" className="button-secondary">Read format guide</Link>
            <Link href="/compress-image" className="button-secondary">Compress after converting</Link>
          </div>
        </div>
      </div>
    </ToolSeoPage>
  );
}
