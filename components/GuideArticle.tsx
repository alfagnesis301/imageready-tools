import Link from "next/link";
import type { Guide } from "@/lib/guides";

export default function GuideArticle({ guide }: { guide: Guide }) {
  return (
    <article className="shell py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/guides"
          className="text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
        >
          Image publishing guides
        </Link>
        <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
          {guide.title}
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          {guide.intro}
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-9">
        {guide.sections.map((section) => (
          <section key={section.heading} className="rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/82">
            <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              {section.heading}
            </h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-blue-200 bg-blue-50 p-5 text-sm leading-7 text-blue-950 dark:border-blue-900/70 dark:bg-blue-950/35 dark:text-blue-100">
        <strong>Key takeaway:</strong> {guide.takeaway}
      </div>
    </article>
  );
}
