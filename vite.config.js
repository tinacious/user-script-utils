import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'lib',
    lib: {
      entry: {
        lib: resolve(__dirname, 'src/main.ts'),
        'add-css-stylesheet': resolve(__dirname, 'src/add-css-stylesheet.ts'),
      },
    },
  },
})
