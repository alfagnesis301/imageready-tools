import AdSlot from "@/components/AdSlot";
import FAQ from "@/components/FAQ";
import SmartPublishCheck from "@/components/SmartPublishCheck";
import TrustBadges from "@/components/TrustBadges";
import { faqJsonLd, softwareApplicationJsonLd, createPageMetadata } from "@/lib/seo";
import { PRESET_ORDER, PUBLISH_RULES } from "@/lib/publishRules";

export const metadata = createPageMetadata({
  title: "Free Smart Image Publish Check Tool",
  description:
    "Check if your image is ready for websites, SEO, social media, YouTube thumbnails, e-commerce, email headers and more privately in your browser."
});

const homeFaq = [
  {
    question: "Does ImageReady Tools upload my image?",
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
      "Yes. The app is designed as a free browser-based utility. AdSense placeholders are prepared but no fake ads are shown."
  },
  {
    question: "Should I verify official requirements?",
    answer:
      "Yes. Platform requirements can change, so verify official documentation when the image is critical for a campaign, upload or launch."
  }
];

const checks = [
  "Dimensions, aspect ratio and orientation",
  "Estimated file size and compression opportunity",
  "Format suitability for the selected publishing context",
  "SEO filename and alt text structure guidance",
  "Open Graph and social compatibility signals",
  "Warnings for heavy, small or mismatched images"
];

const audiences = [
  "Bloggers",
  "SEO professionals",
  "YouTubers",
  "E-commerce sellers",
  "Social media creators",
  "Designers",
  "Students",
  "Small businesses"
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
          <p className="label">ImageReady Tools</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            Free Smart Image Publish Check Tool
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Check if your image is ready for websites, SEO, social media, YouTube thumbnails,
            e-commerce, email headers, and more — privately in your browser.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#tool" className="button-primary">
              Upload an image
            </a>
            <a href="/social-media-image-sizes" className="button-secondary">
              View size guide
            </a>
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
            <p className="label">What the tool checks</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              What does ImageReady Tools check?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Image readiness is more than a file size number. The Smart Check combines dimensions,
              ratio, format, estimated compression and context so you can make a better publishing
              decision before an image goes live.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {checks.map((check) => (
              <div key={check} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                {check}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell grid gap-10 py-14 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="label">Publishing speed</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Why image readiness matters
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Images influence page speed, visual polish, social previews and the first impression of a
            post or product. A very large image can slow a page down, while a small or wrongly cropped
            image can look weak in previews. This tool helps you catch common issues early.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Recommendations are intentionally practical: resize for the channel, convert when it may
            reduce weight, compress carefully and avoid making claims about visual content the tool
            cannot inspect.
          </p>
        </div>
        <AdSlot variant="sidebar" className="hidden lg:block" />
      </section>

      <section className="border-y border-slate-200 bg-white/58 py-14 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="label">How scoring works</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Smart Image Publish Check explained
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              The PublishReady Score weighs dimensions and aspect ratio, file size, recommended
              format and context-specific quality signals. It is designed to guide fast decisions,
              not to replace official platform requirements.
            </p>
          </div>
          <div className="grid gap-3">
            {["40% dimensions and aspect ratio", "25% file size", "20% recommended format", "15% context and quality heuristics"].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-14">
        <div className="max-w-3xl">
          <p className="label">Popular presets</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Popular image presets
          </h2>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PRESET_ORDER.slice(0, 12).map((presetId) => {
            const preset = PUBLISH_RULES[presetId];
            return (
              <div key={preset.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-sm font-bold text-slate-950 dark:text-white">{preset.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {preset.recommendedDimensions}; recommended ratio {preset.aspectLabel}.
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/58 py-14 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="label">Privacy-first image analysis</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Your image stays in your browser
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              ImageReady Tools does not upload your image to a server for analysis. Browser APIs read
              the file, calculate dimensions and create optional exported versions locally. Preferences
              such as theme, preset and consent may use localStorage; images are not stored.
            </p>
          </div>
          <div>
            <p className="label">Who is this for?</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {audiences.map((audience) => (
                <div key={audience} className="rounded-lg border border-slate-200 bg-white p-3 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-14">
        <div className="max-w-3xl">
          <p className="label">FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Common questions
          </h2>
        </div>
        <div className="mt-8">
          <FAQ items={homeFaq} />
        </div>
        <div className="mt-10 rounded-lg border border-slate-200 bg-white/82 p-5 text-sm leading-7 text-slate-600 dark:border-slate-800 dark:bg-slate-900/82 dark:text-slate-400">
          <strong className="text-slate-950 dark:text-white">Accuracy disclaimer:</strong> Results are
          estimates based on common platform patterns and technical checks available in the browser.
          Platform requirements can change, and this tool does not guarantee SEO ranking, approval or
          final rendering on any third-party service.
        </div>
        <AdSlot variant="inline" className="mt-10" />
      </section>
    </>
  );
}
