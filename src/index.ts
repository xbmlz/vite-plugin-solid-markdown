import { createFilter } from '@rollup/pluginutils'
import type { Plugin } from 'vite'
import { createMarkdown } from './markdown'
import { resolveOptions } from './options'
import type { Options } from './types'

function VitePluginSolidMarkdown(userOptions: Options = {}): Plugin {
  const filter = createFilter(
    userOptions.include || /\.mdx$/,
    userOptions.exclude || /node_modules/
  )

  const options = resolveOptions(userOptions)
  const markdownToSolid = createMarkdown(options)

  return {
    name: 'vite-plugin-solid-markdown',
    enforce: 'pre',
    transform(raw, id) {
      if (!filter(id)) return

      try {
        return markdownToSolid(id, raw)
      } catch (e: any) {
        this.error(e)
      }
    },
    handleHotUpdate(ctx) {
      if (!filter(ctx.file)) return

      const defaultRead = ctx.read
      ctx.read = async function () {
        return markdownToSolid(ctx.file, await defaultRead()).code
      }
    },
  }
}

export default VitePluginSolidMarkdown
