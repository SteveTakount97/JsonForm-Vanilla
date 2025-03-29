import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Configuration pour le déploiement sur GitHub Pages
  base: '/', 

  plugins: [react()],

  build: {
    outDir: 'dist', 
  },
});
