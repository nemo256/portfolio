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
          fontWeight={'bold'}
          bgGradient={'linear( 113.3deg, rgba(217,9,27,1) 6.9%, rgba(22,68,150,1) 75% )'}
          bgClip={'text'}
          align={'center'}
          justify={'center'}
          pt={8}
          pb={4}
          px={4}
        >
          Tools and languages i used throughout the years to build beautiful websites and apps in general
        </Text>
      </Box>
      <Spacer />
    </Flex>
  )
}
