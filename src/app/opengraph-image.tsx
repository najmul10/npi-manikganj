import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "National Polytechnic Institute, Manikganj (NPI) — Diploma in Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a5d4a 0%, #0d3d30 100%)",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Decorative grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gold accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #d4a017, #e6b422)",
          }}
        />
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(212,160,23,0.15)",
            border: "1px solid rgba(212,160,23,0.4)",
            borderRadius: "999px",
            padding: "10px 28px",
            marginBottom: "32px",
          }}
        >
          <span style={{ fontSize: 20, color: "#e6b422", fontWeight: 700, letterSpacing: "0.12em" }}>
            ADMISSION 2024-25 OPEN
          </span>
        </div>
        {/* Main title */}
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            fontFamily: "Georgia, serif",
          }}
        >
          National Polytechnic Institute
        </div>
        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            fontSize: 44,
            fontWeight: 600,
            color: "#e6b422",
            marginTop: "12px",
            fontFamily: "Georgia, serif",
          }}
        >
          Manikganj (NPI)
        </div>
        {/* Description */}
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "rgba(255,255,255,0.85)",
            marginTop: "28px",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Diploma in Engineering across 8 modern departments with scholarships, modern labs & job placement support.
        </div>
        {/* Bottom badges */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "48px",
            alignItems: "center",
          }}
        >
          {["BTEB Approved", "Est. 2001", "8 Departments"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "rgba(255,255,255,0.9)",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              <span style={{ color: "#e6b422", fontSize: 24 }}>•</span>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
