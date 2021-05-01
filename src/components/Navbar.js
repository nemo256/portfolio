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
import { FaHandPeace } from 'react-icons/fa'
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
            color='yellow'
            outline='none'
            variant='unstyled'
            mx='2'
            icon={ <FaHandPeace size='40' opacity='0.9'/> }
          >
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
        <Flex
          w='100vw'
          h='100vh'
          bgColor='black'
          zIndex={ 20 }
          top='0'
          left='0'
          pos='fixed'
          overflowY='auto'
          flexDir='column'
          display={ display }
        >
          <Flex 
            justify='flex-end'
            p='3'
            align='center'
          >
            <IconButton
              display={ ['flex', 'flex', 'none', 'none'] }
              bg='black'
              color='gray.100'
              aria-label='Close Menu'
              icon={ <CgClose size='30'/> }
              onClick={ () => changeDisplay('none') }
            />
          </Flex>
          <Flex
            flexDir='column'
            color='gray.300'
            align='center'
            pt='8'
            content='center'
            justify='center'
            px='2'
            display={ ['flex', 'flex', 'none', 'none'] }
          >
            <Link href='/' passHref>
              <Button my='1' as='a' w='75%' bg='black'>
                Home
              </Button>
            </Link>
            <Spacer />
            <Link href='/projects' passHref>
              <Button my='1' as='a' w='75%' bg='black'>
                Projects
              </Button>
            </Link>
            <Spacer />
            <Link href='/about' passHref>
              <Button my='1' as='a' w='75%' bg='black'>
                About
              </Button>
            </Link>
            <Spacer />
            <Link href='/contact' passHref>
              <Button my='1' as='a' w='75%' bg='black'>
                Contact
              </Button>
            </Link>
            <Spacer />
          </Flex>
        </Flex>
        <IconButton
          display={ ['flex', 'flex', 'none', 'none'] }
          bg='black'
          color='gray.100'
          aria-label='Open Menu'
          icon={ <GiHamburgerMenu size='30'/> }
          onClick={ () => changeDisplay('flex') }
        />
      </Flex>
    </>
  )
}
