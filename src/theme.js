import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: 'Roboto Mono',
    body: 'Roboto Mono',
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "black",
        color: "white",
      },
    },
  },
})

export default theme
