import { FaGithub } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'


export default function Github() {
  return (
    <Link href='https://www.github.com/nemo256' passHref>
      <IconButton
        aria-label='Github Icon'
        variant='icon'
        color='#E0E0E0'
        isRound
        mx='3'
        icon={ <FaGithub size='50' p='8'/> }
        _hover={{
          transform: 'scale(1.27)',
          transition: 'all .3s ease'
        }}
        _focus={{  }}
      />
    </Link>
  )
}
