import { 
  Stack,
  Image,
} from '@chakra-ui/react'
import Tilt from 'react-tilt'


export default function Photo() {
  return (
    <Stack 
      w={'100%'}
      align={'center'}
    >
      <Tilt>
        <Image
          w={'220px'}
          h={'300px'}
          rounded={'lg'}
          src={'me.jpg'}
          boxShadow={'dark-lg'}
        />
      </Tilt>
    </Stack>
  )
}
