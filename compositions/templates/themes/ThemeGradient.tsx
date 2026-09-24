// Ported from github.com/lifeprompt-team/remotion-scenes (MIT, © 2026 lifeprompt-team).
/**
 * ThemeGradient - グラデーション - カラフルなグラデ
 */

import { AbsoluteFill, useCurrentFrame } from "remotion";
import { C, EASE, lerp, font, mergeTexts } from "./common";

/** Default on-screen text slots, in reading order. */
export const ThemeGradientTexts = [
  "Gradient",
  "FLOW WITH COLORS"
] as const;

export const ThemeGradient = ({ startDelay = 0, texts }: {
  startDelay?: number;
  /** Replaces the on-screen text, slot by slot (see ThemeGradientTexts). */
  texts?: readonly string[];
}) => {
  const t = mergeTexts(texts, ThemeGradientTexts);
  const frame = useCurrentFrame();

  const gradientAngle = 135 + frame * 0.5;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${gradientAngle}deg, 
          #667eea 0%, 
          #764ba2 25%, 
          #f093fb 50%, 
          #f5576c 75%, 
          #feca57 100%
        )`,
      }}
    >
      {/* オーバーレイ */}
      <AbsoluteFill style={{ background: "rgba(0,0,0,0.2)" }} />

      {/* テキスト */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: font,
            fontSize: 120,
            fontWeight: 900,
            color: C.white,
            textShadow: "0 4px 30px rgba(0,0,0,0.3)",
            opacity: lerp(frame, [startDelay, startDelay + 25], [0, 1]),
            transform: `scale(${lerp(frame, [startDelay, startDelay + 25], [0.8, 1], EASE.out)})`,
          }}
        >
          {t[0]}
        </div>
        <div
          style={{
            fontFamily: font,
            fontSize: 20,
            color: "rgba(255,255,255,0.8)",
            letterSpacing: 5,
            marginTop: 20,
            opacity: lerp(frame, [startDelay + 15, startDelay + 35], [0, 1]),
          }}
        >
          {t[1]}
        </div>
      </div>
    </AbsoluteFill>
  );
};
