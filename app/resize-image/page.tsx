import Link from "next/link";
import ToolSeoPage from "@/components/ToolSeoPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Free Image Resizer",
  description:
    "Resize images by width and height, lock aspect ratio and export common publishing sizes locally in your browser.",
  path: "/resize-image"
});

const faqs = [
  {
    question: "Can I resize by exact width and height?",
    answer:
      "Yes. Upload an image, set the width and height, then export a resized version locally from your browser."
  },
  {
    question: "What does lock aspect ratio do?",
    answer:
      "It keeps the image proportions consistent when you change width or height, which helps avoid stretched results."
  },
  {
    question: "Does resizing make a small image sharper?",
    answer:
      "No. Upscaling can fit a target size, but it usually cannot restore detail that was not present in the source image."
  },
  {
    question: "Which presets are included?",
    answer:
      "Common quick sizes include Open Graph, YouTube thumbnail, Instagram square, Story, Pinterest and email header dimensions."
  }
];

export default function ResizeImagePage() {
  return (
    <ToolSeoPage
      eyebrow="Image utility"
      title="Free Image Resizer"
      description="Resize images for website layouts, Open Graph previews, YouTube thumbnails, Instagram posts, stories, Pinterest pins and email headers."
      initialPreset="open-graph"
      toolDescription="Upload an image, check its readiness and use the Resize image panel to export exact dimensions with optional aspect ratio lock."
      sections={[
        {
          heading: "Resize by dimensions",
          paragraphs: [
            "Set a custom width and height or use common publishing presets for fast exports.",
            "This is useful when a platform asks for a specific size, when a hero image is too large or when a product grid needs consistent image dimensions."
          ]
        },
        {
          heading: "Keep proportions",
          paragraphs: [
            "Aspect ratio lock helps keep the image from looking stretched when only one dimension changes.",
            "If the destination needs a different ratio, crop intentionally instead of stretching the file to fit a shape."
          ]
        },
        {
          heading: "Common use cases",
          paragraphs: [
            "Use resizing for share previews, thumbnails, ecommerce grids, email headers and responsive website imagery.",
            "For very small source images, resizing upward may meet a numeric target but it cannot restore missing detail, so the checker flags likely blurry results."
          ]
        }
      ]}
      faqs={faqs}
    >
      <div className="mx-auto max-w-4xl">
        <p className="label">Resize workflow</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          Resize images for the place they will actually appear
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Resizing is not only about making an image smaller. A good publishing resize matches the
          final use: article body, Open Graph preview, YouTube thumbnail, product grid, email header
          or social crop. When an image is far larger than the layout, the page sends pixels that
          readers never see. When an image is too small, it can look soft even if the file size is
          low.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          PublishPixel helps you compare current dimensions with common publishing targets before
          exporting a local copy. This reduces unnecessary file weight, helps prevent awkward crops
          and keeps the original image separate from the version that goes live. Use resizing before
          compression when the source file is much larger than the destination needs.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-bold text-slate-950 dark:text-white">Avoid oversized uploads</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              A 5000px photo rarely needs to be uploaded at full size for a blog preview, product
              listing or email header.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-bold text-slate-950 dark:text-white">Protect aspect ratio</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Locking the aspect ratio helps prevent stretched faces, products and graphics when one
              dimension changes.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-bold text-slate-950 dark:text-white">Create channel copies</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Export dedicated versions for Open Graph, YouTube, Instagram, Pinterest and product
              pages instead of forcing one crop everywhere.
            </p>
          </article>
        </div>

        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-4 py-3">Destination</th>
                <th scope="col" className="px-4 py-3">Practical target</th>
                <th scope="col" className="px-4 py-3">Resize note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {[
                ["Open Graph", "1200 x 630 px", "Use a wide crop with centered focal content"],
                ["YouTube thumbnail", "1280 x 720 px", "Keep key text away from edges and overlays"],
                ["Instagram story", "1080 x 1920 px", "Use a vertical 9:16 export with safe margins"],
                ["Product grid", "1000 x 1000 px or larger", "Keep crops consistent across listings"]
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

        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">
            Clear resizing limitations
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Resizing cannot create detail that is missing from the source image. If the original is
            blurry or too small, upscaling may satisfy a pixel target but still look weak. For
            important thumbnails, product photos and hero sections, start with a source image that
            already has enough detail and resize down from there.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/smart-image-publish-check" className="button-primary">Check dimensions</Link>
            <Link href="/guides/image-size-for-web" className="button-secondary">Web size guide</Link>
            <Link href="/social-media-image-sizes" className="button-secondary">Social size guide</Link>
          </div>
        </div>
      </div>
    </ToolSeoPage>
  );
}
