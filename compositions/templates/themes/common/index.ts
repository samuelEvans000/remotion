// Ported from github.com/lifeprompt-team/remotion-scenes (MIT, © 2026 lifeprompt-team).
export { C } from "./colors";
export { EASE } from "./easing";
export { lerp } from "./utils";
export { font } from "./fonts";

/** Backend `texts` override the defaults slot by slot; blank/missing slots keep the default. */
export const mergeTexts = (
  texts: readonly unknown[] | undefined,
  defaults: readonly string[],
): string[] =>
  defaults.map((fallback, i) => {
    const v = texts?.[i];
    return typeof v === "string" && v.trim() ? v : fallback;
  });
