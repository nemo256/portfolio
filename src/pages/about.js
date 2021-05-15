import Heading from '../components/about/Heading'
import Photo from '../components/about/Photo'
import { Stack } from '@chakra-ui/react'


export default function About() {
  return (
    <Stack 
      p={4}
      align={'center'}
      justify={'center'}
      direction={'row'}
    >
      <Heading />
      <Photo />
    </Stack>
  )
}
