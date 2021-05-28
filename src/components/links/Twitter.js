import { FaTwitter } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'


export default function Twitter() {
  return (
    <Link href='https://twitter.com/amine_neggazi' passHref>
      <IconButton
        aria-label='Twitter Icon'
        variant='icon'
        color='#1DA1F2'
        isRound
        mx='3'
        icon={ <FaTwitter size='50' p='8'/> }
        _hover={{
          transform: 'scale(1.27)',
          transition: 'all .3s ease'
        }}
        _focus={{  }}
      />
    </Link>
  )
}
