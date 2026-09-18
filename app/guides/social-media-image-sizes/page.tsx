import GuideArticle from "@/components/GuideArticle";
import { getGuide, guideMetaDescription } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("social-media-image-sizes")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guideMetaDescription(guide),
  path: "/guides/social-media-image-sizes",
  absoluteTitle: true
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
