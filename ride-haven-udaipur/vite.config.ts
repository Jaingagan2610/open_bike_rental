// import react from '@vitejs/plugin-react'
import ImportMetaEnvPlugin from '@import-meta-env/unplugin'

import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ImportMetaEnvPlugin.vite({
          example: '.env.example',
          transformMode: 'runtime'
        })
      : react(),
    
  ],
 
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  build: {
    outDir: 'build'
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
         react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    },
  },
})
