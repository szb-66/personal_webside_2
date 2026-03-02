import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
  },

  server: {
    open: true,
/*     proxy: {
      '/szb-api': {
        target: 'http://szb.design:3000/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/szb-api/, ''),
      },
    }, */
  },
})
