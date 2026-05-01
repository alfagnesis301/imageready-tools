import { scoreFilename } from "@/lib/filenameSeo";

type FilenameSeoCheckProps = {
  filename: string;
};

export default function FilenameSeoCheck({ filename }: FilenameSeoCheckProps) {
  const result = scoreFilename(filename);
  const status =
    result.score >= 85 ? "Strong" : result.score >= 70 ? "Usable" : "Needs cleanup";
  const colorClass =
    result.score >= 85
      ? "border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900/70 dark:bg-emerald-950/35 dark:text-emerald-100"
      : result.score >= 70
        ? "border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900/70 dark:bg-amber-950/35 dark:text-amber-100"
        : "border-red-200 bg-red-50 text-red-950 dark:border-red-900/70 dark:bg-red-950/35 dark:text-red-100";

  return (
    <section className={`rounded-lg border p-4 ${colorClass}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-bold">Filename SEO check: {status}</h3>
          <p className="mt-1 break-all text-xs opacity-80">{filename}</p>
        </div>
        <span className="rounded-lg bg-white/70 px-2.5 py-1 text-xs font-black text-slate-950 dark:bg-slate-950/40 dark:text-white">
          {result.score}/100
        </span>
      </div>
      <p className="mt-3 text-sm leading-6">
        A descriptive image filename can make your publishing workflow clearer. Use natural
        words separated by hyphens, avoid generic camera names and keep the filename readable.
      </p>
      {result.issues.length ? (
        <ul className="mt-3 space-y-2 text-sm leading-6">
          {result.issues.map((issue) => (
            <li key={issue}>- {issue}</li>
          ))}
        </ul>
      ) : (
        <ul className="mt-3 space-y-2 text-sm leading-6">
          {result.goodPoints.slice(0, 2).map((point) => (
            <li key={point}>- {point}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
