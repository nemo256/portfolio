import { FaReddit } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'


export default function Reddit() {
  return (
    <Link href='https://www.reddit.com/user/nemo256' passHref>
      <IconButton
        aria-label='Reddit Icon'
        variant='icon'
        color='#FF5700'
        isRound
        icon={ <FaReddit size='50' p='8'/> }
        _hover={{
          transform: 'scale(1.27)',
          transition: 'all .3s ease'
        }}
        _focus={{  }}
      />
    </Link>
  )
}
