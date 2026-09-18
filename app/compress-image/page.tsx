import CompressImageContent from "./CompressImageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Compress Images Online Free — No Upload Needed",
  description:
    "Compress JPG, PNG and WebP images in your browser. See the exact size saving before you download, and your original file never leaves your device.",
  path: "/compress-image",
  absoluteTitle: true
});

export default function CompressImagePage() {
  return <CompressImageContent />;
}
