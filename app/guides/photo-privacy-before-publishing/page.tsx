import GuideArticle from "@/components/GuideArticle";
import { getGuide, guideMetaDescription } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("photo-privacy-before-publishing")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guideMetaDescription(guide),
  path: "/guides/photo-privacy-before-publishing",
  absoluteTitle: true
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
