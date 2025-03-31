import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Cytokine-Dashport/', // <-- Ensure this line is correct & file saved 
})
