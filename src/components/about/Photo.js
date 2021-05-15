import { 
  Stack,
  Image
} from '@chakra-ui/react'


export default function Photo() {
  return (
    <Stack 
      w={'100%'}
      align={'center'}
    >
      <Image
        w={'300px'}
        h={'400px'}
        rounded={'lg'}
        src={'me.jpg'}
      />
    </Stack>
  )
}
