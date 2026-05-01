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
    />
  );
}
