import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import Unocss from 'unocss/vite'
import md from '../src/index'

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
    solidPlugin({
      extensions: ['.mdx', '.md'],
    }),
    Unocss(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
