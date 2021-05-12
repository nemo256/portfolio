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
import { IoIosFlash } from 'react-icons/io'
import { RiWindowLine } from 'react-icons/ri'
import { 
  SiMaterialUi,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextDotJs,
  SiGatsby,
  SiReact
} from 'react-icons/si'

const frameworks = [
  {
    name: 'React',
    icon: SiReact,
    color: '#00d8ff'
  },
  {
    name: 'Next.js',
    icon: SiNextDotJs,
    color: 'gray.50'
  },
  {
    name: 'Gatsby',
    icon: SiGatsby,
    color: '#744c9e'
  },
  {
    name: 'Chakra-UI',
    icon: IoIosFlash,
    color: '#29bfb3'
  },
  {
    name: 'Material-UI',
    icon: SiMaterialUi,
    color: '#2196f3'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#1dacbc'
  }
]

const languages = [
  {
    name: 'HTML',
    icon: SiHtml5,
    color: '#e34f26'
  },
  {
    name: 'CSS',
    icon: SiCss3,
    color: '#2262af'
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#f7e018'
  }
]


export default function FrontEnd(){
  return (
    <Box
      bg={'black'}
      p={4}
      rounded={'2xl'}
      border={'8px'}
      minW={'37%'}
      _hover={{
        transition: 'all .3s ease',
        transform: 'scale(1.016)',
        borderColor: 'indigo'
      }}
    >
      <Stack 
        align={'center'} 
        justify={'center'} 
        direction={'row'} 
        spacing={'2'} 
        py={2}
      >
        <RiWindowLine 
          size={92} 
          color={'blue'}
        />
        <Text
          color={'gray.300'}
          fontSize={'xl'}
          fontWeight={'extrabold'}
        >
          Front End
        </Text>
      </Stack>
      <Divider />
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
            py={2}
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
            py={2}
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
    </Box>
  )
}
