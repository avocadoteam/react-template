import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  resolve: {
    alias: {
      fonts: '/public/fonts',
      images: '/public/images',
      src: '/src',
      '@core': '/src/core',
      '@ui': '/src/ui',
    },
  },
  plugins: [react(), vanillaExtractPlugin(), VitePWA()],
  build: {
    target: 'es2015',
  },
});
