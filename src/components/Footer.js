import {
  Center,
  Text,
  Link,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Center
      bg='black'
      h='100px'
      align='center'
      maxW='100%'
      py='2'
      mt={ ['12', '4', '1', '1' ] }
      px='2'
    >
      <Text
        color='gray.300'
      >
        MIT License © 2021-Present
        <Link 
          as='a'
          href='/'
          outline='none'
          color='purple.600'
          fontWeight='semibold'
          px='2'
        >
          Amine Neggazi
        </Link>
        . Version 1.1
      </Text>
    </Center>
  )
}
