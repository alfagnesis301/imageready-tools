import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.href, SITE_URL).toString()
    }))
  };
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-sm font-semibold text-slate-500 dark:text-slate-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {isLast ? (
                <span className="text-slate-700 dark:text-slate-200" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="text-blue-700 hover:underline dark:text-blue-300">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
