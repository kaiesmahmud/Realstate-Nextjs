//Nextjs Element
import Head from 'next/head'
import { Router } from 'next/router'
//components
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
//chakra ui
import { Box, ChakraProvider } from '@chakra-ui/react'
//nProgress
import nProgress from 'nprogress'

export default function App({ Component, pageProps }) {
  nProgress.configure({ showSpinner : false });

  Router.events.on( 'routeChangeStart' ,()=> {
    nProgress.start();
  })
  Router.events.on( 'routeChangeComplete' ,()=> {
    nProgress.done();
  })

  return (
    <>
      <Head>
        <title>Real State App- Nextjs - Nehal</title>
        <meta name="description" content="RealState app is created by Nehal using nextjs(reactjs framework)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/*--------- nprogress link ------------------ */}
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      <ChakraProvider>
        <Box maxWidth='1280px' m='auto' backgroundColor={'white'}>
          <header>
            <Navbar/>
          </header>
          <Component {...pageProps} />
          <Footer/>
        </Box>
      </ChakraProvider>
    </>
  )
}
