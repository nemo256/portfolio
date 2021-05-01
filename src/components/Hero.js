import {
  Container,
  Text,
  Image,
  Stack,
  Button,
  Link,
  Flex,
  Spacer,
} from '@chakra-ui/react'

// Icons
import { FaTwitter, FaReddit, FaGithub } from 'react-icons/fa'


export default function Hero() {
  return (
    <>
    <Container
      bgColor='black'
      maxW='100%'
      h={ ['600px', '520px', '520px', '520px'] }
    >
      <Stack
        pt='8'
        spacing='0'
        align='center'
      >
        <Image
          boxSize='220px'
          rounded='full'
          border='solid'
          border='8px'
          borderColor='purple'
          src="me.png"
          fallbackSrc='wave-emoji.png'
          alt='My profile picture'
        />
        <Text
          pt='4'
          fontSize='3xl'
          fontWeight='extrabold'
          color='gray.200'
          align='center'
        >
          Hi, I'm Amine Neggazi
        </Text>
        <Text
          fontSize='xl'
          fontWeight='semibold'
          color='gray.400'
          align='center'
        >
          Full-Stack Web Developer & Open Sourcerer
        </Text>
        <Text
          py='2'
          fontSize='l'
          fontWeight='medium'
          color='gray.500'
          align='center'
        >
          I design and code Web, Mobile & CLI apps.
        </Text>
        <Flex pt='8' h='100px'>
          <Link href='https://twitter.com/amine_neggazi'>
            <Button
              variant='icon'
            >
              <FaTwitter size='50'/>
            </Button>
          </Link>
          <Link href='https://www.github.com/nemo256'>
            <Button
              variant='icon'
            >
              <FaGithub size='50'/>
            </Button>
          </Link>
          <Link href='https://www.reddit.com/user/nemo256'>
            <Button
              variant='icon'
            >
              <FaReddit size='50'/>
            </Button>
          </Link>
        </Flex>
      </Stack>
    </Container>
    </>
  )
}
