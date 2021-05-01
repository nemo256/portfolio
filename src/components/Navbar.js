import { 
  Box,
  Spacer,
  Flex,
  Text,
  Button,
  Tooltip,
  Image,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <Flex
        w='100%'
        bgColor='black'
        p='3'
        align='center'
        justify='center'
        content='center'
      >
        <Tooltip
          hasArrow 
          label='Me Myself and I'
          bg='purple.600'
          placement='auto'
        >
          <Button
            bgColor='black'
            outline='none'
            variant='unstyled'
            mx='2'
          >
            <Image 
              boxSize='35'
              src='wave-emoji.png'
            />
          </Button>
        </Tooltip>
        <Spacer />
        <Box
          color='gray.300'
          px='2'
          display={ ['none', 'none', 'flex', 'flex'] }
        >
          <Link href='/' passHref>
            <Button mx='1' as='a'>
              Home
            </Button>
          </Link>
          <Link href='/projects' passHref>
            <Button mx='1' as='a'>
              Projects
            </Button>
          </Link>
          <Link href='/about' passHref>
            <Button mx='1' as='a'>
              About
            </Button>
          </Link>
          <Link href='/contact' passHref>
            <Button mx='1' as='a'>
              Contact
            </Button>
          </Link>
        </Box>
      </Flex>
    </>
  )
}
