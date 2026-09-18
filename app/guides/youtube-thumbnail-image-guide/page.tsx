import GuideArticle from "@/components/GuideArticle";
import { getGuide, guideMetaDescription } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("youtube-thumbnail-image-guide")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guideMetaDescription(guide),
  path: "/guides/youtube-thumbnail-image-guide",
  absoluteTitle: true
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
