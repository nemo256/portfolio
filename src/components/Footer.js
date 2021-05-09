import {
  Container,
  Text,
  Link,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Container
      as='footer'
      bg='black'
      align='center'
      maxW='4xl'
      py='2'
      px='2'
    >
      <Text
        py='4'
        textAlign='center'
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
        Version 1.1
      </Text>
    </Container>
  )
}
