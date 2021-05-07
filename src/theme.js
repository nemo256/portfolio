import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'


export default extendTheme({
  colors: {
    brand: {
      black: '#000000',
      purple: '#993399',
      reddit: '#FF5700',
      github: '#E0E0E0',
      twitter: '#1DA1F2',
    },
  },
  fonts: {
    heading: 'Open Sans',
    body: `Fresca`
  },
  breakpoints: createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  }),

  variants: {
    icon: {
      p: '2',
      m: '4',
      bg: 'black',
      border: 'none',
      color: 'gray.500',
      rounded: 'full',
      textDecoration: 'none',
      _hover: {
        bg: 'black',
        color: 'gray.500',
        border: 'none',
        rounded: 'full'
      }
    }
  }
})
