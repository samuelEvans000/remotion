// Ported from github.com/lifeprompt-team/remotion-scenes (MIT, © 2026 lifeprompt-team).
/**
 * ThemeBrutalistWeb - Brutalist Web - ブルータリストウェブ
 */

import { AbsoluteFill, useCurrentFrame } from "remotion";
import { C, lerp, font, mergeTexts } from "./common";

/** Default on-screen text slots, in reading order. */
export const ThemeBrutalistWebTexts = [
  "RAW",
  "BRUTALIST",
  "Raw, unpolished, and intentionally rough. Breaking conventional web design rules.",
  "NO DECORATION • ONLY FUNCTION • RAW CODE • ANTI-DESIGN •",
  "[",
  "]",
  "VISITORS: "
] as const;

export const ThemeBrutalistWeb = ({ startDelay = 0, texts }: {
  startDelay?: number;
  /** Replaces the on-screen text, slot by slot (see ThemeBrutalistWebTexts). */
  texts?: readonly string[];
}) => {
  const t = mergeTexts(texts, ThemeBrutalistWebTexts);
  const frame = useCurrentFrame();

  const textOpacity = lerp(frame, [startDelay + 10, startDelay + 25], [0, 1]);

  return (
    <AbsoluteFill style={{ background: C.white }}>
      {/* 巨大テキスト背景 */}
      <div
        style={{
          position: "absolute",
          left: -50,
          top: -50,
          fontFamily: font,
          fontSize: 400,
          fontWeight: 900,
          color: "#f0f0f0",
          lineHeight: 0.8,
          opacity: lerp(frame, [startDelay, startDelay + 20], [0, 1]),
        }}
      >
        {t[0]}
      </div>

      {/* 境界線ボックス */}
      <div
        style={{
          position: "absolute",
          left: 80,
          top: 150,
          width: 400,
          padding: 30,
          border: `4px solid ${C.black}`,
          opacity: textOpacity,
        }}
      >
        <div
          style={{
            fontFamily: font,
            fontSize: 48,
            fontWeight: 900,
            color: C.black,
            textTransform: "uppercase",
          }}
        >
          {t[1]}
        </div>
        <div
          style={{
            fontFamily: font,
            fontSize: 16,
            color: C.black,
            marginTop: 15,
            lineHeight: 1.5,
          }}
        >
          {t[2]}
        </div>
      </div>

      {/* マーキー風テキスト */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 150,
          width: "100%",
          overflow: "hidden",
          borderTop: `2px solid ${C.black}`,
          borderBottom: `2px solid ${C.black}`,
          padding: "10px 0",
          opacity: textOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 50,
            transform: `translateX(-${(frame - startDelay) * 3}px)`,
            whiteSpace: "nowrap",
          }}
        >
          {["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"].map((id) => (
            <div
              key={`marquee-brutalist-${id}`}
              style={{
                fontFamily: font,
                fontSize: 24,
                fontWeight: 900,
                color: C.black,
              }}
            >
              {t[3]}
            </div>
          ))}
        </div>
      </div>

      {/* リンクスタイル */}
      <div
        style={{
          position: "absolute",
          right: 80,
          top: 200,
          opacity: textOpacity,
        }}
      >
        {["ABOUT", "WORK", "CONTACT"].map((link, i) => (
          <div
            key={`brutalist-link-${link}`}
            style={{
              fontFamily: font,
              fontSize: 20,
              fontWeight: 700,
              color: "#0000ff",
              textDecoration: "underline",
              marginBottom: 15,
              cursor: "pointer",
              transform: `translateX(${i * 20}px)`,
            }}
          >
            {t[4]}{link}{t[5]}
          </div>
        ))}
      </div>

      {/* カウンター */}
      <div
        style={{
          position: "absolute",
          right: 80,
          bottom: 80,
          fontFamily: "monospace",
          fontSize: 14,
          color: C.gray[600],
          opacity: textOpacity,
        }}
      >
        {t[6]}{Math.floor(12847 + (frame - startDelay) * 3)}
      </div>
    </AbsoluteFill>
  );
};
