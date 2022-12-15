import solid from 'solid-start/vite'
import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
import md from 'vite-plugin-solid-markdown'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

export default defineConfig({
  plugins: [
    md({
      wrapperClasses: 'prose prose-sm m-auto text-left',
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: 'vitesse-dark',
          },
        ],
      ],
      remarkPlugins: [remarkGfm],
    }),
    solid({
      extensions: ['.mdx', '.md'],
    }),
    unocss(),
  ],
  build: {
    target: 'esnext',
  },
})
