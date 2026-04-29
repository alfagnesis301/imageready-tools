import ToolSeoPage from "@/components/ToolSeoPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Website Image Optimizer",
  description:
    "Analyze website images for size, speed, SEO filename guidance, WebP recommendations and browser-based optimization."
});

const faqs = [
  {
    question: "What makes an image good for a website?",
    answer:
      "A website image should usually be large enough for the layout, compressed enough to load quickly and exported in a suitable format."
  },
  {
    question: "Is WebP always the best choice?",
    answer:
      "WebP is often a strong choice for modern websites, but PNG may be needed for some transparent graphics and JPG may be preferred for certain compatibility workflows."
  },
  {
    question: "Can this improve SEO?",
    answer:
      "Optimized images may help page experience and clarity, but this tool does not guarantee rankings. It provides practical SEO-oriented checks."
  },
  {
    question: "Does the optimizer create responsive image markup?",
    answer:
      "No. It helps prepare the image asset. Your website should still use responsive markup and caching where appropriate."
  }
];

export default function WebsiteImageOptimizerPage() {
  return (
    <ToolSeoPage
      eyebrow="Website performance"
      title="Website Image Optimizer"
      description="Prepare images for faster websites with checks for dimensions, file size, format, SEO filename structure and export options."
      initialPreset="website-blog"
      toolDescription="Upload a website image to estimate readiness, compression opportunity and practical WebP or JPG export settings."
      sections={[
        {
          heading: "SEO and speed",
          paragraphs: [
            "The optimizer highlights large files, small source images and basic SEO filename structure so you can prepare assets before publishing."
          ]
        },
        {
          heading: "Compression",
          paragraphs: [
            "Use the export panel to test a lighter version and compare estimated savings before adding the file to a website."
          ]
        },
        {
          heading: "WebP recommendations",
          paragraphs: [
            "For many website images, WebP may reduce weight while maintaining useful quality. Keep a compatibility plan for older or specialized environments."
          ]
        }
      ]}
      faqs={faqs}
    />
  );
}
