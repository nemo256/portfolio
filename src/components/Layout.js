import Head from 'next/head'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import { Box } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel='icon' href='favicon.svg'/>
        <title>Amine Neggazi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box
        bgColor='black'
        h='100%'
      >
        <Navbar />
        { children }
        <Footer />
      </Box>
    </>
  )
}
