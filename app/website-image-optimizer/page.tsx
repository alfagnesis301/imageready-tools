import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import FAQ from "@/components/FAQ";
import SmartPublishCheck from "@/components/SmartPublishCheck";
import { ogImageMeta } from "@/lib/ogVariants";

const pageUrl = "https://publishpixel.net/website-image-optimizer";
const title = "Website Image Optimizer 2026 – Compress & Optimise Images Free";
const description =
  "Optimise and compress images for your website with free online tools. Resize, convert and optimize JPG, PNG, WebP and AVIF for faster pages in 2026.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: pageUrl,
    languages: {
      en: pageUrl,
      es: "https://publishpixel.net/es/website-image-optimizer",
      "x-default": pageUrl
    }
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title,
    description:
      "Optimize images for your website with free tools for compression, resizing, format checks, and publishing readiness.",
    url: pageUrl,
    siteName: "PublishPixel",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    images: [ogImageMeta("website-optimizer.png")]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Compress, resize, and prepare website images for faster pages and cleaner publishing.",
    images: [ogImageMeta("website-optimizer.png")]
  }
};

const formatRows = [
  {
    format: "JPG",
    bestFor: "Photos and realistic images",
    pros: "Small file size, widely supported",
    watch: "Can lose quality after repeated compression"
  },
  {
    format: "PNG",
    bestFor: "Graphics, screenshots, transparency",
    pros: "Sharp edges and transparency",
    watch: "Larger files than JPG/WebP"
  },
  {
    format: "WebP",
    bestFor: "Modern web images",
    pros: "Strong compression, supports transparency",
    watch: "Check compatibility and workflow needs"
  },
  {
    format: "AVIF",
    bestFor: "High compression modern images",
    pros: "Very efficient compression",
    watch: "Slower encoding, check visual quality"
  },
  {
    format: "SVG",
    bestFor: "Logos and icons",
    pros: "Scales cleanly, very small for vectors",
    watch: "Not for photos"
  }
];

const sizeRows = [
  {
    useCase: "Blog hero image",
    size: "1200 x 630 px or 1600 x 900 px",
    notes: "Good for article previews and social sharing"
  },
  {
    useCase: "Full-width website hero",
    size: "1600-2000 px wide",
    notes: "Avoid uploading huge 4000 px images if not needed"
  },
  {
    useCase: "Content image",
    size: "800-1200 px wide",
    notes: "Match the layout width"
  },
  {
    useCase: "Product image",
    size: "1000-1600 px wide",
    notes: "Keep detail but compress carefully"
  },
  {
    useCase: "Thumbnail/card image",
    size: "400-800 px wide",
    notes: "Avoid using full-size images for small cards"
  },
  {
    useCase: "Logo/icon",
    size: "SVG when possible",
    notes: "Use raster fallback if needed"
  }
];

const actionRows = [
  {
    action: "Compress",
    changes: "File size",
    use: "When image is visually OK but too heavy"
  },
  {
    action: "Resize",
    changes: "Pixel dimensions",
    use: "When image is larger than the layout needs"
  },
  {
    action: "Convert",
    changes: "File format",
    use: "When WebP/AVIF gives better compression"
  },
  {
    action: "Crop",
    changes: "Framing/aspect ratio",
    use: "When image needs to fit a specific placement"
  },
  {
    action: "Remove metadata",
    changes: "Hidden file data",
    use: "When privacy or file size matters"
  }
];

const steps = [
  "Choose the right dimensions for where the image appears.",
  "Crop before compressing.",
  "Pick the right format.",
  "Compress while checking visual quality.",
  "Use responsive image sizes where possible.",
  "Add descriptive filenames.",
  "Add useful alt text when the image carries meaning.",
  "Avoid using images as CSS backgrounds when the image should be indexed.",
  "Test page speed after publishing."
];

const checklist = [
  "Use descriptive filenames.",
  "Add alt text when the image adds meaning.",
  "Use HTML img or picture elements for important images.",
  "Include width and height attributes when possible.",
  "Use responsive images with srcset or picture when supported.",
  "Compress images before publishing.",
  "Avoid uploading images much larger than the display size.",
  "Use lazy loading for non-critical images.",
  "Do not lazy-load the main LCP image.",
  "Use a strong preview image for social sharing.",
  "Keep important text readable after compression."
];

const mistakes = [
  "Uploading 4000 px images into 600 px containers.",
  "Compressing screenshots until text becomes blurry.",
  "Using PNG for large photos when JPG/WebP would be smaller.",
  "Forgetting mobile users.",
  "Not setting width and height.",
  "Lazy-loading the main hero image.",
  "Using vague filenames like IMG_1234.jpg.",
  "Removing too much quality from product images.",
  "Using one image crop for every platform.",
  "Not checking the final page after upload."
];

const faqItems = [
  {
    question: "What is a website image optimizer?",
    answer:
      "A website image optimizer is a tool that helps reduce image file size, resize oversized images, and prepare image formats for faster web publishing."
  },
  {
    question: "How do I optimize images for my website?",
    answer:
      "Start by resizing the image to the display size you need, choose the right format, compress carefully, add descriptive filenames and alt text, and test the page after publishing."
  },
  {
    question: "How do I optimise website images for faster pages?",
    answer:
      "To optimise website images, resize them to the maximum size they are displayed at, convert to WebP or AVIF, and compress to your file-size budget (often under 150 KB). Optimising images this way usually cuts file size by 60–80% and improves Core Web Vitals."
  },
  {
    question: "What is the best image format for websites?",
    answer:
      "It depends on the image. JPG works well for photos, PNG for graphics and transparency, SVG for logos and icons, and WebP or AVIF for modern compression when supported."
  },
  {
    question: "Does image optimization improve SEO?",
    answer:
      "Image optimization can support SEO by improving page speed, user experience, and image discoverability. It does not guarantee higher rankings by itself."
  },
  {
    question: "Should I use WebP or AVIF?",
    answer:
      "WebP and AVIF often provide better compression than older formats. Use them when your site workflow supports them and always check visual quality after conversion."
  },
  {
    question: "What image size is best for a website?",
    answer:
      "Use the smallest dimensions that still look sharp in the layout. Blog images often work well around 1200 px wide, while thumbnails and cards usually need much smaller files."
  },
  {
    question: "Is compression the same as resizing?",
    answer:
      "No. Compression reduces file size, while resizing changes the image's pixel dimensions. Many images need both."
  },
  {
    question: "Should I remove image metadata before publishing?",
    answer:
      "Removing metadata can reduce file size and may protect privacy, especially if photos contain camera or location information. Keep only metadata that you actually need."
  }
];

const relatedTools = [
  {
    href: "/compress-image",
    anchor: "Compress Image Online",
    description: "Reduce file size while checking that the image still looks sharp."
  },
  {
    href: "/resize-image",
    anchor: "Resize Image Online",
    description: "Resize images to match your page layout, card, thumbnail, or hero area."
  },
  {
    href: "/social-media-image-sizes",
    anchor: "Social Media Image Sizes Guide",
    description:
      "Find recommended dimensions for Instagram, Facebook, X, LinkedIn, YouTube, TikTok, and Pinterest."
  },
  {
    href: "/smart-image-publish-check",
    anchor: "Smart Image Publish Check",
    description: "Check whether your image is ready to publish before uploading."
  },
  {
    href: "/image-metadata-checker",
    anchor: "Image Metadata Checker",
    description: "Review EXIF and metadata before publishing images online."
  }
];

export default function WebsiteImageOptimizerPage() {
  const graphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${pageUrl}#webapplication`,
        name: "Website Image Optimizer",
        url: pageUrl,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        description:
          "Optimize images for your website with free online tools for compression, resizing, format checks, and publishing readiness.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD"
        },
        publisher: {
          "@type": "Organization",
          name: "PublishPixel",
          url: "https://publishpixel.net"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://publishpixel.net/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Website Image Optimizer",
            item: pageUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }}
      />

      <section className="shell grid gap-8 py-10 lg:grid-cols-[0.85fr_1.15fr] lg:py-14">
        <div className="flex flex-col justify-center">
          <p className="label">Free image optimization tools for creators, publishers, and website owners.</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            Website Image Optimizer – Compress and Optimize Images Online
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            Optimize images before publishing them on your website. Compress file size, check dimensions, prepare responsive formats, and make images easier to use across pages, blogs, stores, and landing pages.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#optimizer" className="button-primary">Optimize an Image</a>
            <Link href="/social-media-image-sizes" className="button-secondary">Check Image Sizes</Link>
          </div>
        </div>
        <div id="optimizer">
          <SmartPublishCheck
            initialPreset="website-blog"
            heading="Website Image Optimizer"
            description="Upload a website image to review dimensions, file size, format, filename structure, compression opportunity, and publishing readiness."
          />
        </div>
      </section>

      <div className="shell">
        <AdSlot className="mb-12" />
      </div>

      <article className="shell space-y-14 py-14">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="label">Quick answer</p>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
            A website image optimizer helps reduce image file size, resize images to the right dimensions, and prepare formats such as JPG, PNG, WebP, or AVIF before publishing. Smaller, properly sized images can improve page speed, reduce bandwidth, and support better user experience without making images look blurry.
          </p>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">Table of contents</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["what-is", "What is a website image optimizer?"],
              ["why-it-matters", "Why image optimization matters for websites"],
              ["formats", "Best image formats for websites"],
              ["sizes", "Recommended image sizes for web pages"],
              ["how-to", "How to optimize images for your website"],
              ["actions", "Compression vs resizing vs conversion"],
              ["seo-checklist", "Image SEO checklist"],
              ["mistakes", "Common image optimization mistakes"],
              ["publishpixel-helps", "How PublishPixel helps"],
              ["faq", "FAQ"]
            ].map(([href, label]) => (
              <a key={href} href={`#${href}`} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-blue-700 dark:hover:text-blue-300">
                {label}
              </a>
            ))}
          </div>
        </section>

        <section id="what-is" className="max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">What is a website image optimizer?</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            A website image optimizer is a tool or workflow that reduces image file size, resizes oversized images, checks dimensions, and prepares images for web publishing. It helps turn a raw export from a camera, design app, screenshot tool, or product workflow into a cleaner publishing asset.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            It does not automatically make a bad image good. It can help prepare images so they load faster, fit the page better, and remain easier to manage across a CMS, product page, article, landing page, or store catalog.
          </p>
        </section>

        <section id="why-it-matters" className="max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Why image optimization matters for websites</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Image optimization can help create faster loading pages, better user experience, lower bandwidth, and better mobile performance. It also makes the publishing workflow cleaner because oversized images are easier to catch before they enter a CMS or page builder.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Large website images can affect Core Web Vitals, especially when the largest contentful paint element is a hero image, product image, or large article visual. Right-sized images may improve LCP and reduce wasted bytes, depending on how the page is built and delivered.
          </p>
        </section>

        <section id="formats">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Best image formats for websites</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            For many websites, WebP or AVIF are good modern options when the workflow supports them. JPG remains useful for photos, PNG for transparent graphics, and SVG for logos or icons.
          </p>
          <ResponsiveTable columns={["Format", "Best for", "Pros", "Watch out for"]} rows={formatRows.map((row) => [row.format, row.bestFor, row.pros, row.watch])} />
        </section>

        <section id="sizes">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Recommended image sizes for web pages</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            The best website image size depends on the layout. Use the smallest dimensions that still look sharp at the largest real display size.
          </p>
          <ResponsiveTable columns={["Use case", "Recommended starting size", "Notes"]} rows={sizeRows.map((row) => [row.useCase, row.size, row.notes])} />
        </section>

        <section id="how-to" className="max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">How to optimize images for your website</h2>
          <ol className="mt-5 grid list-decimal gap-3 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
            {steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </section>

        <section id="actions">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Compression vs resizing vs conversion</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            Compression reduces file size. Resizing changes pixel dimensions. Conversion changes file format. Cropping changes composition and aspect ratio. Metadata removal can reduce file size and protect privacy when hidden file data is not needed.
          </p>
          <ResponsiveTable columns={["Action", "What it changes", "When to use it"]} rows={actionRows.map((row) => [row.action, row.changes, row.use])} />
        </section>

        <section id="seo-checklist" className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Image SEO Checklist</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Image SEO is not only about keywords. It is also about helping pages load cleanly, giving images useful context, and making important visuals easier to discover and render correctly.
            </p>
          </div>
          <ul className="rounded-lg border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            {checklist.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section id="mistakes" className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Common Image Optimization Mistakes</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Most image problems are simple publishing mistakes: an export is too large, the format is not ideal, or the page layout receives more pixels than it needs.
            </p>
          </div>
          <ul className="rounded-lg border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            {mistakes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section id="publishpixel-helps">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">How PublishPixel Helps You Prepare Website Images</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            PublishPixel helps you review image readiness before a file reaches your website. Use the tool that matches the next step in your workflow: compression, resizing, social dimensions, publishing checks, or metadata review.
          </p>
          <RelatedTools />
        </section>

        <section id="faq">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Website Image Optimizer FAQ</h2>
          <div className="mt-8">
            <FAQ items={faqItems} />
          </div>
        </section>
      </article>

      <section className="shell pb-14">
        <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Related tools</h2>
        <RelatedTools />
        <AdSlot variant="inline" className="mt-10" />
      </section>
    </>
  );
}

function ResponsiveTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
        <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
          <tr>
            {columns.map((column) => <th key={column} className="px-4 py-3">{column}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
          {rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell) => <td key={cell} className="px-4 py-4">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RelatedTools() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {relatedTools.map((tool) => (
        <article key={tool.href} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <Link href={tool.href} className="text-sm font-bold text-slate-950 hover:text-blue-700 dark:text-white dark:hover:text-blue-300">
            {tool.anchor}
          </Link>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{tool.description}</p>
        </article>
      ))}
    </div>
  );
}

