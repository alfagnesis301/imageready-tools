import CompressImageContent from "./CompressImageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Free Image Compressor",
  description:
    "Compress JPG, PNG and WebP images in your browser and estimate savings before downloading an optimized preview.",
  path: "/compress-image"
});

export default function CompressImagePage() {
  return <CompressImageContent />;
}
