import { dirname, resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import nightwatchPlugin from 'vite-plugin-nightwatch'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), nightwatchPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: true, // Ensures CSS is extracted into separate files
    lib: {
      entry: resolve(__dirname, 'src/lib/main.js'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'my-lib',
    },
    rollupOptions: {
      // into your library
      external: ['vue'],
      output: {
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
