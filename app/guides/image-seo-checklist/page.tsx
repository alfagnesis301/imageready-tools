import GuideArticle from "@/components/GuideArticle";
import { getGuide, guideMetaDescription } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("image-seo-checklist")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guideMetaDescription(guide),
  path: "/guides/image-seo-checklist",
  absoluteTitle: true
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
