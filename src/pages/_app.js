import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { extendTheme as theme } from '../theme'
// import '@fontsource/fresca/400.css'
// import '@fontsource/girassol'
import '@fontsource/open-sans/700.css'


export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={ theme } resetCSS>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}
