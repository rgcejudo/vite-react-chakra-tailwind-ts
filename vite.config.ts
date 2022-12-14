import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import environmentPlugin from 'vite-plugin-environment'

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development'

  return {
    plugins: [react(), tsconfigPaths(), environmentPlugin('all', { prefix: 'VITE_' })],
    css: {
      modules: {
        generateScopedName: isDevelopment ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]'
      }
    }
  }
})
