import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://ricdip.github.io',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), preact(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap()]
});