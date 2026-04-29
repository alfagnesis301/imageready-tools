import ToolSeoPage from "@/components/ToolSeoPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Smart Image Publish Check",
  description:
    "Analyze image dimensions, file size, format, ratio and publishing readiness for websites, SEO, social media and more."
});

const faqs = [
  {
    question: "What does the Smart Image Publish Check measure?",
    answer:
      "It measures dimensions, aspect ratio, file size, format suitability, compression opportunity and context-specific publishing signals."
  },
  {
    question: "Is the score guaranteed?",
    answer:
      "No. The score is an estimate designed to help decision-making before publishing. It does not guarantee ranking, approval or exact third-party rendering."
  },
  {
    question: "Which preset should I choose?",
    answer:
      "Choose the place where the image will be used, such as Open Graph, YouTube Thumbnail, Instagram Story, Website / Blog Image or E-commerce Product Image."
  },
  {
    question: "Are images stored?",
    answer:
      "No. Images are analyzed locally in your browser and are not uploaded or stored by this app."
  }
];

export default function SmartImagePublishCheckPage() {
  return (
    <ToolSeoPage
      eyebrow="Main tool"
      title="Smart Image Publish Check"
      description="Check whether an image is ready to publish across common web, search and social contexts with a practical score and clear recommendations."
      initialPreset="website-blog"
      toolDescription="Upload an image, choose a publishing preset and get estimated readiness checks without sending the file to a server."
      sections={[
        {
          heading: "Purpose-built presets",
          paragraphs: [
            "The checker includes presets for websites, SEO featured images, Open Graph, YouTube thumbnails, Instagram, LinkedIn, Pinterest, product photos, favicons, email headers and hero banners."
          ]
        },
        {
          heading: "Actionable results",
          paragraphs: [
            "The output focuses on practical next steps: resize, compress, convert format, keep transparency when needed or use a larger source file."
          ]
        },
        {
          heading: "Private workflow",
          paragraphs: [
            "The analysis uses browser APIs and does not upload your image. Optional exports are generated locally through Canvas when supported."
          ]
        }
      ]}
      faqs={faqs}
    />
  );
}
