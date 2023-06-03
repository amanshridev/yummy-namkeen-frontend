/* eslint-disable react/react-in-jsx-scope */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <body className='bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
