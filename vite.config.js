import { defineConfig, mergeConfig } from 'vite'
import viteConfig from './vite.config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
    test: {
      exclude: [
        '**/tests/**/*',
        '**/tests-examples/**/*',
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      ],
    },
  })
)
