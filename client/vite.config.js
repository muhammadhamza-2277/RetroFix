import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";   // ⬅️ Add this line\

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,  // ✅ Correct
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        '@assets/AirSource/Airsource.avif'
      ],
    },
  },
})


