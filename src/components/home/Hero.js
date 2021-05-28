import {
  Container,
  Text,
  Stack,
  Flex,
} from '@chakra-ui/react'

// Memoji
import Memoji from '../home/Memoji'

// Links
import Twitter from '../links/Twitter'
import Github from '../links/Github'
import Reddit from '../links/Reddit'


export default function Hero() {
  return (
    <Container
      bgColor='black'
      maxW='4xl'
      pb={5}
    >
      <Stack
        pt='8'
        spacing='0'
        align='center'
      >
        <Memoji />
        <Text
          pt='4'
          pb='2'
          fontSize='4xl'
          fontWeight='extrabold'
          color='gray.200'
          align='center'
        >
          Hi, I'm Amine Neggazi
        </Text>
        <Text
          fontSize='2xl'
          fontWeight='semibold'
          color='gray.400'
          align='center'
        >
          Full-Stack Web Developer & Open Sourcerer
        </Text>
        <Text
          py='2'
          fontSize='xl'
          fontWeight='medium'
          color='gray.500'
          align='center'
        >
          I design and code Web, Mobile & CLI apps.
        </Text>
        <Flex pt={ ['8', '4'] }>
          <Twitter />
          <Github />
          <Reddit />
        </Flex>
      </Stack>
    </Container>
  )
}
