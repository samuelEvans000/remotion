// Renders one PNG thumbnail per composition into out/stills (frame ~60% through).
// Usage: npm run render:stills            (all)
//        npm run render:stills -- bar-chart glitch-text   (only these ids)
import path from 'node:path';
import { bundle } from '@remotion/bundler';
import { getCompositions, renderStill } from '@remotion/renderer';

const only = process.argv.slice(2);
const serveUrl = await bundle({ entryPoint: path.resolve('preview/index.ts') });
const comps = (await getCompositions(serveUrl)).filter((c) => !only.length || only.includes(c.id));
const failed = [];
for (const comp of comps) {
  const frame = Math.floor(comp.durationInFrames * 0.6);
  const output = path.resolve('out/stills', `${comp.id}.png`);
  try {
    await renderStill({ serveUrl, composition: comp, frame, output, scale: 0.5, imageFormat: 'png' });
    console.log('ok  ', comp.id);
  } catch (err) {
    failed.push(comp.id);
    console.log('FAIL', comp.id, String(err).split('\n')[0]);
  }
}
console.log(`\n${comps.length - failed.length}/${comps.length} rendered to out/stills`, failed.length ? `failed: ${failed}` : '');
