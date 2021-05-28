import { FaInstagram } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'


export default function Instagram() {
  return (
    <Link href='https://www.instagram.com/amine_neggazi0/' passHref>
      <IconButton
        aria-label='Twitter Icon'
        variant='icon'
        color='#C9357E'
        isRound
        icon={ <FaInstagram size='50' p='8'/> }
        _hover={{
          transform: 'scale(1.27)',
          transition: 'all .3s ease'
        }}
        _focus={{  }}
      />
    </Link>
  )
}
