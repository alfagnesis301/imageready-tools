import ToolSeoPage from "@/components/ToolSeoPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Instagram Image Size Checker",
  description:
    "Check Instagram post and story image dimensions, aspect ratio and publishing readiness locally in your browser."
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
      toolDescription="Upload an image and choose Instagram Post or Instagram Story to review ratio, size, format and export options."
      sections={[
        {
          heading: "Post guidance",
          paragraphs: [
            "Common feed ratios include square 1:1, portrait 4:5 and landscape around 1.91:1."
          ]
        },
        {
          heading: "Story guidance",
          paragraphs: [
            "Stories commonly use a 9:16 vertical frame such as 1080 x 1920 pixels. Keep important details away from interface areas."
          ]
        },
        {
          heading: "Ratio reminders",
          paragraphs: [
            "A matching ratio helps reduce unexpected cropping and makes the final image feel more intentional."
          ]
        }
      ]}
      faqs={faqs}
    />
  );
}
