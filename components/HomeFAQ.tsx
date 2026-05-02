"use client";

import FAQ from "./FAQ";
import { useLanguage } from "./LanguageProvider";

const faqKeys = [
  "upload",
  "score",
  "og",
  "compress",
  "resize",
  "exif",
  "formats",
  "youtube",
  "free",
  "verify"
];

export default function HomeFAQ() {
  const { t } = useLanguage();

  return (
    <FAQ
      items={faqKeys.map((key) => ({
        question: t(`home.faq.${key}.q`),
        answer: t(`home.faq.${key}.a`)
      }))}
    />
  );
}
