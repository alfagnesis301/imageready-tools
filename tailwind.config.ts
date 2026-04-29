import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          violet: "#7C3AED",
          green: "#10B981",
          amber: "#F59E0B",
          red: "#EF4444",
          ink: "#0F172A",
          dark: "#020617",
          surface: "#F8FAFC"
        }
      },
      boxShadow: {
        soft: "0 18px 45px -28px rgb(15 23 42 / 0.45)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        pulsebar: {
          "0%, 100%": { opacity: "0.65" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        "fade-up": "fade-up 520ms ease-out both",
        pulsebar: "pulsebar 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
