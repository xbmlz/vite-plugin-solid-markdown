import { toArray } from '@antfu/utils'
import type { Options, ResolvedOptions } from './types'

export function resolveOptions(userOptions: Options): ResolvedOptions {
  const defaultOptions: ResolvedOptions = {
    wrapperClasses: 'markdown-body',
    wrapperComponent: null,
    remarkPlugins: [],
    rehypePlugins: [],
    include: null,
    exclude: null,
  }

  const options = { ...defaultOptions, ...userOptions }

  options.wrapperClasses = toArray(options.wrapperClasses)
    .filter((i?: string) => i)
    .join(' ')

  return options as ResolvedOptions
}
