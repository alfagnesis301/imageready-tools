import GuidesContent from "./GuidesContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Image Publishing Guides: Sizes, SEO & Metadata",
  description:
    "Original guides on image size, EXIF metadata, alt text, compression, file formats, social media dimensions and photo privacy before you publish.",
  path: "/guides",
  absoluteTitle: true
});

export default function GuidesPage() {
  return <GuidesContent />;
}
