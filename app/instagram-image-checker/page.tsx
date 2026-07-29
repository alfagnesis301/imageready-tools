import Link from "next/link";
import ToolSeoPage from "@/components/ToolSeoPage";
import { createPageMetadata } from "@/lib/seo";

// Es la página con mejor CTR del sitio (6,1 % en posición 33), así que el
// snippet ya funciona: se refuerza con año y cobertura de formatos en lugar
// de reescribirlo por completo.
export const metadata = createPageMetadata({
  title: "Instagram Image Size Checker 2026: Post, Story and Reel",
  description:
    "Check your Instagram image size in seconds: post, story, reel and profile dimensions with the right aspect ratio. Free, no upload, runs in your browser.",
  path: "/instagram-image-checker",
  absoluteTitle: true
});

const faqs = [
  {
    question: "Which Instagram post sizes are checked?",
    answer:
      "The preset checks common square, portrait and landscape feed ratios such as 1080 x 1080, 1080 x 1350 and 1080 x 566."
  },
  {
    question: "Can I check an Instagram Story?",
    answer:
      "Yes. Choose the Instagram Story preset for the common 1080 x 1920 pixel vertical format."
  },
  {
    question: "Does the tool crop my image automatically?",
    answer:
      "No. It recommends resizing or cropping targets and lets you export a resized version, but creative cropping remains your choice."
  },
  {
    question: "Is WebP recommended for Instagram?",
    answer:
      "JPG and PNG are commonly used. WebP may be useful in some workflows, but always verify your final upload path."
  }
];

export default function InstagramImageCheckerPage() {
  return (
    <ToolSeoPage
      eyebrow="Social media"
      title="Instagram Image Size Checker"
      description="Check Instagram post, story and vertical creative dimensions before publishing or exporting final assets."
      initialPreset="instagram-post"
      path="/instagram-image-checker"
      toolDescription="Upload an image and choose Instagram Post or Instagram Story to review ratio, size, format and export options."
      sections={[
        {
          heading: "Post guidance",
          paragraphs: [
            "Common feed ratios include square 1:1, portrait 4:5 and landscape around 1.91:1.",
            "A dedicated export helps protect the subject from unexpected cropping and keeps the feed image intentional."
          ]
        },
        {
          heading: "Story guidance",
          paragraphs: [
            "Stories commonly use a 9:16 vertical frame such as 1080 x 1920 pixels. Keep important details away from interface areas.",
            "Vertical images should leave enough breathing room for captions, controls and profile UI."
          ]
        },
        {
          heading: "Ratio reminders",
          paragraphs: [
            "A matching ratio helps reduce unexpected cropping and makes the final image feel more intentional.",
            "The checker gives ratio guidance, but final crop choices should still be reviewed in the publishing app."
          ]
        }
      ]}
      faqs={faqs}
    >
      <div className="mx-auto max-w-4xl">
        <p className="label">Instagram export workflow</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          Prepare separate exports for feed, portrait and story formats
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Instagram images are often reused across different placements, but a square post, a
          portrait feed image and a vertical story do not share the same visual space. A dedicated
          export helps protect the focal point, reduce awkward crops and keep text readable on
          mobile screens.
        </p>
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
              <tr>
                <th className="p-4 font-extrabold">Placement</th>
                <th className="p-4 font-extrabold">Common size</th>
                <th className="p-4 font-extrabold">Practical note</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">Square feed post</td>
                <td className="p-4">1080 x 1080 px</td>
                <td className="p-4">Good for product grids and balanced compositions.</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">Portrait feed post</td>
                <td className="p-4">1080 x 1350 px</td>
                <td className="p-4">Often gives more vertical space in the feed.</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">Landscape post</td>
                <td className="p-4">1080 x 566 px</td>
                <td className="p-4">Useful for wide scenes, but text can become small.</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">Story or Reel cover</td>
                <td className="p-4">1080 x 1920 px</td>
                <td className="p-4">Keep important details away from UI areas.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
          <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
            Instagram export checklist
          </h3>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            <li>Create a separate export for feed and story placements.</li>
            <li>Keep faces, products and key text away from the extreme edges.</li>
            <li>Review the image on a phone-sized screen before publishing.</li>
            <li>Compress the final export without blurring text or product details.</li>
            <li>Verify the final upload in Instagram because the app can still recompress media.</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/social-media-image-sizes" className="button-secondary">Size guide</Link>
          <Link href="/resize-image" className="button-secondary">Resize image</Link>
          <Link href="/guides/social-media-image-sizes" className="button-primary">Read social guide</Link>
        </div>
      </div>
    </ToolSeoPage>
  );
}
