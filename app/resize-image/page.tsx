import ResizeImageContent from "./ResizeImageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Free Image Resizer",
  description:
    "Resize images by width and height, lock aspect ratio and export common publishing sizes locally in your browser.",
  path: "/resize-image"
});

export default function ResizeImagePage() {
  return <ResizeImageContent />;
}
