import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const galleryDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: galleryDir,
  esbuild: { jsx: 'automatic' },
  // Shared with Remotion Studio (e.g. phone-demo.mp4 for phone_scene).
  publicDir: fileURLToPath(new URL('../../public', import.meta.url)),
  server: { port: 5173, open: true, fs: { allow: ['../..'] } },
  // Output to <project>/dist so hosts like Vercel find it at the usual place.
  build: {
    outDir: fileURLToPath(new URL('../../dist', import.meta.url)),
    emptyOutDir: true,
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      // Templates carry Next.js 'use client' directives; harmless in a plain SPA.
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
        warn(warning);
      },
    },
  },
});
