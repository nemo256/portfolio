import Heading from '../components/about/Heading'
import Photo from '../components/about/Photo'
import { Stack } from '@chakra-ui/react'


export default function About() {
  return (
    <Stack 
      px={4}
      pt={8}
      pb={8}
      align={'center'}
      justify={'center'}
      direction={['column', 'row']}
      spacing={'8'}
    >
      <Heading />
      <Photo />
    </Stack>
  )
}
