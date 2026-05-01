import GuideArticle from "@/components/GuideArticle";
import { getGuide } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("youtube-thumbnail-image-guide")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guide.description,
  path: "/guides/youtube-thumbnail-image-guide"
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
