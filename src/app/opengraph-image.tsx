import { ImageResponse } from "next/og";

export const alt = "KMFootball – Szkółka Piłkarska w Warszawie";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#000000",
          backgroundImage:
            "radial-gradient(circle at 75% 30%, rgba(251,191,36,0.12) 0%, transparent 55%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 96, fontWeight: 800, letterSpacing: "-0.03em" }}>
          <span style={{ color: "#ffffff" }}>KM</span>
          <span style={{ color: "#fbbf24" }}>Football</span>
        </div>
        <div style={{ marginTop: 16, fontSize: 40, color: "#a1a1aa", fontWeight: 500 }}>
          Szkółka Piłkarska · Warszawa
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 26,
            color: "#71717a",
            display: "flex",
          }}
        >
          Trener Krzysztof Możdżonek
        </div>
      </div>
    ),
    { ...size }
  );
}
