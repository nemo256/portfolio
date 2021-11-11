import { Image } from '@chakra-ui/react'


export default function Memoji() {
  return (
    <Image
      boxSize='260px'
      rounded='full'
      border='solid'
      border='8px'
      borderColor='#4b0088'
      src='memoji.png'
      fallbackSrc='wave-emoji.png'
      _hover={{
        transform: 'scale(1.07)',
        transition: 'all .3s ease',
        bgColor: 'whiteAlpha.200',
        mb: '4'
      }}
    />
  )
}
