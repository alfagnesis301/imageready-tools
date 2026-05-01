"use client";

import { useMemo, useState } from "react";

function scoreAltText(value: string) {
  const text = value.trim();
  const issues: string[] = [];
  let score = 100;

  if (!text) {
    return {
      score: null,
      issues,
      status: "empty" as const
    };
  }

  if (text.length < 20) {
    score -= 30;
    issues.push("Alt text may be too short to describe the useful image context.");
  }

  if (text.length > 160) {
    score -= 20;
    issues.push("Alt text may be too long for many practical contexts.");
  }

  if (/^(image of|picture of|photo of)/i.test(text)) {
    score -= 10;
    issues.push("Avoid starting with generic phrases when the image context is already obvious.");
  }

  if (/(seo|keyword|best|cheap|free).*(seo|keyword|best|cheap|free)/i.test(text)) {
    score -= 15;
    issues.push("Avoid keyword-stuffed alt text. Write for the user first.");
  }

  if (!/[a-zA-Z]/.test(text)) {
    score -= 20;
    issues.push("Alt text should contain a meaningful written description.");
  }

  return {
    score: Math.max(0, score),
    issues,
    status: "scored" as const
  };
}

export default function AltTextDraftChecker() {
  const [altText, setAltText] = useState("");
  const result = useMemo(() => scoreAltText(altText), [altText]);

  return (
    <section className="panel mt-10 p-5">
      <label className="grid gap-2">
        <span className="label">Alt text draft</span>
        <textarea
          value={altText}
          onChange={(event) => setAltText(event.target.value)}
          rows={5}
          className="input"
          placeholder="Example: Black travel backpack on a wooden desk beside a laptop."
        />
      </label>
      <div className="mt-5 rounded-lg bg-slate-50 p-5 dark:bg-slate-950">
        {result.status === "empty" ? (
          <>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Start by writing an alt text draft.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              The checker will review length, generic wording and common structure issues after
              you type.
            </p>
          </>
        ) : (
          <>
            <p className="text-sm text-slate-500 dark:text-slate-400">Structure score</p>
            <p className="mt-1 text-4xl font-black text-slate-950 dark:text-white">
              {result.score}/100
            </p>
            {result.issues.length ? (
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {result.issues.map((issue) => (
                  <li key={issue}>- {issue}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                The draft has a practical length and avoids common generic wording. Check that it
                accurately describes the visible content and page context.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
