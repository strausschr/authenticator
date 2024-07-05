import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3030,
    proxy: {
      '/api/requestToken': 'http://localhost:8080',
      '/api/ping': 'http://localhost:8080'
    },
  }
})


