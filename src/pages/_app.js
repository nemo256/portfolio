import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { extendTheme as theme } from '../theme'
import '@fontsource/fresca/400.css'
import Layout from '../components/Layout'


export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={ theme } resetCSS>
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
