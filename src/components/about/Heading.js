import {
  Stack,
  Text
} from '@chakra-ui/react'


export default function Heading() {
  return (
    <Stack 
      px={2}
      w={'100%'}
    >
      <Text
        pb={4}
        color={'gray.200'}
        fontSize={'3xl'}
        align={['center', 'left']}
      >
        About Me
      </Text>
      <Text
        color={'gray.400'}
        fontSize={'l'}
        align={['center', 'left']}
      >
        Hi! My name is Amine Neggazi, Amine in short.
      </Text>
      <Text
        pt={2}
        color={'gray.400'}
        fontSize={'l'}
        align={['center', 'left']}
      >
        I'm a Software Engineer highly skilled in Web Development, My journey began with flashing Smartphones and tinkering with Operating Systems (Linux Distros) to automation and now doing Web Development.
      </Text>
      <Text
        pt={2}
        color={'gray.400'}
        fontSize={'l'}
        align={['center', 'left']}
      >
        My current focus is on Front End Web Development using React, NextJS, and UI kits like ChakraUI, MaterialUI and TailwindCSS.
      </Text>
      <Text
        pt={2}
        color={'gray.400'}
        fontSize={'l'}
        align={['center', 'left']}
      >
        I value my workflow and the tools I use.
      </Text>
      <Text
        pt={2}
        color={'gray.400'}
        fontSize={'l'}
        align={['center', 'left']}
      >
        Be sure to check out my dotfiles on github.
      </Text>
    </Stack>
  )
}
