import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    watch: {
      usePolling: true,
    },
    host: '0.0.0.0'
  }
})
