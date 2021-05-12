// Fonts
import '@fontsource/roboto-mono/700.css'

import { ChakraProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react'
import Layout from '../components/layouts/Layout'
import theme from '../theme'



export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  )
}
