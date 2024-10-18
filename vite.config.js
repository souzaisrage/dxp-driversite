import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'repo-name' with your actual repository name
export default defineConfig({
  plugins: [react()],
  base: 'dxp-driversite', // Adjust this as needed
  build: {
    outDir: 'dist', // Ensure this is set to 'dist'
  },
});
