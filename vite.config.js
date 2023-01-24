import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from "path"
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'
const pathSrc = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {
        target: 'http://ceshi13.dishait.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  resolve:{
    alias:{
      '~':path.resolve(__dirname,'src')
    }
  },
  plugins: [
  vue(), 
  WindiCSS(),
  AutoImport({
    resolvers: [ElementPlusResolver(),
      IconsResolver({
        prefix: 'Icon',
      })],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
  }),
  Components({
    resolvers: [ElementPlusResolver(),
      IconsResolver({
        enabledCollections: ['ep'],
      })],
      dts: path.resolve(pathSrc, 'components.d.ts'),
  }),
  Icons({
    autoInstall: true,
  }),

]
})
