import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      '@emotion/react', 
      '@emotion/styled', 
      '@mui/material/Tooltip'
    ],
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        // target: ' http://192.168.100.6:5173',
       
        changeOrigin: true,
        secure: false,
      },
    },
  },
  test: {
    environment: 'jsdom', // Configura el entorno de pruebas en jsdom
    globals: true,        // Activa el uso de describe, it, y expect globales
    setupFiles: './setupTests.js', // Opcional, si tienes un archivo de configuración adicional
  },
});
