import * as React from "react";
import { 
  Button,
  HStack,
  Flex,
  Tooltip, 
  IconButton,
  Spacer
} from "@chakra-ui/react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import { FaHandPeace } from 'react-icons/fa'
import Link from "next/link";
import routes from "../../routes";
import { useRouter } from "next/router";

const routeArray = Object.entries(routes)

export default function Navbar() {
  const router = useRouter();

  const isRoute = React.useCallback((route) => {
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
        {routeArray.map(([route, name]) => (
          <Link key={name} href={route} d={['none', 'flex']} passHref>
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
                textColor:'black',
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
