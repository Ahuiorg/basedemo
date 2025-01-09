import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  base: '/',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        menu: resolve(__dirname, 'src/homework/menu.html'),
        evaluation: resolve(__dirname, 'src/homework/evaluation.html'),
        shop: resolve(__dirname, 'src/homework/shop.html'),
      }
    }
  },
  server: {
    open: true,
  }
})
