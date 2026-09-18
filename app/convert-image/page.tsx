import ConvertImageContent from "./ConvertImageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Convert Images Free: JPG, PNG & WebP In-Browser",
  description:
    "Convert images between JPG, PNG and WebP directly in your browser. Choose the right format for photos, graphics or transparency, with no upload.",
  path: "/convert-image",
  absoluteTitle: true
});

export default function ConvertImagePage() {
  return <ConvertImageContent />;
}
