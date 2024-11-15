import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import font from 'astro-font';

export default defineConfig({
  integrations: [
    tailwind(),
    font({
      fonts: [
        {
          name: 'Poppins',
          display: 'swap',
          fallback: 'sans-serif',
          src: [
            {
              weight: '400',
              style: 'normal',
              path: './node_modules/@fontsource/poppins/files/poppins-latin-400-normal.woff2'
            },
            {
              weight: '600',
              style: 'normal',
              path: './node_modules/@fontsource/poppins/files/poppins-latin-600-normal.woff2'
            },
            {
              weight: '700',
              style: 'normal',
              path: './node_modules/@fontsource/poppins/files/poppins-latin-700-normal.woff2'
            }
          ]
        },
        {
          name: 'Open Sans',
          display: 'swap',
          fallback: 'sans-serif',
          src: [
            {
              weight: '400',
              style: 'normal',
              path: './node_modules/@fontsource/open-sans/files/open-sans-latin-400-normal.woff2'
            },
            {
              weight: '600',
              style: 'normal',
              path: './node_modules/@fontsource/open-sans/files/open-sans-latin-600-normal.woff2'
            }
          ]
        }
      ]
    }),
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