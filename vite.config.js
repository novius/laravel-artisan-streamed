import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'resources/js/main.js'),
      name: 'Main',
      fileName: 'main-[hash]',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: `[name]-[hash][extname]`,
      }
    }
  },
  publicDir: 'dist',
  plugins: [vue()],
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
});
