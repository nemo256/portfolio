import { 
  Box,
  Spacer,
  Flex,
  Button,
  Tooltip,
  Image,
  IconButton,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [ display, changeDisplay ] = useState('none')

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
          <IconButton
            bgColor='black'
            outline='none'
            variant='unstyled'
            mx='2'
          >
            <Image 
              boxSize='35'
              src='wave-emoji.png'
            />
          </IconButton>
        </Tooltip>
        <Spacer />
        <Box
          color='gray.300'
          px='2'
          display={ ['none', 'none', 'flex', 'flex'] }
        >
          <Link href='/' passHref>
            <Button mx='1' as='a' bg='black'>
              Home
            </Button>
          </Link>
          <Link href='/projects' passHref>
            <Button mx='1' as='a' bg='black'>
              Projects
            </Button>
          </Link>
          <Link href='/about' passHref>
            <Button mx='1' as='a' bg='black'>
              About
            </Button>
          </Link>
          <Link href='/contact' passHref>
            <Button mx='1' as='a' bg='black'>
              Contact
            </Button>
          </Link>
        </Box>
        <IconButton
          display={ ['flex', 'flex', 'none', 'none'] }
          bg='black'
          color='gray.100'
          icon={ <GiHamburgerMenu size='30'/> }
          onClick={ () => changeDisplay('none') }
        />
        <IconButton
          display={ ['flex', 'flex', 'none', 'none'] }
          bg='black'
          color='gray.100'
          icon={ <CgClose size='30'/> }
          onClick={ () => changeDisplay('none') }
        />
      </Flex>
    </>
  )
}
