import Link from "next/link";

type LogoProps = {
  variant?: "horizontal" | "icon";
  className?: string;
  href?: string;
};

export default function Logo({ variant = "horizontal", className = "", href = "/" }: LogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center"
        aria-hidden={variant === "horizontal"}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role={variant === "icon" ? "img" : undefined}
          aria-label={variant === "icon" ? "PublishPixel" : undefined}
        >
          <defs>
            <linearGradient id="publishpixelMark" x1="16" y1="10" x2="82" y2="88" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="0.55" stopColor="#4F46E5" />
              <stop offset="1" stopColor="#A21CAF" />
            </linearGradient>
            <linearGradient id="publishpixelPhoto" x1="38" y1="32" x2="72" y2="62" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#A21CAF" />
            </linearGradient>
          </defs>
          <rect x="8" y="18" width="7" height="7" rx="1" fill="#4F46E5" />
          <rect x="18" y="11" width="8" height="8" rx="1" fill="#6366F1" />
          <rect x="19" y="24" width="11" height="11" rx="1.5" fill="#2563EB" />
          <rect x="13" y="39" width="9" height="9" rx="1.5" fill="#0EA5E9" />
          <rect x="21" y="52" width="10" height="10" rx="1.5" fill="#2563EB" />
          <rect x="17" y="69" width="7" height="7" rx="1.5" fill="#22D3EE" />
          <path
            d="M34 13h28c18 0 31 12 31 30s-13 30-31 30H50v9c0 6.1-4.9 11-11 11H28c-6.1 0-11-4.9-11-11V30c0-9.4 7.6-17 17-17z"
            fill="url(#publishpixelMark)"
          />
          <path
            d="M38 31h24c8.3 0 15 6.7 15 15s-6.7 15-15 15H38c-3.3 0-6-2.7-6-6V37c0-3.3 2.7-6 6-6z"
            fill="white"
          />
          <circle cx="53" cy="42" r="4.2" fill="#7C3AED" />
          <path d="M36 57l10-13 9 10 7-8 11 11H36z" fill="url(#publishpixelPhoto)" />
          <path
            d="M31 84h20c2.2 0 4-1.8 4-4v-6"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43 81V63m0 0l-9 9m9-9l9 9"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {variant === "horizontal" ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="text-xl font-black text-slate-950 dark:text-white">
            Publish<span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Pixel</span>
          </span>
          <span className="mt-1 hidden text-[10px] font-bold uppercase text-slate-500 sm:block dark:text-slate-400">
            Make every image ready to publish
          </span>
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
