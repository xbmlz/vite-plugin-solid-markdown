import { describe, expect, it } from 'vitest'
import { createMarkdown } from '../src/markdown'
import { resolveOptions } from '../src/options'

describe('transform', () => {
  const options = resolveOptions({})
  const markdownToSolid = createMarkdown(options)
  it('basic', () => {
    const md = `# Hello
- A
- B
- C
`
    expect(markdownToSolid('', md).code).toMatchSnapshot()
  })
})
