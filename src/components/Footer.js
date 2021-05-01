import {
  Text,
  Link,
  Center,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Center
      bg='black'
      align='center'
      justify='center'
      maxW='100%'
      py='1rem'
      px='2'
      minH='15vh'
      flexWrap='wrap'
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
