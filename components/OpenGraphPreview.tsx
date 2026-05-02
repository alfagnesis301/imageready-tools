"use client";

import { useLanguage } from "./LanguageProvider";

type OpenGraphPreviewProps = {
  imageUrl?: string;
  title?: string;
  description?: string;
  domain?: string;
};

export default function OpenGraphPreview({
  imageUrl,
  title,
  description,
  domain = "publishpixel.net"
}: OpenGraphPreviewProps) {
  const { t } = useLanguage();
  const previewTitle = title || t("tool.ogTitle");
  const previewDescription = description || t("tool.ogDescription");

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-bold text-slate-950 dark:text-white">{t("og.title")}</h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {t("og.description")}
          </p>
        </div>
        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          1.91:1
        </span>
      </div>
      <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
        <div className="aspect-[1.91/1] bg-slate-100 dark:bg-slate-950">
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageUrl} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-slate-400">
              {t("og.empty")}
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {domain}
          </p>
          <h4 className="mt-1 line-clamp-2 text-sm font-bold text-slate-950 dark:text-white">
            {previewTitle}
          </h4>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
            {previewDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
