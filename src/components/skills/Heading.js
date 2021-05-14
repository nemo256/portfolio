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
          bgGradient={'linear(109.6deg, rgba(116,18,203,1) 11.2%, rgba(230,46,131,1) 91.2%)'}
          bgClip={'text'}
          align={'center'}
          justify={'center'}
          pt={8}
          pb={4}
          px={4}
        >
          Tools and languages I used throughout the years to build beautiful Websites and Apps in general:
        </Text>
      </Box>
      <Spacer />
    </Flex>
  )
}
