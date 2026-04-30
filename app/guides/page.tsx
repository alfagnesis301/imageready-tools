import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Image Publishing Guides",
  description:
    "Original guides about image size, metadata, alt text, SEO, compression, formats, social media sizes and photo privacy.",
  path: "/guides"
});

export default function GuidesPage() {
  return (
    <section className="shell py-12">
      <div className="max-w-3xl">
        <p className="label">PublishPixel guides</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
          Image Publishing Guides
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          Practical, original guidance for preparing images before they go live. These guides
          support the checker with deeper context around performance, accessibility, privacy and SEO.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft focus-ring dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700"
          >
            <h2 className="text-base font-extrabold tracking-normal text-slate-950 dark:text-white">
              {guide.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {guide.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
