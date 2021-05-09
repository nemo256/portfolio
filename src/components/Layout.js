import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel='icon' href='favicon.svg'/>
        <title>Amine Neggazi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box
        bg='black'
        h='100%'
        w='100%'
      >
        <Navbar />
        { children }
        <Footer />
      </Box>
    </>
  )
}
