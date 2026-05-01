import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about PublishPixel, a privacy-first browser utility for preparing images for publishing.",
  path: "/about"
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
        <h2>Original publishing guidance</h2>
        <p>
          Alongside the tool, PublishPixel publishes practical guides about image size, alt text,
          metadata, compression, formats and photo privacy. The content is written for real creators
          and site owners who need understandable checks before publishing.
        </p>
        <h2>Who it is for</h2>
        <p>
          The tool is designed for bloggers, SEO professionals, creators, designers, students, product
          teams, e-commerce sellers and small businesses that need a quick publishing check before an
          image goes live.
        </p>
        <h2>How we keep recommendations responsible</h2>
        <p>
          PublishPixel avoids pretending that an automated browser check can fully judge visual
          quality, copyright status, SEO ranking potential or final platform approval. The tool
          focuses on signals that can be checked from the file and selected publishing context:
          dimensions, ratio, file size, format, filename structure, alt text planning and export
          options.
        </p>
        <p>
          Our guides are written for practical publishing decisions, not exaggerated promises. When
          a platform, client campaign, accessibility requirement or legal context matters, users
          should verify the official requirements before publishing.
        </p>
        <h2>What PublishPixel does not do</h2>
        <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
          <li>It does not guarantee SEO rankings.</li>
          <li>It does not verify copyright ownership or image permissions.</li>
          <li>It does not promise approval from any social, search or advertising platform.</li>
          <li>
            It does not replace human review of image content, text readability, brand quality or
            legal risk.
          </li>
        </ul>
      </article>
    </section>
  );
}
