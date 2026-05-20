import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/asistentes/asistente-de-venta-multilinea/',
  server: {
    host: true, 
    port: 8008,
  }
})

