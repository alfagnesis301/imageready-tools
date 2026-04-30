import GuideArticle from "@/components/GuideArticle";
import { getGuide } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("image-alt-text")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guide.description,
  path: "/guides/image-alt-text"
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
