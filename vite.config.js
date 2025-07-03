import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large libraries into a separate chunk
          vendor: [
            'vue',
            'vue-router',
            'primevue',
          ],
        },
      },
    },
  },
})
