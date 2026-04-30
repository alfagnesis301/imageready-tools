import GuideArticle from "@/components/GuideArticle";
import { getGuide } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("webp-vs-jpeg-vs-png")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guide.description,
  path: "/guides/webp-vs-jpeg-vs-png"
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
