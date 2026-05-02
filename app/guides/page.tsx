import GuidesContent from "./GuidesContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Image Publishing Guides",
  description:
    "Original guides about image size, metadata, alt text, SEO, compression, formats, social media sizes and photo privacy.",
  path: "/guides"
});

export default function GuidesPage() {
  return <GuidesContent />;
}
