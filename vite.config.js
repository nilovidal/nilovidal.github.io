import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // User site: https://nilovidal.github.io/ (repo nilovidal.github.io)
  base: '/',
})
