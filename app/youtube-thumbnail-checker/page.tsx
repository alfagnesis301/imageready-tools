import Link from "next/link";
import ToolSeoPage from "@/components/ToolSeoPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "YouTube Thumbnail Size Checker",
  description:
    "Check YouTube thumbnail dimensions, 16:9 ratio, file size and format recommendations privately in your browser.",
  path: "/youtube-thumbnail-checker"
});

const faqs = [
  {
    question: "What size should a YouTube thumbnail be?",
    answer:
      "A commonly used YouTube thumbnail size is 1280 x 720 pixels with a 16:9 aspect ratio."
  },
  {
    question: "Does this check thumbnail text readability?",
    answer:
      "No. It provides a general reminder about safe areas, but it does not read or evaluate text inside the image."
  },
  {
    question: "What file size is recommended?",
    answer:
      "The preset uses a practical target below 2 MB and warns when the file is heavier."
  },
  {
    question: "Can I resize my thumbnail here?",
    answer:
      "Yes. Upload the image, use the resize panel and export a 1280 x 720 version when the browser supports it."
  }
];

export default function YouTubeThumbnailCheckerPage() {
  return (
    <ToolSeoPage
      eyebrow="Video creators"
      title="YouTube Thumbnail Size Checker"
      description="Check whether a thumbnail matches the common 1280 x 720 pixel size, 16:9 ratio and practical file size targets."
      initialPreset="youtube-thumbnail"
      path="/youtube-thumbnail-checker"
      toolDescription="Upload a thumbnail image and get a PublishReady score, warnings and export options for YouTube-style thumbnails."
      sections={[
        {
          heading: "Check dimensions",
          paragraphs: [
            "The YouTube preset checks for a 1280 x 720 target and warns when the image is too small for a crisp thumbnail.",
            "A larger source can be resized down cleanly, while a small source may look soft after export."
          ]
        },
        {
          heading: "Check ratio",
          paragraphs: [
            "The 16:9 ratio is important because mismatched images may be cropped or boxed in ways that reduce impact.",
            "Keep important faces, product details and text away from the edges because interfaces and preview surfaces can vary."
          ]
        },
        {
          heading: "Check file size",
          paragraphs: [
            "The tool flags oversized files and offers browser-based export options to create a lighter version.",
            "It does not read text inside the image or judge creative quality, so review contrast and readability yourself before uploading."
          ]
        }
      ]}
      faqs={faqs}
    >
      <div className="mx-auto max-w-4xl">
        <p className="label">Thumbnail workflow</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          Practical thumbnail checklist
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          A thumbnail needs to work at small sizes, in search results, in recommendation feeds and
          on mobile screens. Technical dimensions are only the first step. The visual should have a
          clear focal point, enough contrast and safe spacing around text or faces.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            [
              "Use a clear focal point",
              "Faces, products or key visual elements should be easy to recognize even when the thumbnail is small."
            ],
            [
              "Keep text readable",
              "Small text may disappear on mobile. Use fewer words, strong contrast and enough spacing."
            ],
            [
              "Avoid edge crowding",
              "Keep important elements away from the extreme borders to reduce cropping and overlay issues."
            ],
            [
              "Export a dedicated copy",
              "Do not upload a random screenshot if a dedicated thumbnail can communicate the video more clearly."
            ]
          ].map(([title, body]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-bold text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{body}</p>
            </article>
          ))}
        </div>
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
                ["Dimensions", "1280 x 720 px", "Common 16:9 thumbnail size"],
                ["Text", "Short, large and high contrast", "Improves mobile readability"],
                ["Focal point", "Centered and obvious", "Helps small previews communicate"],
                ["File size", "Light enough to upload smoothly", "Avoids unnecessary upload friction"]
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
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/guides/youtube-thumbnail-image-guide" className="button-primary">
            Read thumbnail guide
          </Link>
          <Link href="/resize-image" className="button-secondary">Resize thumbnail</Link>
        </div>
      </div>
    </ToolSeoPage>
  );
}
