import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'lib',
    lib: {
      entry: {
        lib: resolve(__dirname, 'src/main.ts'),
        'add-css-stylesheet': resolve(__dirname, 'src/add-css-stylesheet.ts'),
        'delay': resolve(__dirname, 'src/delay.ts'),
        'wait-for-element': resolve(__dirname, 'src/wait-for-element.ts'),
        'wait-for-elements': resolve(__dirname, 'src/wait-for-elements.ts'),
      },
    },
  },
})
