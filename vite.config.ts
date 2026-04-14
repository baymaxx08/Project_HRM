import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'project-hrm.onrender.com',
      'localhost',
      '127.0.0.1',
      '0.0.0.0'
    ],
    host: '0.0.0.0',
    port: 4173
  }
})
