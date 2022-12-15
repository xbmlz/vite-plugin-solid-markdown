import { describe, expect, it } from 'vitest'
import { createMarkdown } from '../src/markdown'
import { resolveOptions } from '../src/options'

describe('transform', () => {
  const options = resolveOptions({})
  const markdownToVue = createMarkdown(options)

  it('basic', async () => {
    const md = `

    # Hello

    - A
    - B
    - C
    `
    expect((await markdownToVue('', md)).code).toMatchSnapshot()
  })

  it('jsx', async () => {
    const md = `

    import Counter from '~/components/Counter'

    <Counter />
    `
    expect((await markdownToVue('', md)).code).toMatchSnapshot()
  })

  it('frontmatter', async () => {
    const md = `

    export const name = 'My Cool App'
    export const title = 'Hello ' + name + '!'

    This is {name}
    `
    expect((await markdownToVue('', md)).code).toMatchSnapshot()
  })
})
