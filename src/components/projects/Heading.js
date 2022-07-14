import {
  Text,
  Box,
  Flex,
  Spacer,
  Link
} from '@chakra-ui/react'


export default function Heading() {
  return (
    <Flex direction={'row'}>
      <Spacer />
      <Box
        justify={'center'}
        align={'center'}
        maxW={['100%', '67%']}
        pt={8}
      >
        <Text
          fontSize={'2xl'}
          fontWeight={'extrabold'}
          color={'gray.200'}
          align={'center'}
          justify={'center'}
          pt={8}
          pb={4}
          px={4}
        >
          Here is the link to all my projects:
        </Text>
        <Text
          fontSize={'2xl'}
          fontWeight={'extrabold'}
          color={'#4b00af'}
          align={'center'}
          justify={'center'}
          pt={8}
          pb={4}
          px={4}
        >
          <Link href="https://github.com/nemo256?tab=repositories" isExternal>
            https://github.com/nemo256?tab=repositories
          </Link>
        </Text>
      </Box>
      <Spacer />
    </Flex>
  )
}
