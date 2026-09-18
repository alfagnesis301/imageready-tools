import GuideArticle from "@/components/GuideArticle";
import { getGuide, guideMetaDescription } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("website-image-performance-checklist")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guideMetaDescription(guide),
  path: "/guides/website-image-performance-checklist",
  absoluteTitle: true
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
