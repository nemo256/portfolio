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
      maxW='4xl'
      pt={ ['0', '26%', '0', '0', '0'] }
      pb={ ['5', '26%', '5', '10', '25'] }
      // pb='10'
      // pt='auto'
    >
      <Stack
        pt='8'
        spacing='0'
        align='center'
      >
        <Link href='/about'>
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
              bgColor: 'whiteAlpha.200',
            }}
          />
        </Link>
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
              mx='3'
              icon={ <FaTwitter size='50' p='8'/> }
              _hover={{
                transform: 'translate(-3px, -3px)',
                transition: 'all .3s ease'
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
              mx='3'
              icon={ <FaGithub size='50' p='8'/> }
              _hover={{
                transform: 'translateY(-3px)',
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
              mx='3'
              icon={ <FaReddit size='50' p='8'/> }
              _hover={{
                transform: 'translate(3px, -3px)',
              }}
              _focus={{  }}
            />
          </Link>
        </Flex>
      </Stack>
    </Container>
  )
}
