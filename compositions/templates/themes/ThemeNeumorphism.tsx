// Ported from github.com/lifeprompt-team/remotion-scenes (MIT, © 2026 lifeprompt-team).
/**
 * ThemeNeumorphism - ニューモーフィズム - ソフトな凹凸
 */

import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { C, font, mergeTexts } from "./common";

/** Default on-screen text slots, in reading order. */
export const ThemeNeumorphismTexts = [
  "NEUMORPHISM",
  "Soft UI",
  "Press me",
  "Type something..."
] as const;

export const ThemeNeumorphism = ({ startDelay = 0, texts }: {
  startDelay?: number;
  /** Replaces the on-screen text, slot by slot (see ThemeNeumorphismTexts). */
  texts?: readonly string[];
}) => {
  const t = mergeTexts(texts, ThemeNeumorphismTexts);
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardProgress = spring({
    frame: frame - startDelay - 10,
    fps,
    config: { damping: 20, stiffness: 100 },
  });

  const bgColor = "#e0e5ec";

  return (
    <AbsoluteFill style={{ background: bgColor }}>
      {/* メインカード */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${cardProgress})`,
          width: 400,
          background: bgColor,
          borderRadius: 30,
          padding: 40,
          boxShadow: `
            20px 20px 60px #bec3c9,
            -20px -20px 60px #ffffff
          `,
          opacity: cardProgress,
        }}
      >
        <div
          style={{
            fontFamily: font,
            fontSize: 14,
            color: "#7a8594",
            letterSpacing: 3,
            marginBottom: 20,
          }}
        >
          {t[0]}
        </div>
        <div
          style={{
            fontFamily: font,
            fontSize: 36,
            fontWeight: 600,
            color: "#3d4a5c",
            marginBottom: 30,
          }}
        >
          {t[1]}
        </div>

        {/* ボタン（凸） */}
        <button
          type="button"
          style={{
            fontFamily: font,
            fontSize: 15,
            fontWeight: 500,
            color: C.accent,
            background: bgColor,
            border: "none",
            borderRadius: 15,
            padding: "15px 35px",
            cursor: "pointer",
            boxShadow: `
              8px 8px 16px #bec3c9,
              -8px -8px 16px #ffffff
            `,
          }}
        >
          {t[2]}
        </button>

        {/* インプット（凹） */}
        <div
          style={{
            marginTop: 25,
            background: bgColor,
            borderRadius: 15,
            padding: "15px 20px",
            boxShadow: `
              inset 8px 8px 16px #bec3c9,
              inset -8px -8px 16px #ffffff
            `,
          }}
        >
          <span style={{ fontFamily: font, fontSize: 14, color: "#9aa5b4" }}>
            {t[3]}
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
