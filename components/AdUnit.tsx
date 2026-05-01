"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdUnitProps = {
  slot: string;
  className?: string;
};

export function AdUnit({ slot, className = "" }: AdUnitProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!client) return;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Prevent ad script errors from breaking the page.
    }
  }, [client]);

  if (!client) return null;

  return (
    <aside
      className={`my-12 rounded-lg border border-slate-200 bg-slate-50 p-4 text-center dark:border-slate-800 dark:bg-slate-900/70 ${className}`}
      aria-label="Advertisement"
    >
      <p className="mb-3 text-xs uppercase tracking-wide text-slate-400">Advertisement</p>
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
