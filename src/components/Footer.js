import {
  Text,
  Link,
  Container,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Container
      as='footer'
      bg='black'
      align='center'
      textAlign='center'
      justify='center'
      maxW='100%'
      p={ ['2', '4'] }
      h='full'
      // minH={ ['15vh', '0'] }
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
    </Container>
  )
}
