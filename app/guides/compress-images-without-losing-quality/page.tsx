import GuideArticle from "@/components/GuideArticle";
import { getGuide } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("compress-images-without-losing-quality")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guide.description,
  path: "/guides/compress-images-without-losing-quality"
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
