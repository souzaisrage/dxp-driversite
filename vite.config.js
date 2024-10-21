import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // This ensures it's correctly served from the root in local development
  build: {
    outDir: 'dist',
  },
});
