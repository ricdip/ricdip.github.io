// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // User/org site served at the domain root — do NOT set `base`.
  site: 'https://ricdip.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
