import { FaFacebook } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'


export default function Facebook() {
  return (
    <Link href='https://facebook.com/nemo256' passHref>
      <IconButton
        aria-label='Facebook Icon'
        variant='icon'
        color='#3C5B9B'
        isRound
        icon={ <FaFacebook size='50' p='8'/> }
        _hover={{
          transform: 'scale(1.27)',
          transition: 'all .3s ease'
        }}
        _focus={{  }}
      />
    </Link>
  )
}
