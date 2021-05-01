import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import { Box } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="wave-emoji.svg" />
        <title>Amine Neggazi</title>
      </Head>
      <Box
        bgColor='black'
        h='100vh'
      >
        <Navbar />
        { children }
        <Footer />
      </Box>
    </>
  )
}
