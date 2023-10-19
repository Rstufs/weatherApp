/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/weatherApp/",
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  }
})
