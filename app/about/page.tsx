import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About PublishPixel",
  description:
    "Learn about PublishPixel, a privacy-first browser utility for preparing images for publishing."
});

export default function AboutPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">About</p>
        <h1>About PublishPixel</h1>
        <p>
          PublishPixel is a free browser-based utility for people who publish images on websites,
          blogs, social media, YouTube, e-commerce pages, emails and search-focused content.
        </p>
        <p>
          The product philosophy is simple: image preparation should be practical, fast and private.
          The Smart Image Publish Check gives an estimated readiness score, explains what looks good
          and points out issues such as oversized files, small dimensions, mismatched ratios or formats
          that may not fit the destination.
        </p>
        <h2>Privacy-first workflow</h2>
        <p>
          The core image analysis happens in your browser. PublishPixel does not upload your image
          to a server for analysis, does not save user images and only uses localStorage for preferences
          such as theme, consent and the last selected preset.
        </p>
        <h2>Who it is for</h2>
        <p>
          The tool is designed for bloggers, SEO professionals, creators, designers, students, product
          teams, e-commerce sellers and small businesses that need a quick publishing check before an
          image goes live.
        </p>
      </article>
    </section>
  );
}
