import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

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
        // BUG: https://github.com/vitejs/vite/issues/5764
        find: /^~(.*)$/,
        replacement: '$1',
      },
    ],
  },
})
