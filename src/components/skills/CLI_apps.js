import {
  Box,
  Stack,
  Text,
  Divider,
  Tag,
  TagLabel,
  TagLeftIcon
} from '@chakra-ui/react'
import { AiFillTool } from 'react-icons/ai'
import { BiCodeCurly } from 'react-icons/bi'
import { IoLogoNodejs } from 'react-icons/io'
import { 
  RiWindowLine,
  RiTerminalBoxFill 
} from 'react-icons/ri'
import { SiC } from 'react-icons/si'

const frameworks = [
  {
    name: 'Blessed',
    icon: IoLogoNodejs,
    color: 'gray.50'
  },
  {
    name: 'Curses Library',
    icon: SiC,
    color: 'gray.50'
  },
]

const languages = [
  {
    name: 'Node.js',
    icon: IoLogoNodejs,
    color: '#8bc500'
  },
  {
    name: 'C',
    icon: SiC,
    color: '#293694'
  }
]


export default function CLI_apps(){
  return (
    <Box
      bg={'black'}
      pt={4}
      pb={6}
      px={4}
      rounded={'2xl'}
      border={'8px'}
      minW={['87%', '81%']}
      maxW={['88%', '82%']}
      _hover={{
        transition: 'all .3s ease',
        transform: 'scale(1.016)',
        borderColor: '#8db600'
      }}
    >
      <Stack 
        align={'center'} 
        justify={'center'} 
        direction={'row'} 
        spacing={'2'} 
        py={2}
      >
        <RiTerminalBoxFill 
          size={92} 
          color={'#33FF33'}
        />
        <Text
          color={'gray.300'}
          fontSize={'xl'}
          fontWeight={'extrabold'}
        >
          CLI Apps
        </Text>
      </Stack>
      <Divider />
      <Stack 
        direction={['column', 'row']} 
        spacing={[0, 40]}
        align={['normal', 'center']}
        justify={'center'}
      >
        <Stack direction={'column'}>
          <Stack 
            align={'center'} 
            direction={'row'} 
            spacing={'2'}
            pt={4}
            pb={2}
          >
            <AiFillTool 
              size={27} 
              color={'gray'}
            />
            <Text
              color={'gray.300'}
              fontSize={'md'}
              fontWeight={'bold'}
            >
              Frameworks / Libraries:
            </Text>
          </Stack>
          <Stack
            direction={['column']}
            spacing={0}
            align={'center'}
            alignItems={'center'}
            justify={'center'}
          >
          {frameworks.map((framework) => (
            <Stack align={'center'} pt={2} spacing={'4'}>
              <Tag
                size={'lg'}
                borderRadius={'full'}
                variant={'ghost'}
                bgColor={framework.color}
                px={8}
                _hover={{
                  transition: 'all .2s ease',
                  transform: 'scale(1.23)'
                }}
              >
                <TagLeftIcon as={framework.icon}/>
                <TagLabel 
                  fontWeight={'semibold'}
                  textColor={'gray.800'}
                >
                  {framework.name}
                </TagLabel>
              </Tag>
            </Stack>
          ))}
          </Stack>
        </Stack>
        <Stack direction={'column'}>
          <Stack 
            align={'center'} 
            direction={'row'} 
            spacing={'2'} 
            pt={4} 
            pb={2}
          >
            <BiCodeCurly 
              size={27} 
              color={'gray'}
            />
            <Text
              color={'gray.300'}
              fontSize={'md'}
              fontWeight={'bold'}
            >
              Languages:
            </Text>
          </Stack>
          <Stack
            direction={['column']}
            spacing={0}
            align={'center'}
            alignItems={'center'}
            justify={'center'}
          >
          {languages.map((language) => (
            <Stack align={'center'} pt={2} spacing={'4'}>
              <Tag
                size={'lg'}
                borderRadius={'full'}
                variant={'ghost'}
                bgColor={language.color}
                px={8}
                _hover={{
                  transition: 'all .2s ease',
                  transform: 'scale(1.23)'
                }}
              >
                <TagLeftIcon as={language.icon}/>
                <TagLabel 
                  fontWeight={'semibold'}
                  textColor={'gray.800'}
                >
                  {language.name}
                </TagLabel>
              </Tag>
            </Stack>
          ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
