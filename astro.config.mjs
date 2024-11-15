import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [
    tailwind(),
    compress({
      CSS: true,
      HTML: true,
      Image: false,
      JavaScript: true,
      SVG: true,
      Logger: 1
    })
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  viewTransitions: {
    defaultAnimation: {
      name: 'fade',
      duration: '0.2s',
      easing: 'ease-out',
      fillMode: 'both'
    }
  }
});