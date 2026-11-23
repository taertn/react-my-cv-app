import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5556,
  },
  plugins: [react(), tailwindcss()],
})
