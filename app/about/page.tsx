import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "About PublishPixel: who we are, our editorial process, and how we help creators prepare images for publishing.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">About</p>
        <h1>About PublishPixel</h1>

        <p>
          PublishPixel is a free browser-based utility for people who publish
          images on websites, blogs, social media, YouTube, e-commerce pages,
          emails and search-focused content. Our goal is to make image
          preparation practical, fast and private — without forcing creators to
          upload their files to unknown servers.
        </p>

        <h2>Our mission</h2>
        <p>
          Most online image tools focus on a single action: compress, resize or
          convert. PublishPixel was built to fill the gap between those
          single-action tools and the real publishing workflow. Before an image
          goes live on a blog, an e-commerce listing, an Open Graph card or a
          YouTube thumbnail, many small decisions need to be made about
          dimensions, weight, format, alt text and metadata. Our Smart Image
          Publish Check brings those decisions into one place.
        </p>

        <h2>Who is behind PublishPixel</h2>
        <p>
          PublishPixel is built and maintained by Ricardo Diaz, an independent
          web developer with a background in technical SEO and content
          publishing. That practical experience shapes every recommendation the
          tool makes.
        </p>
        <p>
          You can reach Ricardo at{" "}
          <a href="mailto:hello@publishpixel.net">hello@publishpixel.net</a> for
          editorial questions, partnership requests or feedback about the tool.
        </p>

        <h2>Editorial process and methodology</h2>
        <p>Our guides and recommendations are based on:</p>
        <ul>
          <li>
            Public documentation from major platforms (Google Search Central,
            Meta Business Help Center, YouTube Help, LinkedIn, Pinterest and
            Instagram).
          </li>
          <li>
            Web standards and accessibility guidance from the W3C, WHATWG and
            WAI.
          </li>
          <li>Hands-on testing with the tools and formats described in each article.</li>
          <li>
            Common publishing heuristics validated against real CMS, e-commerce
            and social workflows.
          </li>
        </ul>
        <p>
          Every guide is reviewed before publication and updated when platform
          requirements change. We do not make promises about SEO ranking, ad
          approval or platform-specific outcomes the tool cannot influence. See
          our <a href="/editorial-policy">Editorial Policy</a> for details.
        </p>

        <h2>Privacy-first by design</h2>
        <p>
          The core image analysis happens entirely in your browser using the File
          API, the Canvas API and native image decoding. PublishPixel does not
          upload your images to a server, does not store user images and does
          not track who you are. The only data kept in your browser is your
          selected theme, language, last-used preset and consent state — all
          stored locally via localStorage and cleared when you clear browser
          data. Full details in our <a href="/privacy-policy">Privacy Policy</a>.
        </p>

        <h2>Who PublishPixel is for</h2>
        <p>
          The tool is designed for bloggers, technical SEOs, content creators,
          designers, students, product teams, e-commerce sellers and small
          businesses that need a quick publishing check before an image goes
          live.
        </p>

        <h2>How we keep recommendations responsible</h2>
        <p>
          PublishPixel does not pretend that an automated browser check can
          fully judge visual quality, copyright status, SEO ranking potential or
          final platform approval. The tool focuses on signals that can be
          checked from the file itself and the selected publishing context:
          dimensions, ratio, file size, format, filename structure, alt text
          planning and export options.
        </p>
        <p>
          When a platform launch, client campaign, accessibility requirement or
          legal context matters, users should always verify the current official
          requirements before publishing.
        </p>

        <h2>What PublishPixel does not do</h2>
        <ul>
          <li>It does not guarantee SEO rankings or organic traffic results.</li>
          <li>It does not verify copyright ownership or image licensing.</li>
          <li>
            It does not promise approval from any social, search or advertising
            platform.
          </li>
          <li>
            It does not replace human review of image content, brand quality or
            legal risk.
          </li>
          <li>It does not store, share or sell your images or your data.</li>
        </ul>

        <h2>How PublishPixel is funded</h2>
        <p>
          PublishPixel is free to use. To keep it free and continue building new
          features, the site may show advertising via Google AdSense and may
          publish clearly labelled affiliate links inside the guides. We do not
          accept payment to alter editorial recommendations, and reviews and
          checklists are written independently of any advertiser.
        </p>
      </article>
    </section>
  );
}
