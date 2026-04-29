type AdSlotProps = {
  className?: string;
  variant?: "banner" | "sidebar" | "inline";
};

export default function AdSlot({ className = "", variant = "banner" }: AdSlotProps) {
  const sizeClass =
    variant === "sidebar"
      ? "min-h-[280px]"
      : variant === "inline"
        ? "min-h-[160px]"
        : "min-h-[110px]";

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
