"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { withLocalePath } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { language } = useLanguage();
  const [path, hash = ""] = href.split("#");
  const localizedPath = path.startsWith("/") ? withLocalePath(path || "/", language) : path;
  const localizedHref = hash ? `${localizedPath}#${hash}` : localizedPath;

  return <Link href={localizedHref} {...props} />;
}
