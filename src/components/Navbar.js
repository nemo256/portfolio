import { 
  Button,
  Box,
  HStack,
  Stack,
  Flex,
  Tooltip, 
  IconButton,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import { FaHandPeace } from 'react-icons/fa'
import Link from 'next/link'
import routes from '../../routes'


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <HStack
      bgColor='black'
      insetX='0'
      justify='center'
      p='3'
      top='0'
      zIndex='10'
      opacity='0.9'
      display={'flex'}
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
            _focus={{  }}
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
        {routes.map((route) => (
          <Link 
            href={route.path}
            passHref
          >
            <Button
              as="a"
              mx={2}
              bgColor={'black'}
              fontSize='l'
              textColor='gray.300'
              borderBottom={'0px'}
              borderColor={'black'}
              fontWeight={'semibold'}
              _hover={{
                bgColor: 'purple',
                textColor: 'black',
                fontWeight: 'bold',
                fontSize: 'xl',
                transition: 'all 0.1 ease'
              }}
              _focus={{  }}
            >
              {route.label}
            </Button>
          </Link>
        ))}
        </HStack>
      </Flex>
    </HStack>
    {isOpen ? (
          <Box pb='4'>
            <Stack 
              as={'nav'} 
              spacing={4} 
              align={'center'}
            >
            {routes.map((route) => (
              <Link 
                href={route.path}
                passHref
              >
                <Button
                  as={'a'}
                  py={8}
                  px={20}
                  fontSize='l'
                  textColor='gray.300'
                  bgColor='black'
                  borderBottom={'0px'}
                  borderColor={'black'}
                  fontWeight={'semibold'}
                  onClick={onClose}
                  _hover={{
                    bgColor: 'purple',
                    textColor: 'black',
                    fontWeight: 'bold',
                    fontSize: 'xl',
                    transition: 'all 0.1 ease'
                  }}
                  _focus={{  }}
                >
                  {route.label}
                </Button>
              </Link>
            ))}
            </Stack>
          </Box>
        ) : null}
    </>
  );
};
