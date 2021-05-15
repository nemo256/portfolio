import Heading from '../components/skills/Heading'
import FrontEnd from '../components/skills/FrontEnd'
import BackEnd from '../components/skills/BackEnd'
import CLI_apps from '../components/skills/CLI_apps'
import { Stack } from '@chakra-ui/react'


export default function Skills() {
  return (
    <Stack 
      direction={'column'} 
      spacing={8}
      pb={20}
    >
      <Heading />
      <Stack 
        pt={4}
        pb={[0, 4]}
        align={['center', 'normal']}
        justify={'center'}
        direction={['column', 'row']} 
        spacing={[8, 16]}
      >
        <FrontEnd />
        <BackEnd />
      </Stack>
      <Stack
        align={'center'}
        justify={'center'}
      >
        <CLI_apps />
      </Stack>
    </Stack>
  )
}
