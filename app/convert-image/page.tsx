import ToolSeoPage from "@/components/ToolSeoPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Free Image Converter",
  description:
    "Convert compatible JPG, PNG and WebP images in your browser and choose practical output formats for publishing."
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
            "Canvas export can create practical JPG, PNG and WebP versions for many browser-supported raster images."
          ]
        },
        {
          heading: "Format recommendations",
          paragraphs: [
            "WebP is often useful for modern web publishing, JPG is common for photos, and PNG is useful when transparency or crisp graphics are important."
          ]
        },
        {
          heading: "Clear limitations",
          paragraphs: [
            "Browser support differs. If a format cannot be exported, the app shows a clear message instead of pretending the conversion succeeded."
          ]
        }
      ]}
      faqs={faqs}
    />
  );
}
