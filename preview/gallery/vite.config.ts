import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const galleryDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: galleryDir,
  esbuild: { jsx: 'automatic' },
  server: { port: 5173, open: true, fs: { allow: ['../..'] } },
  // Output to <project>/dist so hosts like Vercel find it at the usual place.
  build: {
    outDir: fileURLToPath(new URL('../../dist', import.meta.url)),
    emptyOutDir: true,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      // Templates carry Next.js 'use client' directives; harmless in a plain SPA.
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
        warn(warning);
      },
    },
  },
});
