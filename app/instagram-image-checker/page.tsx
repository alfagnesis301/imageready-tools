import Link from "next/link";
import ToolSeoPage from "@/components/ToolSeoPage";
import { createPageMetadata } from "@/lib/seo";

// Es la página con mejor CTR del sitio (6,1 % en posición 33), así que el
// snippet ya funciona: se refuerza con año y cobertura de formatos en lugar
// de reescribirlo por completo.
export const metadata = createPageMetadata({
  title: "Instagram Image Size Checker 2026: Post, Story and Reel",
  description:
    "Check your Instagram image size in seconds: 3:4 feed posts, stories, Reels and the 3:4 profile grid crop. Free, no upload, runs in your browser.",
  path: "/instagram-image-checker",
  ogVariant: "instagram.png",
  absoluteTitle: true
});

const faqs = [
  {
    question: "What size should an Instagram post be?",
    answer:
      "1080 x 1440 px (3:4) is the safest default. It fills the feed and matches the 3:4 profile grid, so the post is not cropped in either place. Square 1080 x 1080 px and portrait 1080 x 1350 px still publish fine in the feed, and 1080 x 566 px landscape is the most heavily cropped in the grid."
  },
  {
    question: "Why does my 4:5 post get cut off on my profile?",
    answer:
      "The profile grid crops every thumbnail to 3:4. A 1080 x 1350 px image is taller than that, so the top and bottom are trimmed in the grid even though the feed shows it in full. Either export at 1080 x 1440 px or keep faces, logos and text inside the centre of the frame."
  },
  {
    question: "What size is an Instagram Reel and its cover?",
    answer:
      "A Reel is 1080 x 1920 px (9:16). Its cover comes from that same vertical frame, and the grid then crops that cover to 3:4, so a subject placed near the top or bottom of the Reel can disappear from the profile grid."
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
      description="Check Instagram post, story and Reel dimensions before publishing, including how the 3:4 profile grid will crop them."
      initialPreset="instagram-post"
      path="/instagram-image-checker"
      toolDescription="Upload an image and choose Instagram Post or Instagram Story to review ratio, size, format and export options."
      sections={[
        {
          heading: "Post guidance",
          paragraphs: [
            "1080 x 1440 px (3:4) is the format that survives both places at once: the feed shows it in full and the profile grid, which crops everything to 3:4, has nothing left to cut.",
            "Square 1:1, portrait 4:5 and landscape 1.91:1 still publish normally in the feed. They are simply trimmed in the grid, so keep the subject centred if you use them."
          ]
        },
        {
          heading: "Story guidance",
          paragraphs: [
            "Stories use a 9:16 vertical frame, 1080 x 1920 pixels. Keep important details away from the interface areas at the top and bottom.",
            "Vertical images should leave enough breathing room for captions, controls and profile UI."
          ]
        },
        {
          heading: "Reel guidance",
          paragraphs: [
            "A Reel is also 1080 x 1920 pixels. Its cover is a frame from that same vertical video, and the grid then crops that cover to 3:4.",
            "That is two crops in a row, so a subject sitting near the top or bottom of the Reel can disappear from the profile grid entirely."
          ]
        }
      ]}
      faqs={faqs}
    >
      <div className="mx-auto max-w-4xl">
        <p className="label">Instagram export workflow</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          Prepare separate exports for feed, story and Reel formats
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Instagram images are often reused across different placements, but a feed post, a vertical
          story and a Reel cover do not share the same visual space. There is also a second crop
          most people forget: whatever you post, the profile grid renders it at 3:4. A dedicated
          export helps protect the focal point, reduce awkward crops and keep text readable on
          mobile screens.
        </p>
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
              <tr>
                <th className="p-4 font-extrabold">Placement</th>
                <th className="p-4 font-extrabold">Size</th>
                <th className="p-4 font-extrabold">Ratio</th>
                <th className="p-4 font-extrabold">In the 3:4 profile grid</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">Portrait feed post</td>
                <td className="p-4">1080 x 1440 px</td>
                <td className="p-4">3:4</td>
                <td className="p-4">No crop. Fills the feed and the grid.</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">Portrait feed post (4:5)</td>
                <td className="p-4">1080 x 1350 px</td>
                <td className="p-4">4:5</td>
                <td className="p-4">Top and bottom trimmed. Keep the subject centred.</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">Square feed post</td>
                <td className="p-4">1080 x 1080 px</td>
                <td className="p-4">1:1</td>
                <td className="p-4">Sides trimmed to make it taller.</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">Landscape post</td>
                <td className="p-4">1080 x 566 px</td>
                <td className="p-4">1.91:1</td>
                <td className="p-4">Cropped hardest. Wide scenes lose most of their width.</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">Story</td>
                <td className="p-4">1080 x 1920 px</td>
                <td className="p-4">9:16</td>
                <td className="p-4">Not shown in the grid. Keep details away from UI areas.</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-4 font-semibold">Reel and Reel cover</td>
                <td className="p-4">1080 x 1920 px</td>
                <td className="p-4">9:16</td>
                <td className="p-4">The cover is cropped to 3:4. Centre the subject.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
          <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
            Instagram export checklist
          </h3>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            <li>Export feed posts at 1080 x 1440 px unless you have a reason not to.</li>
            <li>Create a separate export for feed, story and Reel placements.</li>
            <li>Check how the post will look in the 3:4 profile grid, not only in the feed.</li>
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
