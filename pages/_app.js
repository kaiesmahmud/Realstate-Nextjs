//Nextjs Element
import Head from 'next/head'
//components
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
//chakra ui
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Real State App- Nextjs - Nehal</title>
        <meta name="description" content="RealState app is created by Nehal using nextjs(reactjs framework)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <header>
          <Navbar/>
        </header>
        <Component {...pageProps} />
        <Footer/>
      </ChakraProvider>
    </>
  )
}
