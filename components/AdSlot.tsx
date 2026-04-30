"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSlotProps = {
  className?: string;
  variant?: "banner" | "sidebar" | "inline";
  slot?: string;
  showPlaceholder?: boolean;
};

export default function AdSlot({
  className = "",
  variant = "banner",
  slot,
  showPlaceholder = false
}: AdSlotProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const sizeClass =
    variant === "sidebar"
      ? "min-h-[280px]"
      : variant === "inline"
        ? "min-h-[160px]"
        : "min-h-[110px]";

  useEffect(() => {
    if (!client || !slot) return;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ad script errors should never break the publishing tool.
    }
  }, [client, slot]);

  if (!client || !slot) {
    if (!showPlaceholder) return null;

    return (
      <aside
        className={`rounded-lg border border-dashed border-slate-300 bg-white/60 p-3 dark:border-slate-700 dark:bg-slate-900/50 ${sizeClass} ${className}`}
        aria-label="Advertisement"
      >
        <p className="text-center text-xs font-medium text-slate-500 dark:text-slate-400">
          Advertisement
        </p>
        <div className="mt-3 h-px w-full bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
        {/* Insert Google AdSense code here only after account approval. */}
      </aside>
    );
  }

  return (
    <aside
      className={`my-10 rounded-lg border border-slate-200 bg-slate-50 p-3 text-center dark:border-slate-800 dark:bg-slate-900/70 ${sizeClass} ${className}`}
      aria-label="Advertisement"
    >
      <p className="text-center text-xs font-medium text-slate-500 dark:text-slate-400">
        Advertisement
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
