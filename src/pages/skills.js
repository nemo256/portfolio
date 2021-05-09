import {
  Stack,
  HStack,
  IconButton,
  Box,
  Text,
  Divider,
} from '@chakra-ui/react'
import { RiWindowLine } from 'react-icons/ri'
import { SiMaterialUi, SiTailwindcss } from 'react-icons/si'

export default function Skills() {
  return (
    <Stack 
      direction={['column', 'row', 'row', 'row', 'row']}
      spacing={8}
      align={'center'}
      alignItems={'center'}
      justify={'center'}
    >
      <Box
        bg={'black'}
        p={4}
        rounded={'xl'}
        border={'4px'}
        borderColor={'purple'}
      >
        <HStack spacing={'2'} p={'2'}>
          <RiWindowLine 
            size={70} 
            color={'blue'}
          />
          <Text
            color={'gray.300'}
            fontSize={'l'}
            fontWeight={'extrabold'}
            pr={'2'}
          >
            FrontEnd
          </Text>
        </HStack>
        <Divider />
        <Stack
          direction={['column']}
          spacing={0}
          align={'center'}
          alignItems={'center'}
          justify={'center'}
        >
          <HStack pt={2} spacing={'4'}>
            <SiMaterialUi 
              size={15} 
              color={'gray.200'}
            />
            <Text
              color={'gray.300'}
              fontSize={'sm'}
              fontWeight={'normal'}
              pr={'2'}
            >
              Material UI
            </Text>
          </HStack>
          <HStack spacing={'4'}>
            <SiTailwindcss 
              size={15} 
              color={'teal.400'}
            />
            <Text
              color={'gray.300'}
              fontSize={'sm'}
              fontWeight={'normal'}
              pr={'2'}
            >
              Tailwind CSS
            </Text>
          </HStack>
        </Stack>
      </Box>
      <Box
        bg={'red'}
        p={4}
        rounded={'xl'}
        border={'4px'}
        borderColor={'yellow'}
      >
        <IconButton>
          Noo
        </IconButton>
        <Divider />
        <Text>
          Ok
        </Text>
      </Box>
      <Box
        bg={'red'}
        p={4}
        rounded={'xl'}
        border={'4px'}
        borderColor={'yellow'}
      >
        <IconButton>
          Noo
        </IconButton>
        <Divider />
        <Text>
          Ok
        </Text>
      </Box>
    </Stack>
  )
}
