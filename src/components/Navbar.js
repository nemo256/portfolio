import { useState, useCallback } from 'react'
import { 
  Button,
  HStack,
  Flex,
  Tooltip, 
  IconButton,
  Spacer,
  Slide,
  useDisclosure
} from "@chakra-ui/react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import { FaHandPeace } from 'react-icons/fa'
import Link from 'next/link'
import routes from '../../routes'
import { useRouter } from 'next/router'

const routeArray = Object.entries(routes)

export default function Navbar() {
  const router = useRouter();
  const [ display, changeDisplay ] = useState('none')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isRoute = useCallback((route) => {
      return router.route == route;
    },
    [router.route],
  );

  return (
    <HStack
      bgColor='black'
      insetX='0'
      justify='center'
      p='3'
      pos='sticky'
      top='0'
      zIndex='modal'
      opacity='0.9'
    >
      <Flex
        w='100%'
        bgColor='black'
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
        <IconButton
          aria-label='Open Menu'
          bgColor='black'
          color='gray.100'
          outline='none'
          variant='unstyled'
          icon={ isOpen ? <GiHamburgerMenu size='30' /> : <CgClose size='30' />}
          onClick={isOpen ? onClose : onOpen}
          display={{ sm: !isOpen ? 'none' : 'inherit' }}
          _focus={{  }}
        >
        </IconButton>
        {routeArray.map(([route, name]) => (
          <Link 
            key={name} 
            href={route}
            passHref
            display={{ sm: 'flex', md: 'flex' }}
          >
            <Button
              as="a"
              mx='1'
              fontSize='l'
              textColor='gray.300'
              bgColor='black'
              borderBottom={isRoute(route) ? '2px' : '0px'}
              borderColor={isRoute(route) ? 'purple' : 'black'}
              fontWeight={isRoute(route) ? 'bold' : 'semibold'}
              d={['none', 'none', 'flex', 'flex', 'flex']}
              _hover={{
                bgColor: 'purple',
                textColor: 'black',
                fontWeight: 'extraBold',
                fontSize: 'xl',
                transition: 'all 0.1 ease'
              }}
              _focus={{  }}
            >
              {name}
            </Button>
          </Link>
        ))}
      </Flex>
    </HStack>
  );
};
