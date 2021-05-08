import {
  Container,
  Text,
  Image,
  Stack,
  Flex,
  IconButton,
} from '@chakra-ui/react'
import Link from 'next/link'

// Icons
import { FaTwitter, FaReddit, FaGithub } from 'react-icons/fa'


export default function Hero() {
  return (
    <Container
      bgColor='black'
      maxW='100%'
      // pt={ ['0', '25%', '0', '0', '0'] }
      // pb={ ['10', '26%', '10', '10', '10'] }
      pb='10'
      // pt='auto'
    >
      <Stack
        pt='8'
        spacing='0'
        align='center'
      >
        <Image
          boxSize='250px'
          rounded='full'
          border='solid'
          border='8px'
          borderColor='purple'
          src='memoji.png'
          fallbackSrc='wave-emoji.png'
          alt='My profile picture'
          _hover={{
            boxSize: '270px',
            transition: 'all .3s ease',
            bgColor: 'whiteAlpha.200'
          }}
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
        <Flex pt={ ['8', '4'] }>
          <Link href='https://twitter.com/amine_neggazi' passHref>
            <IconButton
              aria-label='Twitter Icon'
              variant='icon'
              color='#1DA1F2'
              isRound
              p='8'
              icon={ <FaTwitter size='50'/> }
              _hover={{
                transform: 'translate(-3px, -3px)',
                bg: 'whiteAlpha.200',
              }}
              _focus={{  }}
            />
          </Link>
          <Link href='https://www.github.com/nemo256' passHref>
            <IconButton
              aria-label='Github Icon'
              variant='icon'
              color='#E0E0E0'
              isRound
              p='8'
              icon={ <FaGithub size='50'/> }
              _hover={{
                transform: 'translateY(-3px)',
                bg: 'whiteAlpha.200'
              }}
              _focus={{  }}
            />
          </Link>
          <Link href='https://www.reddit.com/user/nemo256' passHref>
            <IconButton
              aria-label='Reddit Icon'
              variant='icon'
              color='#FF5700'
              isRound
              p='8'
              icon={ <FaReddit size='50'/> }
              _hover={{
                transform: 'translate(3px, -3px)',
                bg: 'whiteAlpha.200'
              }}
              _focus={{  }}
            />
          </Link>
        </Flex>
      </Stack>
    </Container>
  )
}
