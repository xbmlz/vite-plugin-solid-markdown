import solidPlugin from 'solid-start/vite'
import { defineConfig } from 'vite'
import mdx from 'vite-plugin-solid-markdown'

export default defineConfig({
  plugins: [
    mdx(),
    solidPlugin({
      extensions: ['.mdx', '.md'],
      // ssr: false,
    }),
  ],
})
