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
    />
  );
}
