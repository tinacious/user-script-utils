import { resolve } from 'path'
import { defineConfig } from 'vite'

const files = [
  'add-css',
  'delay',
  'wait-for-element',
  'wait-for-elements',
]

const entries = files.reduce((acc, current) => {
  acc[current] = resolve(__dirname, `src/${current}.ts`)
  return acc
}, {
  lib: resolve(__dirname, 'src/main.ts')
})

export default defineConfig({
  build: {
    outDir: 'lib',
    lib: {
      entry: entries,
    },
  },
})
