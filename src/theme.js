import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'


export default extendTheme({
  colors: {
    black: '#000000',
    purple: '#993399'
  },
  fonts: {
    heading: 'Open Sans',
    body: `Fresca`
  },
  breakpoints: {
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
  },
})
