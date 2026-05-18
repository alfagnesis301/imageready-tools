import AdSlot from "@/components/AdSlot";
import HomeFAQ from "@/components/HomeFAQ";
import HomeSeoMetaPromo from "@/components/HomeSeoMetaPromo";
import LocalizedLink from "@/components/LocalizedLink";
import LocalizedPresetNote from "@/components/LocalizedPresetNote";
import { T } from "@/components/LanguageProvider";
import SmartPublishCheck from "@/components/SmartPublishCheck";
import TrustBadges from "@/components/TrustBadges";
import { GUIDES } from "@/lib/guides";
import { faqJsonLd, softwareApplicationJsonLd, createPageMetadata } from "@/lib/seo";
import { PRESET_ORDER, PUBLISH_RULES } from "@/lib/publishRules";

export const metadata = createPageMetadata({
  title: "Free Smart Image Publish Check Tool",
  description:
    "Check if your image is ready for websites, SEO, social media, YouTube thumbnails, e-commerce, email headers and more privately in your browser."
});

const homeFaq = [
  {
    question: "Does PublishPixel upload my image?",
    answer:
      "No. The main analysis runs locally in your browser with File API, Canvas API and native image decoding where available."
  },
  {
    question: "Is the PublishReady Score an official platform score?",
    answer:
      "No. It is an estimated score based on common publishing guidelines, file size targets, dimensions, aspect ratio and practical quality heuristics."
  },
  {
    question: "Can I use this for Open Graph images?",
    answer:
      "Yes. Choose the Open Graph preset to check the common 1200 x 630 pixel format, file size and format recommendations."
  },
  {
    question: "Can the tool compress images?",
    answer:
      "Yes. After uploading a supported raster image, you can export an optimized JPG, WebP or PNG preview from your browser."
  },
  {
    question: "Does resizing improve image quality?",
    answer:
      "Resizing can fit a publishing target, but upscaling a small image may not recover lost detail. The tool warns when the source looks too small."
  },
  {
    question: "Does the tool remove EXIF metadata?",
    answer:
      "Re-exporting through Canvas normally removes EXIF metadata, but behavior can vary by browser and format, so this should not be treated as a perfect metadata removal guarantee."
  },
  {
    question: "Which formats are supported?",
    answer:
      "The initial version supports JPG, JPEG, PNG, WebP, static GIF checks and basic SVG dimension analysis."
  },
  {
    question: "Can I use this for YouTube thumbnails?",
    answer:
      "Yes. The YouTube preset checks the common 1280 x 720 pixel size, 16:9 ratio and file size recommendations."
  },
  {
    question: "Is this tool free?",
    answer:
      "Yes. The app is designed as a free browser-based utility. AdSense support is prepared, but ads are not shown unless an approved publisher client is configured."
  },
  {
    question: "Should I verify official requirements?",
    answer:
      "Yes. Platform requirements can change, so verify official documentation when the image is critical for a campaign, upload or launch."
  }
];

const checks = [
  "home.check.0",
  "home.check.1",
  "home.check.2",
  "home.check.3",
  "home.check.4",
  "home.check.5"
];

const audiences = [
  "home.audience.0",
  "home.audience.1",
  "home.audience.2",
  "home.audience.3",
  "home.audience.4",
  "home.audience.5",
  "home.audience.6",
  "home.audience.7"
];

const scoreParts = ["home.scorePart.0", "home.scorePart.1", "home.scorePart.2", "home.scorePart.3"];

const primaryCards = [
  {
    href: "/social-media-image-sizes",
    titleKey: "home.card.socialSizes.title",
    descriptionKey: "home.card.socialSizes.description"
  },
  {
    href: "/website-image-optimizer",
    titleKey: "home.card.websiteOptimizer.title",
    descriptionKey: "home.card.websiteOptimizer.description"
  },
  {
    href: "/smart-image-publish-check",
    titleKey: "home.card.smartCheck.title",
    descriptionKey: "home.card.smartCheck.description"
  },
  {
    href: "/compress-image",
    titleKey: "home.card.compress.title",
    descriptionKey: "home.card.compress.description"
  },
  {
    href: "/resize-image",
    titleKey: "home.card.resize.title",
    descriptionKey: "home.card.resize.description"
  },
  {
    href: "/image-metadata-checker",
    titleKey: "home.card.metadata.title",
    descriptionKey: "home.card.metadata.description"
  }
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(homeFaq)) }}
      />

      <section className="shell grid gap-8 py-10 lg:grid-cols-[0.82fr_1.18fr] lg:py-14">
        <div className="flex flex-col justify-center">
          <p className="label">PublishPixel</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            <T k="home.heroTitle" />
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            <T k="home.heroDescription" />
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#tool" className="button-primary">
              <T k="action.uploadImage" />
            </a>
            <LocalizedLink href="/social-media-image-sizes" className="button-secondary">
              <T k="home.viewSizeGuide" />
            </LocalizedLink>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {primaryCards.map((card) => (
              <div key={card.href} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <LocalizedLink
                  href={card.href}
                  className="text-sm font-bold text-slate-950 hover:text-blue-700 dark:text-white dark:hover:text-blue-300"
                >
                  <T k={card.titleKey} />
                </LocalizedLink>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  <T k={card.descriptionKey} />
                </p>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <TrustBadges />
          </div>
        </div>

        <SmartPublishCheck />
      </section>

      <div className="shell">
        <AdSlot className="mb-12" />
      </div>

      <section className="border-y border-slate-200 bg-white/58 py-14 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="label"><T k="home.checksEyebrow" /></p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              <T k="home.checksTitle" />
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <T k="home.checksDescription" />
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {checks.map((check) => (
              <div key={check} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                <T k={check} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-14">
        <div className="max-w-3xl">
          <p className="label"><T k="home.differentEyebrow" /></p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            <T k="home.differentTitle" />
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            <T k="home.differentDescription" />
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-bold text-slate-950 dark:text-white"><T k="home.contextTitle" /></h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <T k="home.contextDescription" />
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-bold text-slate-950 dark:text-white"><T k="home.workflowTitle" /></h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <T k="home.workflowDescription" />
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-bold text-slate-950 dark:text-white"><T k="home.scoreTitle" /></h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <T k="home.scoreDescription" />
            </p>
          </article>
        </div>
      </section>

      <section className="shell grid gap-10 py-14 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="label"><T k="home.speedEyebrow" /></p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            <T k="home.readinessTitle" />
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            <T k="home.readinessP1" />
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            <T k="home.readinessP2" />
          </p>
        </div>
        <AdSlot variant="sidebar" className="hidden lg:block" />
      </section>

      <section className="border-y border-slate-200 bg-white/58 py-14 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="label"><T k="home.workflowEyebrow" /></p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              <T k="home.workflowSectionTitle" />
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <T k="home.workflowSectionDescription" />
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-950 dark:text-white"><T k="home.beforeUploadTitle" /></h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <T k="home.beforeUploadDescription" />
              </p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-950 dark:text-white"><T k="home.beforeShareTitle" /></h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <T k="home.beforeShareDescription" />
              </p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-950 dark:text-white"><T k="home.beforeArchiveTitle" /></h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <T k="home.beforeArchiveDescription" />
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="shell py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="label"><T k="home.accessibilityEyebrow" /></p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              <T k="home.accessibilityTitle" />
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <T k="home.accessibilityP1" />
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <T k="home.accessibilityP2" />
            </p>
          </div>
          <div>
            <p className="label"><T k="home.performanceEyebrow" /></p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              <T k="home.performanceTitle" />
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <T k="home.performanceP1" />
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <T k="home.performanceP2" />
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/58 py-14 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="label"><T k="home.scoringEyebrow" /></p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              <T k="home.scoringTitle" />
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <T k="home.scoringDescription" />
            </p>
          </div>
          <div className="grid gap-3">
            {scoreParts.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
                <T k={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-14">
        <div className="max-w-3xl">
          <p className="label"><T k="home.guidesEyebrow" /></p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            <T k="home.guidesTitle" />
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            <T k="home.guidesDescription" />
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {GUIDES.slice(0, 8).map((guide) => (
            <LocalizedLink
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft focus-ring dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700"
            >
              <h3 className="text-sm font-bold text-slate-950 dark:text-white">
                <T k={`guide.${guide.slug}.title`} />
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                <T k={`guide.${guide.slug}.description`} />
              </p>
            </LocalizedLink>
          ))}
        </div>
      </section>

      <section className="shell py-14">
        <div className="max-w-3xl">
          <p className="label"><T k="home.popularEyebrow" /></p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            <T k="home.popularTitle" />
          </h2>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PRESET_ORDER.slice(0, 12).map((presetId) => {
            const preset = PUBLISH_RULES[presetId];
            return (
              <div key={preset.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-sm font-bold text-slate-950 dark:text-white">
                  <T k={`preset.${preset.id}`} />
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <LocalizedPresetNote preset={preset} />
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/58 py-14 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="label"><T k="home.privacyEyebrow" /></p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              <T k="home.privacyTitle" />
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <T k="home.privacyDescription" />
            </p>
          </div>
          <div>
            <p className="label"><T k="home.audienceEyebrow" /></p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {audiences.map((audience) => (
                <div key={audience} className="rounded-lg border border-slate-200 bg-white p-3 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  <T k={audience} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-14">
        <div className="max-w-3xl">
          <p className="label"><T k="home.faqEyebrow" /></p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            <T k="home.faqTitle" />
          </h2>
        </div>
        <div className="mt-8">
          <HomeFAQ />
        </div>
        <div className="mt-10 rounded-lg border border-slate-200 bg-white/82 p-5 text-sm leading-7 text-slate-600 dark:border-slate-800 dark:bg-slate-900/82 dark:text-slate-400">
          <strong className="text-slate-950 dark:text-white"><T k="home.disclaimerLabel" /></strong>{" "}
          <T k="home.disclaimerText" />
        </div>
        <AdSlot variant="inline" className="mt-10" />
      </section>
    </>
  );
}


