import Heading from '../components/about/Heading'
import Photo from '../components/about/Photo'
import { Stack, Text } from '@chakra-ui/react'

// Links
import Facebook from '../components/links/Facebook'
import Instagram from '../components/links/Instagram'
import Twitter from '../components/links/Twitter'
import Github from '../components/links/Github'
import Reddit from '../components/links/Reddit'


export default function About() {
  return (
    <Stack>
      <Stack 
        px={4}
        pt={8}
        pb={8}
        align={'center'}
        justify={'center'}
        direction={['column', 'row']}
        spacing={8}
      >
        <Heading />
        <Photo />
      </Stack>
      <Stack
        align={'center'}
        justify={'center'}
        direction={'column'}
        pb={5}
      >
        <Text
          pb={4}
          color={'gray.200'}
          fontSize={'2xl'}
          align={'center'}
        >
          Email:
        </Text>
        <Text
          pb={4}
          color={'gray.200'}
          fontSize={'xl'}
          align={'center'}
          bgGradient={"linear-gradient(111.2deg, rgba(232,5,5,1) 1.7%, rgba(245,49,191,1) 98.7%)"}
          bgClip={'text'}
          noOfLines={[2, 1]}
        >
          neggazimedlamine@gmail.com
        </Text>
        <Text
          pb={4}
          color={'gray.200'}
          fontSize={'2xl'}
          align={'center'}
        >
          Social Links:
        </Text>
        <Stack
          align={'center'}
          justify={'center'}
          direction={'row'}
          spacing={[3, 4, 5, 6, 6, 6]}
          pb={4}
        >
          <Facebook />
          <Instagram />
          <Twitter />
          <Github />
          <Reddit />
        </Stack>
      </Stack>
    </Stack>
  )
}
