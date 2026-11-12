import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api': {
        target: 'https://veloop-backend.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
