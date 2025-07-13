import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Use '/' for custom domain, '/repository-name/' for GitHub Pages URL
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
