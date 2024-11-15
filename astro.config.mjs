import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
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