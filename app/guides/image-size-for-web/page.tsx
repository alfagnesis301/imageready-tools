import GuideArticle from "@/components/GuideArticle";
import { getGuide } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("image-size-for-web")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guide.description,
  path: "/guides/image-size-for-web"
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
