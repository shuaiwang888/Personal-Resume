import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // base: './' — 便于部署到任意子路径（GitHub Pages、子目录托管、对象存储）
  // 如部署到根域名，可改为 '/'
  base: './',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // 拆包：让 react / framer / icons 各自独立、长期可缓存
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('framer-motion')) return 'framer'
          if (id.includes('lucide-react')) return 'icons'
          if (id.includes('node_modules/ogl/')) return 'ogl'
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/react-intersection-observer/')
          ) {
            return 'react-vendor'
          }
        },
      },
    },
  },
  preview: {
    port: 4173,
  },
})
