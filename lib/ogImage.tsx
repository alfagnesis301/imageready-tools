import { ImageResponse } from "next/og";
import { OG_SIZE, type OgVariant } from "./ogVariants";

/**
 * Dibuja el PNG de 1200x630 que sirve `/og/<slug>`. El catálogo de variantes y
 * las URLs viven en `lib/ogVariants.ts`, que no importa `next/og`.
 */
export function createOgImage({ eyebrow, title, subtitle }: OgVariant) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#020617",
          backgroundImage:
            "radial-gradient(circle at 82% 12%, rgba(37, 99, 235, 0.42) 0%, rgba(2, 6, 23, 0) 55%)",
          padding: "72px 80px",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              backgroundColor: "#2563EB"
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "34px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.5px"
            }}
          >
            PublishPixel
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#60A5FA"
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              color: "#FFFFFF"
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "24px",
              fontSize: "28px",
              lineHeight: 1.35,
              color: "#94A3B8"
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "26px",
            color: "#64748B"
          }}
        >
          <div style={{ display: "flex" }}>publishpixel.net</div>
          <div style={{ display: "flex", color: "#94A3B8" }}>
            Free · No upload · Runs in your browser
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
