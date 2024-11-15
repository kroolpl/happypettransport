import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['@fontsource/poppins', '@fontsource/open-sans']
  }
}); 