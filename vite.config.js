import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, './src/styles')],
        additionalData: `
          // auto imports for all scss files.
          @import 'vendors';
          @import 'abstracts';
        `,
        silenceDeprecations: ['legacy-js-api'],
        sourceMap: true,
      },
    },
  },
})
