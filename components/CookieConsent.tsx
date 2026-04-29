"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useEffect, useState } from "react";

type ConsentPrefs = {
  necessary: true;
  analytics: boolean;
  ads: boolean;
  savedAt: string;
};

const STORAGE_KEY = "irt-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
      return;
    }
    try {
      const parsed = JSON.parse(stored) as ConsentPrefs;
      setAnalytics(Boolean(parsed.analytics));
      setAds(Boolean(parsed.ads));
    } catch {
      setVisible(true);
    }
  }, []);

  function saveConsent(next: { analytics: boolean; ads: boolean }) {
    const prefs: ConsentPrefs = {
      necessary: true,
      analytics: next.analytics,
      ads: next.ads,
      savedAt: new Date().toISOString()
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setAnalytics(next.analytics);
    setAds(next.ads);
    setVisible(false);
    setManage(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4" role="dialog" aria-modal="false" aria-labelledby="cookie-title">
      <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-800 dark:bg-slate-950">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="cookie-title" className="text-sm font-bold text-slate-950 dark:text-white">
              Cookie preferences
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              PublishPixel uses essential local storage for preferences. Optional analytics or
              advertising scripts should only load after consent if you add them later.
            </p>
          </div>
          <button
            type="button"
            className="focus-ring rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => saveConsent({ analytics: false, ads: false })}
            aria-label="Reject non-essential cookies and close"
          >
            <X size={18} />
          </button>
        </div>

        {manage ? (
          <div className="mt-4 grid gap-3 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
            <label className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Essential storage
              <input type="checkbox" checked disabled className="h-4 w-4" />
            </label>
            <label className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Analytics
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
              />
            </label>
            <label className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Advertising
              <input
                type="checkbox"
                checked={ads}
                onChange={(event) => setAds(event.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
              />
            </label>
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" className="button-primary" onClick={() => saveConsent({ analytics: true, ads: true })}>
            Accept all
          </button>
          <button type="button" className="button-secondary" onClick={() => saveConsent({ analytics: false, ads: false })}>
            Reject non-essential
          </button>
          <button type="button" className="button-secondary" onClick={() => (manage ? saveConsent({ analytics, ads }) : setManage(true))}>
            <SlidersHorizontal size={16} aria-hidden="true" />
            {manage ? "Save preferences" : "Manage preferences"}
          </button>
        </div>
      </div>
    </div>
  );
}
