import { useState, useCallback } from 'react'
import { 
  Button,
  Box,
  HStack,
  Stack,
  Flex,
  Tooltip, 
  IconButton,
  Spacer,
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
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isRoute = useCallback((route) => {
      return router.route == route;
    },
    [router.route],
  );

  return (
    <>
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
          icon={ 
            isOpen ?
              <CgClose size='30' />
              : <GiHamburgerMenu size='30' /> 
          }
          onClick={isOpen ? onClose : onOpen}
          display={{ 
            sm: !isOpen ? 'inherit' : 'none',
            md: !isOpen ? 'none' : 'inherit',
            lg: !isOpen ? 'none' : 'inherit',
            xl: !isOpen ? 'none' : 'inherit',
            '2xl': !isOpen ? 'none' : 'inherit',
          }}
          _focus={{  }}
        >
        </IconButton>
        <HStack
          display={['none', 'none', 'flex', 'flex', 'flex']}
        >
        {routeArray.map(([route, name]) => (
          <Link 
            key={name} 
            href={route}
            passHref
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
              _hover={{
                bgColor: 'purple',
                textColor: 'black',
                fontWeight: isRoute(route) ? 'extrabold' : 'bold',
                fontSize: 'xl',
                transition: 'all 0.1 ease'
              }}
              _focus={{  }}
            >
              {name}
            </Button>
          </Link>
        ))}
        </HStack>
      </Flex>
    </HStack>
    {isOpen ? (
          <Box pb='4'>
            <Stack as={'nav'} spacing={8}>
            {routeArray.map(([route, name]) => (
              <Link 
                key={name} 
                href={route}
                passHref
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
                  _hover={{
                    bgColor: 'purple',
                    textColor: 'black',
                    fontWeight: isRoute(route) ? 'extrabold' : 'bold',
                    fontSize: 'xl',
                    transition: 'all 0.1 ease'
                  }}
                  _focus={{  }}
                >
                  {name}
                </Button>
              </Link>
            ))}
            </Stack>
          </Box>
        ) : null}
    </>
  );
};
