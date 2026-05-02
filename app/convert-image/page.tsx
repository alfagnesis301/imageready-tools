import ConvertImageContent from "./ConvertImageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Free Image Converter",
  description:
    "Convert compatible JPG, PNG and WebP images in your browser and choose practical output formats for publishing.",
  path: "/convert-image"
});

export default function ConvertImagePage() {
  return <ConvertImageContent />;
}
