import GuideArticle from "@/components/GuideArticle";
import { getGuide, guideMetaDescription } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("open-graph-image-best-practices")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guideMetaDescription(guide),
  path: "/guides/open-graph-image-best-practices",
  absoluteTitle: true
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
