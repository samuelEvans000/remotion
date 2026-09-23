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
