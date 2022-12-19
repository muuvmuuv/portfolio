import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

import { version } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          currentYear: new Date().getFullYear(),
        },
      },
    }),
  ],
  resolve: {
    alias: [
      {
        // NOTE: https://github.com/vitejs/vite/issues/5764
        find: /^~(.*)$/,
        replacement: '$1',
      },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          v: ['vue'],
          t: ['three'],
          f: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/vue-fontawesome',
          ],
        },
      },
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
})
