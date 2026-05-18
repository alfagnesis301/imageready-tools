import Link from "next/link";
import Breadcrumbs, { breadcrumbJsonLd } from "./Breadcrumbs";
import FAQ from "./FAQ";
import { GUIDE_ENHANCEMENTS } from "@/lib/guideEnhancements";
import type { Guide } from "@/lib/guides";
import { articleJsonLd, faqJsonLd } from "@/lib/seo";

export default function GuideArticle({ guide }: { guide: Guide }) {
  const detail = GUIDE_ENHANCEMENTS[guide.slug];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
    { name: guide.title, href: `/guides/${guide.slug}` }
  ];

  return (
    <article className="shell py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      {detail ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(detail.faqs)) }}
        />
      ) : null}
      {detail ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              articleJsonLd({
                title: guide.title,
                description: guide.description,
                path: `/guides/${guide.slug}`,
                dateModified: "2026-04-30",
                author: detail.author
              })
            )
          }}
        />
      ) : null}
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
          {guide.title}
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          {guide.intro}
        </p>
        {detail ? (
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900">
              Updated {detail.updatedAt}
            </span>
            <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900">
              {detail.author}
            </span>
          </div>
        ) : null}
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-9">
        {detail?.overview.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-7 text-slate-600 dark:text-slate-400">
            {paragraph}
          </p>
        ))}

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

        {detail ? (
          <>
            <section className="rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/82">
              <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
                {detail.tableTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {detail.tableIntro}
              </p>
              <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
                  <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
                    <tr>
                      {detail.table.columns.map((column) => (
                        <th key={column} scope="col" className="px-4 py-3">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {detail.table.rows.map((row) => (
                      <tr key={row.join("-")}>
                        {row.map((cell) => (
                          <td key={cell} className="px-4 py-4 text-slate-600 dark:text-slate-400">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/82">
              <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
                {detail.checklistTitle}
              </h2>
              <ol className="mt-5 space-y-4">
                {detail.checklist.map((item, index) => (
                  <li key={item.title} className="grid gap-2 border-t border-slate-200 pt-4 first:border-t-0 first:pt-0 dark:border-slate-800">
                    <h3 className="text-sm font-bold text-slate-950 dark:text-white">
                      {index + 1}. {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/82">
              <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
                {detail.mistakesTitle}
              </h2>
              <div className="mt-5 space-y-4">
                {detail.mistakes.map((item) => (
                  <div key={item.title} className="border-t border-slate-200 pt-4 first:border-t-0 first:pt-0 dark:border-slate-800">
                    <h3 className="text-sm font-bold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/82">
              <h2 className="text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
                How PublishPixel helps
              </h2>
              {detail.howPublishPixelHelps.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {paragraph}
                </p>
              ))}
            </section>

            {detail.disclaimer ? (
              <section className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950 dark:border-amber-900/70 dark:bg-amber-950/35 dark:text-amber-100">
                <strong>Important note:</strong> {detail.disclaimer}
              </section>
            ) : null}

            <section>
              <p className="label">Related workflow</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
                Check your image before publishing
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Use these related tools and guides to review the final file before it reaches a
                website, CMS, store, campaign page or social publishing workflow.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {detail.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft focus-ring dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700"
                  >
                    <h3 className="text-sm font-bold text-slate-950 dark:text-white">{link.label}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <p className="label">FAQ</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-normal text-slate-950 dark:text-white">
                Questions about this guide
              </h2>
              <div className="mt-5">
                <FAQ items={detail.faqs} />
              </div>
            </section>
          </>
        ) : null}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-blue-200 bg-blue-50 p-5 text-sm leading-7 text-blue-950 dark:border-blue-900/70 dark:bg-blue-950/35 dark:text-blue-100">
        <strong>Key takeaway:</strong> {guide.takeaway}
      </div>
      <div className="mx-auto mt-6 max-w-3xl">
        <Link href="/smart-image-publish-check" className="button-primary">
          Check an image
        </Link>
      </div>
    </article>
  );
}
