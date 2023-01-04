// @refresh reload
import { Suspense } from 'solid-js'
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start'

import './root.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Solid Markdown Demo</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="font-sans bg-zinc-900 text-zinc-200">
        <Suspense>
          <ErrorBoundary>
            <A href="/">Index</A> | <A href="/about">About</A>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
