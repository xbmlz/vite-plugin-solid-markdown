/* @refresh reload */
import { render } from 'solid-js/web'
import { Route, Router, A } from "@solidjs/router"

import './index.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import Home from './Home'
import About from './About.mdx'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  )
}

render(() => (
  <Router>
    <Route component={Home} path="/" />
    <Route component={About} path="/about" />
  </Router>
), root)
