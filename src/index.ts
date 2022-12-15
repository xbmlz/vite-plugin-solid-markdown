import { compileSync } from '@mdx-js/mdx'
import type { Plugin } from 'vite'
import { createFilter } from 'vite'

function VitePluginSolidMarkdown(): Plugin {
  // mdx md files
  const filter = createFilter('**/*.mdx', '**/node_modules/**')
  return {
    name: 'vite-plugin-solid-markdown',
    enforce: 'pre',
    transform(raw: string, id: string) {
      if (!filter(id)) return
      const code = compileSync(raw, {
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx',
      })
      return {
        code: String(code),
        map: { mappings: '' } as any,
      }
    },
  }
}
export default VitePluginSolidMarkdown
