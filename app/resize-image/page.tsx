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
    />
  );
}
