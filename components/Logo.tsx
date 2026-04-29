import Link from "next/link";

type LogoProps = {
  variant?: "horizontal" | "icon";
  className?: string;
  href?: string;
};

export default function Logo({ variant = "horizontal", className = "", href = "/" }: LogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 shadow-sm"
        aria-hidden={variant === "horizontal"}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role={variant === "icon" ? "img" : undefined}
          aria-label={variant === "icon" ? "PublishPixel" : undefined}
        >
          <rect x="10" y="13" width="38" height="34" rx="8" stroke="white" strokeWidth="5" />
          <path d="M17 40l8-9 6 6 5-6 7 9H17z" fill="white" opacity="0.9" />
          <circle cx="24" cy="25" r="4" fill="white" opacity="0.95" />
          <path
            d="M39 25l5 5 11-13"
            stroke="#10B981"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {variant === "horizontal" ? (
        <span className="flex flex-col leading-none">
          <span className="text-base font-extrabold text-slate-950 dark:text-white">
            PublishPixel
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Tools</span>
        </span>
      ) : null}
    </span>
  );

  return href ? (
    <Link href={href} className="focus-ring rounded-lg" aria-label="PublishPixel home">
      {content}
    </Link>
  ) : (
    content
  );
}
