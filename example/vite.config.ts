import solidPlugin from 'solid-start/vite'
import { defineConfig } from 'vite'
import Markdown from 'vite-plugin-solid-markdown'
// @ts-expect-error - Module '"remark-prism"' has no default export.
import remarkPrism from 'remark-prism'

export default defineConfig({
  plugins: [
    Markdown({
      wrapperClasses: 'prose',
      remarkPlugins: [remarkPrism],
    }),
    solidPlugin({
      extensions: ['.mdx', '.md'],
      ssr: false,
    }),
  ],
})
