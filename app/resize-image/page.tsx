import ResizeImageContent from "./ResizeImageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Resize Images Online Free: Web & Social Presets",
  description:
    "Resize images by width and height, lock the aspect ratio and export common web and social sizes. Runs locally in your browser, with no upload.",
  path: "/resize-image",
  absoluteTitle: true
});

export default function ResizeImagePage() {
  return <ResizeImageContent />;
}
