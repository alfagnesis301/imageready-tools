import GuideArticle from "@/components/GuideArticle";
import { getGuide, guideMetaDescription } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("webp-vs-jpeg-vs-png")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guideMetaDescription(guide),
  path: "/guides/webp-vs-jpeg-vs-png",
  absoluteTitle: true
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
