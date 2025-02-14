import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' //Se añade el path para poder saber la ruta

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //Configuramos alias para mis carpetas @
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
    }
  }
})

