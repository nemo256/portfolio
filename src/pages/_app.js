import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { extendTheme as theme } from '../theme'
import Layout from '../components/layouts/Layout'

// Fonts
import '@fontsource/open-sans/700.css'
import '@fontsource/fresca/400.css'

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
