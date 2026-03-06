import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  define: {
    global: 'window', // Esto mapea global a window
  },
  plugins: [react()],
})
