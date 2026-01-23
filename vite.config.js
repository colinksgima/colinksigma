import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: '/colink-sigma/', // Biarkan ini dikomentari jika deploy di root domain

  // --- TAMBAHAN BARU DI SINI ---
  build: {
    rollupOptions: {
      output: {
        // [hash] adalah kode acak yang berubah setiap kali Anda build
        // Contoh hasil: assets/index.fw32a.js
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    }
  }
})