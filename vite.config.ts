import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { //Alterando a porta na qual o servidor irá rodar
    port:3000,
  }
})
