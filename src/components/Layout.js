import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import { Box } from '@chakra-ui/react'
import { FaHandPeace } from 'react-icons/fa'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel='icon' href='favicon.svg'/>
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
