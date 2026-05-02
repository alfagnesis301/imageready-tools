import SocialMediaImageSizesContent from "./SocialMediaImageSizesContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Social Media Image Sizes Guide",
  description:
    "A practical guide to common social media image sizes for Open Graph, YouTube, Instagram, LinkedIn, Pinterest, e-commerce and email.",
  path: "/social-media-image-sizes"
});

export default function SocialMediaImageSizesPage() {
  return <SocialMediaImageSizesContent />;
}
