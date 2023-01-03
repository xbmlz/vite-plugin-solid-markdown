import solid from 'solid-start/vite'
import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
import md from 'vite-plugin-solid-markdown'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
// @ts-expect-error - missing types
import netlifyAdapter from 'solid-start-netlify'

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
      adapter: netlifyAdapter(),
    }),
    unocss(),
  ],
  build: {
    target: 'esnext',
  },
})
