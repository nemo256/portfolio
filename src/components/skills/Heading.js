import {
  Text,
  Box,
  Flex,
  Spacer
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
          Tools and languages I used throughout the years to build Websites and Apps in general:
        </Text>
      </Box>
      <Spacer />
    </Flex>
  )
}
