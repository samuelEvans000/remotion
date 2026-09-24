// Ported from github.com/lifeprompt-team/remotion-scenes (MIT, © 2026 lifeprompt-team).
/**
 * ThemeSwiss - Swiss/International - スイスデザイン
 */

import { AbsoluteFill, useCurrentFrame } from "remotion";
import { C, EASE, lerp, font, mergeTexts } from "./common";

/** Default on-screen text slots, in reading order. */
export const ThemeSwissTexts = [
  "GRID",
  "SYSTEM",
  "HELVETICA",
  "NEUE",
  "TYPOGRAPHY",
  "21",
  "INTERNATIONAL TYPOGRAPHIC STYLE — SINCE 1950"
] as const;

export const ThemeSwiss = ({ startDelay = 0, texts }: {
  startDelay?: number;
  /** Replaces the on-screen text, slot by slot (see ThemeSwissTexts). */
  texts?: readonly string[];
}) => {
  const t = mergeTexts(texts, ThemeSwissTexts);
  const frame = useCurrentFrame();

  const textProgress = lerp(frame, [startDelay + 10, startDelay + 40], [0, 1], EASE.out);
  const gridProgress = lerp(frame, [startDelay, startDelay + 30], [0, 1]);

  return (
    <AbsoluteFill style={{ background: C.white }}>
      {/* グリッドライン */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(#e0e0e0 1px, transparent 1px),
            linear-gradient(90deg, #e0e0e0 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          opacity: gridProgress * 0.5,
        }}
      />

      {/* 赤いアクセントブロック */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: lerp(frame, [startDelay, startDelay + 25], [0, 320]),
          height: 160,
          background: "#ff0000",
        }}
      />

      {/* メインテキスト */}
      <div
        style={{
          position: "absolute",
          left: 80,
          top: 200,
          opacity: textProgress,
        }}
      >
        <div
          style={{
            fontFamily: font,
            fontSize: 120,
            fontWeight: 800,
            color: C.gray[900],
            lineHeight: 0.9,
            letterSpacing: -5,
          }}
        >
          {t[0]}
        </div>
        <div
          style={{
            fontFamily: font,
            fontSize: 120,
            fontWeight: 200,
            color: C.gray[900],
            lineHeight: 0.9,
            letterSpacing: -5,
          }}
        >
          {t[1]}
        </div>
      </div>

      {/* サイドテキスト */}
      <div
        style={{
          position: "absolute",
          right: 80,
          top: 200,
          textAlign: "right",
          opacity: textProgress,
        }}
      >
        <div
          style={{
            fontFamily: font,
            fontSize: 14,
            color: C.gray[600],
            lineHeight: 2,
          }}
        >
          {t[2]}
          <br />
          {t[3]}
          <br />
          {t[4]}
        </div>
      </div>

      {/* 番号 */}
      <div
        style={{
          position: "absolute",
          right: 80,
          bottom: 80,
          fontFamily: font,
          fontSize: 200,
          fontWeight: 100,
          color: "#f0f0f0",
        }}
      >
        {t[5]}
      </div>

      {/* 下部テキスト */}
      <div
        style={{
          position: "absolute",
          left: 80,
          bottom: 80,
          fontFamily: font,
          fontSize: 12,
          color: C.gray[400],
          letterSpacing: 2,
          opacity: textProgress,
        }}
      >
        {t[6]}
      </div>
    </AbsoluteFill>
  );
};
