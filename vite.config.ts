import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      src: '/src',
      '@core': '/src/core',
      '@ui': '/src/ui',
    },
  },
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    target: 'es2015',
  },
});
