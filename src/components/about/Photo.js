import { 
  Stack,
  Image,
} from '@chakra-ui/react'
import Tilt from 'react-tilt'


export default function Photo() {
  return (
    <Stack 
      py={'2'}
      pt={'8'}
      w={['100%', '70%']}
      align={'center'}
      justify={'center'}
    >
      <Tilt options={{ max: 18 }}>
        <Image
          w={'250px'}
          h={'420px'}
          rounded={'lg'}
          src={'me2.jpeg'}
          boxShadow={'dark-lg'}
        />
      </Tilt>
    </Stack>
  )
}
