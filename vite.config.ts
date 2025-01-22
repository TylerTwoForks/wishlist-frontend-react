import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import mkcert from "vite-plugin-mkcert"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server:{
    port:3000,
    https: true
  }
})
