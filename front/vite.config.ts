import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { version } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // 9991 port
    port: 9991,
    host: '0.0.0.0'
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  define: {
    'import.meta.env.VERSION': JSON.stringify(version)
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
