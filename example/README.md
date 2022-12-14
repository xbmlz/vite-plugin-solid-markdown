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

```ts
// vite.config.js
import solidPlugin from 'solid-start/vite'
import { defineConfig } from 'vite'
import Markdown from 'vite-plugin-solid-markdown'

export default defineConfig({
  plugins: [
    solidPlugin({
      extensions: ['.mdx', '.md'],
    }),
    Markdown(),
  ],
})
```

And import it as a normal Solid component

## Import Markdown as Solid components

```jsx

import About from './about.md'

export default function App() {
  return (
    <div>
      <About />
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

## Frontmatter [WIP]

Frontmatter will be parsed and inject into Solid's instance data `frontmatter` field.

For example:

```md
---
name: My Cool App
---

# Hello World

This is {{frontmatter.name}}
```

Will be rendered as

```html
<h1>Hello World</h1>
<p>This is My Cool App</p>
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

See [the tsdoc](./src/types.ts) for more advanced options

## Example

See the [/example](./example).

Or the pre-configured starter template [Vitesse](https://github.com/xbmlz/vitesse-solid).


## License

MIT License © 2020-PRESENT [xbmlz](https://github.com/xbmlz)
