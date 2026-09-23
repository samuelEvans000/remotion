import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
  esbuild: { jsx: 'automatic' },
  server: { port: 5173, open: true, fs: { allow: ['../..'] } },
});
