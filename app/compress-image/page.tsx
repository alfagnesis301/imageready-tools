import Link from "next/link";
import ToolSeoPage from "@/components/ToolSeoPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Free Image Compressor",
  description:
    "Compress JPG, PNG and WebP images in your browser and estimate savings before downloading an optimized preview.",
  path: "/compress-image"
});

const faqs = [
  {
    question: "How does the image compressor work?",
    answer:
      "After you upload a supported image, the browser draws it to Canvas and exports a new file with the selected quality and format when supported."
  },
  {
    question: "When should I use WebP?",
    answer:
      "WebP is often useful for reducing file size while preserving good visual quality, especially for website and blog images."
  },
  {
    question: "When is JPG a good choice?",
    answer:
      "JPG is commonly useful for photos and broad compatibility, especially when transparency is not required."
  },
  {
    question: "Should I compress PNG files?",
    answer:
      "PNG is useful for transparency and sharp graphics, but it may be heavier for photos. WebP can often be a better publishing format."
  }
];

export default function CompressImagePage() {
  return (
    <ToolSeoPage
      eyebrow="Image utility"
      title="Free Image Compressor"
      description="Reduce image weight for websites, blogs, previews and campaigns with a browser-based compressor that keeps your file local."
      initialPreset="website-blog"
      toolDescription="Upload an image, review its file size and use the Compress and convert panel to export an optimized JPG, WebP or PNG preview."
      sections={[
        {
          heading: "What it does",
          paragraphs: [
            "The compressor estimates output size, lets you adjust quality and exports a new image locally when the browser supports the chosen format.",
            "Use it before uploading article images, product photos, thumbnails or campaign graphics so the file is lighter before it reaches a CMS or page builder."
          ]
        },
        {
          heading: "Format choices",
          paragraphs: [
            "Use JPG for many photos, PNG when transparency or crisp graphics matter, and WebP when you want a modern balance of quality and size.",
            "If transparency is detected, keep a format that supports it unless you intentionally want a flattened background."
          ]
        },
        {
          heading: "When to compress",
          paragraphs: [
            "Compression is useful before uploading blog images, hero images, product visuals, email graphics and social previews that may slow down loading.",
            "Compression does not replace responsive image markup, caching or a good hosting setup, but it can reduce unnecessary weight at the source."
          ]
        }
      ]}
      faqs={faqs}
    >
      <div className="mx-auto max-w-4xl">
        <p className="label">Compression workflow</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          Compress images before they slow down your page
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Large image files are one of the easiest problems to miss before publishing. A photo may
          look perfect in a design tool but still be unnecessarily heavy for a blog post, landing
          page, product page or email header. PublishPixel helps you create a lighter publishing
          copy directly in your browser, so the original file can stay safely stored while the web
          version is prepared for real use.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          The compressor is designed for practical web publishing. It is not a replacement for your
          master image, a professional print workflow or a full responsive image pipeline. Instead,
          it gives creators, marketers and site owners a fast pre-upload step: check the current
          weight, choose an output format, test a quality level and download a publishing copy that
          is easier to move through a CMS, store builder, email tool or campaign page.
        </p>

        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-4 py-3">Image type</th>
                <th scope="col" className="px-4 py-3">Recommended approach</th>
                <th scope="col" className="px-4 py-3">Main risk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {[
                ["Blog photo", "Export JPG or WebP at balanced quality", "Large file slowing article load"],
                ["Product image", "Keep detail, reduce unnecessary dimensions", "Blurry product details after over-compression"],
                ["Transparent graphic", "Use PNG or WebP with transparency", "Losing transparent background in JPG"],
                ["Email header", "Keep width practical and file lightweight", "Slow loading in email clients"]
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

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-bold text-slate-950 dark:text-white">Use cases</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Compress blog images, feature images, lightweight product visuals, email banners and
              preview graphics before they are added to a live publishing system.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-bold text-slate-950 dark:text-white">Quality checks</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Review faces, product edges, text, gradients and logos after export. File size is only
              useful when the visual still supports the page.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-bold text-slate-950 dark:text-white">Limitations</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Browser encoders vary. For critical brand, print or archival work, keep your original
              and verify the exported file in the final destination.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-900/70 dark:bg-blue-950/35">
          <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">
            Continue the publishing check
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
            Compression is only one readiness signal. After exporting a lighter copy, compare the
            image against a destination preset, check the filename, confirm the crop and review
            metadata awareness before publishing.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/smart-image-publish-check" className="button-primary">Run Smart Check</Link>
            <Link href="/guides/compress-images-without-losing-quality" className="button-secondary">Compression guide</Link>
            <Link href="/guides/webp-vs-jpeg-vs-png" className="button-secondary">Format guide</Link>
          </div>
        </div>
      </div>
    </ToolSeoPage>
  );
}
