# vite-plugin-solid-markdown

[![NPM version](https://img.shields.io/npm/v/vite-plugin-solid-markdown?color=a1b858)](https://www.npmjs.com/package/vite-plugin-solid-markdown)

Compile Markdown to SolidJS component.

- Use Markdown as Solid components
- Use Solid components in Markdown

## Install

Install

```bash
npm i vite-plugin-solid-markdown -D # yarn add vite-plugin-solid-markdown -D
```

Add it to `vite.config.js`

> ⚠️ Note: `md()` should be placed before `solid()`


```ts
// vite.config.js
import solid from 'solid-start/vite'
import { defineConfig } from 'vite'
import md from 'vite-plugin-solid-markdown'

export default defineConfig({
  plugins: [
    md(),
    solid({
      extensions: ['.mdx', '.md'],
    }),
  ],
})
```

And import it as a normal Solid component

## Import Markdown as Solid components

```jsx

import ReadMe from '../../README.md'

export default function Home() {
  return (
    <div>
      <ReadMe />
    </div>
  )
}

```

## Use Solid Components inside Markdown

You can even use Solid components inside your markdown, for example

```mdx
import Counter from '~/components/Counter'

<Counter />
```

## Frontmatter

Frontmatter will be parsed and inject into Solid's instance data `frontmatter` field.

For example:

```md
export const name = 'My Cool App'
export const title = 'Hello ' + name + '!'

# This is {name}
```

Will be rendered as

```html
<h1>This is My Cool App</h1>
```

It will also be passed to the wrapper component's props if you have set `wrapperComponent` option.

## Options

```ts
// vite.config.js
import solidPlugin from 'solid-start/vite'
import { defineConfig } from 'vite'
import Markdown from 'vite-plugin-solid-markdown'
import remarkPrism from 'remark-prism'

export default defineConfig({
  plugins: [
    solidPlugin({
      extensions: ['.mdx', '.md'],
    }),
    Markdown({
      wrapperClasses: 'prose prose-sm m-auto text-left',
      remarkPlugins: [remarkPrism],
      // more options will be added in the future
    }),
  ],
})
```

See [the tsdoc](./src/types.ts) for more advanced options.

See [Rehype plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins) for more rehype plugins.

See [Remark plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins) for more remark plugins.

## Example

See the [/example](./example).

Or the pre-configured starter template [Vitesse](https://github.com/xbmlz/vitesse-solid).

## TypeScript Shim

```ts
declare module '*.md' {
  import type { Component } from 'solid-js'
  const Component: Component
  export default Component
}
```


## License

MIT License © 2020-PRESENT [xbmlz](https://github.com/xbmlz)
