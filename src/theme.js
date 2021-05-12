import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: 'Roboto Mono',
    body: 'Roboto Mono',
  },
  styles: {
    global: {
      body: {
        bg: "black",
      },
    },
  },
})

export default theme
