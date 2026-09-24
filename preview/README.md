# Previewing the animation templates

```bash
npm install            # once
npm run studio         # Remotion Studio: one composition per animation_type, grouped in folders
npm run gallery        # Browser grid that plays every animation at once (http://localhost:5173)
npm run render:stills  # PNG thumbnail of every animation -> out/stills (add ids to render only some)
```

- Sample data for every `animation_type` lives in `preview/sampleData.ts`. Edit props there,
  or edit them live in Studio's right-hand **Props** panel.
- `backdrop` (`photo` | `dark` | `none`) controls what sits behind the overlay, since many
  templates (transitions, lower thirds, callouts) are transparent and meant to sit over video.
- Images come from picsum.photos, so the image-based templates need an internet connection.

## Ported animations (93)

| Source | animation_type | Props |
| --- | --- | --- |
| [locomotion-templates](https://github.com/Thedurancode/locomotion-templates) → `compositions/templates/locomotion/` | 59 types named after the folder, e.g. `metric_card`, `pricing_comparison`. `countdown-timer` and `quote-card` were skipped because `countdown_timer` and `quote_card` already exist. | Passed straight through to the template, e.g. `{ label, value, change, date, bgColor, variant }`. Defaults are in `preview/externalSamples.ts`. |
| [remotion-scenes ThemeAnimations](https://github.com/lifeprompt-team/remotion-scenes/tree/main/src/scenes/ThemeAnimations) → `compositions/templates/themes/` | 33 `theme_*` types, e.g. `theme_neon`, `theme_3d_glass_three_js` | `{ texts: string[] }` replaces the on-screen text slot by slot; see `THEME_DEFAULT_TEXTS`. |
| [remotion-video](https://github.com/duongcokhanh/remotion-video) → `compositions/templates/phone/` | `phone_scene` | `{ video?, phoneColor?, baseScale?, bgColor? }`. The default video is `public/phone-demo.mp4`; a remote `video` must allow CORS. |

`theme_3d_glass_three_js` downloads an environment map and fonts, so it needs an internet connection.
