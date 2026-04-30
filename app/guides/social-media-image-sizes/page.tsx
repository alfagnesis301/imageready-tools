import GuideArticle from "@/components/GuideArticle";
import { getGuide } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("social-media-image-sizes")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guide.description,
  path: "/guides/social-media-image-sizes"
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
