import Heading from '../components/skills/Heading'
import FrontEnd from '../components/skills/FrontEnd'
import BackEnd from '../components/skills/BackEnd'
import {
  Flex,
  Stack
} from '@chakra-ui/react'


export default function Skills() {
  return (
    <>
      <Stack direction={'column'} spacing={8}>
        <Heading />
        <Stack py={4} justify={'center'} direction={['column', 'row']} spacing={16}>
          <FrontEnd />
          <BackEnd />
        </Stack>
      </Stack>
    </>
  )
}
