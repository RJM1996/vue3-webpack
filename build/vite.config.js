import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  root: './',
  base: './',
  server: {
    port: 5174,
  }
})
