import { compileSync } from '@mdx-js/mdx'
import type { TransformResult } from 'vite'
import type { ResolvedOptions } from './types'

export function createMarkdown(options: ResolvedOptions) {
  function rehypeWrapperClasses() {
    // unknown is not assignable to type Element
    return function (tree: any) {
      if (options.wrapperClasses) {
        const wrapper = {
          type: 'element',
          tagName: 'div',
          properties: {
            className: options.wrapperClasses,
          },
        }
        // @ts-expect-error - property children does not exist on type Element
        wrapper.children = tree.children
        tree.children = [wrapper]
      }
      if (options.wrapperComponent) {
        const wrapper = {
          type: 'element',
          tagName: options.wrapperComponent,
          properties: {},
        }
        // @ts-expect-error - property children does not exist on type Element
        wrapper.children = tree.children
        tree.children = [wrapper]
      }
    }
  }

  return (id: string, raw: string): TransformResult => {
    const code = String(
      compileSync(raw, {
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx',
        rehypePlugins: [...options.rehypePlugins, rehypeWrapperClasses],
        remarkPlugins: [...options.remarkPlugins],
      })
    )

    return {
      code,
      map: { mappings: '' } as any,
    }
  }
}
