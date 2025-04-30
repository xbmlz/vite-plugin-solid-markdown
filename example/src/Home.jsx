import { A } from '@solidjs/router'
import Readme from '../../README.md'

function Home() {
  return (
    <div class="">
      <A href="/">Home</A>|
      <A href="/about">About</A>
      <h1>Welcome to Vite + Solid + Markdown!</h1>
      <Readme />
    </div>
  );
}

export default Home
