import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import FAQ from "@/components/FAQ";
import SmartPublishCheck from "@/components/SmartPublishCheck";
import { ogImageMeta } from "@/lib/ogVariants";

const pageUrl = "https://publishpixel.net/smart-image-publish-check";
const title = "Smart Image Publish Check 2026 — Pre-Publish Image Checker";
const description =
  "Run a smart pre-publish image check before you upload: size, format, dimensions, filename, alt text, metadata and publishing readiness — free, in your browser.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: pageUrl,
    languages: {
      en: pageUrl,
      es: "https://publishpixel.net/es/smart-image-publish-check",
      "x-default": pageUrl
    }
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title,
    description:
      "Verify size, format, dimensions, alt text, filename, metadata and publishing readiness before you upload — free, in your browser.",
    url: pageUrl,
    siteName: "PublishPixel",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    images: [ogImageMeta("smart-check.png")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Image Publish Check 2026 — Pre-Publish Image Checker",
    description: "One pre-publish check for size, format, metadata, alt text and platform readiness. Free, in your browser.",
    images: [ogImageMeta("smart-check.png")]
  }
};

const checklistRows = [
  {
    check: "File size",
    why: "Large images can slow pages",
    action: "Compress before publishing"
  },
  {
    check: "Dimensions",
    why: "Oversized images waste bandwidth",
    action: "Resize to match the layout"
  },
  {
    check: "Format",
    why: "Different formats suit different images",
    action: "Use JPG, PNG, WebP, AVIF, or SVG appropriately"
  },
  {
    check: "Filename",
    why: "Helps organization and image context",
    action: "Use descriptive filenames"
  },
  {
    check: "Alt text",
    why: "Helps accessibility and context",
    action: "Add useful alt text when the image has meaning"
  },
  {
    check: "Compression",
    why: "Reduces file weight",
    action: "Check visual quality after compression"
  },
  {
    check: "Crop",
    why: "Prevents awkward framing",
    action: "Preview the image in its final placement"
  },
  {
    check: "Metadata",
    why: "Can include hidden data",
    action: "Inspect or remove metadata when needed"
  }
];

const prePublishChecks = [
  "Is the file size reasonable?",
  "Are the dimensions suitable for the page?",
  "Is the format appropriate?",
  "Is the filename descriptive?",
  "Does the image need alt text?",
  "Is the image compressed without looking blurry?",
  "Is the crop suitable for the placement?",
  "Is important text readable?",
  "Is the image too large for mobile?",
  "Does the image contain metadata you should remove?"
];

const sizeFormatPoints = [
  "Use JPG for photos and realistic images.",
  "Use PNG for graphics, screenshots, or transparency when needed.",
  "Use WebP or AVIF where your site workflow supports modern compression.",
  "Use SVG for logos and icons instead of raster images when possible.",
  "Avoid uploading huge 4000 px images into small cards or thumbnails.",
  "Use platform-specific dimensions for social images and link previews.",
  "Use responsive image sizes when your site framework supports them."
];

const performanceChecks = [
  "Large images may affect page speed, especially on mobile connections.",
  "Hero images can affect Largest Contentful Paint when they are too heavy.",
  "Lazy-loading non-critical images can help reduce initial page work.",
  "Do not lazy-load the main LCP image if it is important above the fold.",
  "Set width and height attributes when possible to reduce layout shift.",
  "Compress screenshots carefully so interface text remains readable."
];

const accessibilityChecks = [
  "Alt text is for users, not just SEO tools or search engines.",
  "Avoid embedding important text only inside images when HTML text would work.",
  "Check contrast when an image contains readable text or product labels.",
  "Use captions when an image needs context beyond a short alt attribute.",
  "Do not use alt text as a place for keyword stuffing."
];

const faqItems = [
  {
    question: "What is an image SEO checker?",
    answer:
      "An image SEO checker helps review whether an image is ready for publishing by checking practical factors such as file size, dimensions, format, filename, alt text, compression, and SEO readiness."
  },
  {
    question: "What should I check before publishing an image?",
    answer:
      "Check file size, dimensions, format, filename, alt text, compression quality, crop, readability, and whether the image fits the page or platform where it will appear."
  },
  {
    question: "Does an image SEO checker improve rankings?",
    answer:
      "No tool can guarantee rankings. An image SEO checker can support better SEO by helping you avoid oversized files, missing alt text, poor filenames, and publishing mistakes."
  },
  {
    question: "What is the best image format for SEO?",
    answer:
      "It depends on the image. JPG works well for photos, PNG for transparency or sharp graphics, SVG for logos and icons, and WebP or AVIF for modern compression when supported."
  },
  {
    question: "Should every image have alt text?",
    answer:
      "Meaningful images should have useful alt text. Decorative images may not need descriptive alt text. Avoid stuffing keywords into alt text."
  },
  {
    question: "What is a good image filename?",
    answer:
      "A good image filename is short, descriptive, and readable. Use words that describe the image, separated by hyphens, such as blue-running-shoes-side-view.jpg."
  },
  {
    question: "What is the difference between image SEO and image metadata?",
    answer:
      "Image SEO focuses on publishing readiness: size, format, dimensions, filename, alt text, and performance. Image metadata focuses on hidden file data such as EXIF, GPS, camera, copyright, or author fields."
  },
  {
    question: "Should I remove metadata before publishing?",
    answer:
      "Sometimes. Removing metadata can reduce file size and protect privacy, especially if photos include GPS or camera data. Keep metadata only when it is useful for your workflow."
  }
];

const relatedTools = [
  {
    href: "/website-image-optimizer",
    anchor: "Website Image Optimizer",
    description: "Compress, resize, and prepare images for faster website publishing."
  },
  {
    href: "/compress-image",
    anchor: "Compress Image Online",
    description: "Reduce file size while keeping your image visually sharp."
  },
  {
    href: "/resize-image",
    anchor: "Resize Image Online",
    description: "Resize images to match page layouts, cards, thumbnails, and social formats."
  },
  {
    href: "/social-media-image-sizes",
    anchor: "Social Media Image Sizes Guide",
    description:
      "Find recommended image dimensions for Instagram, Facebook, X, LinkedIn, YouTube, TikTok, and Pinterest."
  },
  {
    href: "/image-metadata-checker",
    anchor: "Image Metadata Checker",
    description: "Inspect EXIF, GPS, camera, copyright, and hidden metadata before publishing."
  }
];

export default function SmartImagePublishCheckPage() {
  const graphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${pageUrl}#webapplication`,
        name: "Smart Image Publish Check",
        url: pageUrl,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        description:
          "Run a smart pre-publish image check: file size, format, dimensions, filename, alt text, metadata and publishing readiness, in your browser.",
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
            name: "Smart Image Publish Check",
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
          <p className="label">Free pre-publish image checklist for creators, marketers, publishers, and website owners.</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            Smart Image Publish Check: Verify Every Image Before You Publish
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            Review your image before it goes live. Check file size, format, dimensions, filename, alt text, compression, and publishing readiness in one practical workflow.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#checker" className="button-primary">Check an Image</a>
            <Link href="/website-image-optimizer" className="button-secondary">Optimize Image Size</Link>
          </div>
        </div>
        <div id="checker">
          <SmartPublishCheck
            initialPreset="website-blog"
            heading="Smart Image Publish Check"
            description="Upload an image to review size, dimensions, format, filename structure, alt text planning, compression opportunity, and publishing readiness."
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
            An image SEO checker helps you review an image before publishing by checking file size, dimensions, format, filename, alt text, compression, and readiness for web or social use. It does not replace manual review, but it can help catch common issues that slow pages, hurt accessibility, or make images harder to manage.
          </p>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">Table of contents</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["what-is", "What is an image SEO checker?"],
              ["pre-publish", "What to check before publishing an image"],
              ["publishing-checklist", "Image publishing checklist"],
              ["size-format", "Size, format, and dimensions"],
              ["filename-alt", "Filename and alt text checks"],
              ["performance", "Web performance checks"],
              ["accessibility", "Accessibility checks"],
              ["seo-vs-metadata", "Image SEO vs image metadata"],
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
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">What is an image SEO checker?</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            An image SEO checker is a tool or workflow that helps review whether an image is ready for publishing. It can check practical factors such as file size, dimensions, format, filename, alt text, compression, and whether the image is likely to fit the page or social placement where it will appear.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            It does not automatically make the image rank. It helps catch common publishing issues before the image goes live, so creators and publishers can prepare cleaner image files for websites, articles, product pages, and social previews.
          </p>
        </section>

        <section id="pre-publish" className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">What to check before publishing an image</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              A pre-publish image check is most useful before an image enters your CMS, store, landing page, email workflow, or social scheduler. At that stage, it is still easy to resize, rename, compress, crop, or export a better publishing copy.
            </p>
          </div>
          <ul className="rounded-lg border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            {prePublishChecks.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section id="publishing-checklist">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Image Publishing Checklist</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            This checklist separates publishing readiness from metadata privacy. Use it to catch common image SEO, accessibility, format, and performance issues before upload.
          </p>
          <ResponsiveTable columns={["Check", "Why it matters", "What to do"]} rows={checklistRows.map((row) => [row.check, row.why, row.action])} />
        </section>

        <section id="size-format" className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Size, format, and dimensions</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Image size and format choices affect how fast an image loads and how well it fits the page. For deeper compression, resizing, and format guidance, use the <Link href="/website-image-optimizer" className="font-bold text-blue-700 hover:underline dark:text-blue-300">Website Image Optimizer</Link>.
            </p>
          </div>
          <ul className="rounded-lg border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            {sizeFormatPoints.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section id="filename-alt" className="max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Filename and alt text checks</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Filenames should describe the image in short, readable words. Avoid generic names such as IMG_1234.jpg, screenshot-final.png, or image-copy.webp. Hyphen-separated filenames are usually easier to scan and manage.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Alt text should describe meaningful images for people. Decorative images may not need descriptive alt text, and keyword stuffing can make the experience worse.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50 p-5 text-sm text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100">
              <p className="font-bold">Bad filename</p>
              <p className="mt-2 font-mono">IMG_2039.jpg</p>
              <p className="mt-5 font-bold">Bad alt text</p>
              <p className="mt-2">image seo checker image optimization publishpixel image seo</p>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100">
              <p className="font-bold">Better filename</p>
              <p className="mt-2 font-mono">blue-running-shoes-side-view.jpg</p>
              <p className="mt-5 font-bold">Better alt text</p>
              <p className="mt-2">Blue running shoes shown from the side on a white background.</p>
            </div>
          </div>
        </section>

        <section id="performance" className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Web performance checks</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Performance checks help catch images that may slow a page, add layout shift, or hurt mobile experience. They do not guarantee rankings, but they can support a cleaner publishing workflow.
            </p>
          </div>
          <ul className="rounded-lg border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            {performanceChecks.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section id="accessibility" className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Accessibility checks</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Accessibility checks keep the image useful for more people. PublishPixel can help review alt text structure, but it cannot see the image the way a human editor can.
            </p>
          </div>
          <ul className="rounded-lg border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            {accessibilityChecks.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section id="seo-vs-metadata" className="rounded-lg border border-blue-200 bg-blue-50 p-6 shadow-sm dark:border-blue-900 dark:bg-blue-950/25">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Image SEO vs image metadata</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
            This pre-publish check focuses on publishing readiness and image SEO: size, format, dimensions, filename, alt text, compression, accessibility basics, and whether the image is practical for a web or social placement.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
            The Image Metadata Checker focuses on hidden file data such as EXIF, GPS, camera data, copyright fields, and privacy review. Need to inspect EXIF, camera, GPS, or hidden file data? Use the <Link href="/image-metadata-checker" className="font-bold text-blue-700 hover:underline dark:text-blue-300">Image Metadata Checker</Link> instead.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-blue-200 bg-white p-5 dark:border-blue-900 dark:bg-slate-900">
              <h3 className="font-bold text-slate-950 dark:text-white">Image SEO checker</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">Use this for publishing readiness, file size, dimensions, format, filename, alt text, compression, and accessibility basics.</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-white p-5 dark:border-blue-900 dark:bg-slate-900">
              <h3 className="font-bold text-slate-950 dark:text-white">Image Metadata Checker</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">Use this when you need to inspect EXIF, GPS, camera, copyright, or other hidden metadata.</p>
            </div>
          </div>
        </section>

        <section id="publishpixel-helps">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">How PublishPixel Helps You Check Images Before Publishing</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            PublishPixel combines browser-based checks with focused tools for image publishing. Use the full checker first, then move to compression, resizing, social dimensions, or metadata review when the result points to a specific next step.
          </p>
          <RelatedTools />
        </section>

        <section id="faq">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">Smart Image Publish Check FAQ</h2>
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
