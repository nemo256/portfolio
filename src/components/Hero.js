import {
  Container,
  Text,
  Image,
  Stack,
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <>
    <Container
      bgColor='black'
      maxW='100%'
      h='400px'
    >
      <Stack
        pt='8'
        spacing='0'
        align='center'
      >
        <Image
          boxSize='200px'
          rounded='full'
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
          color='gray.500'
          align='center'
        >
          Full-Stack Web Developer & Open Sourcerer
        </Text>
        <Text
          py='2'
          fontSize='l'
          fontWeight='medium'
          color='gray.400'
          align='center'
        >
          I design and code Web, Mobile & CLI apps.
        </Text>
      </Stack>
    </Container>
    </>
  )
}
