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
import { GrMysql } from 'react-icons/gr'
import { HiCode } from 'react-icons/hi'
import { IoLogoNodejs } from 'react-icons/io'
import { 
  SiPhp,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiFlask
} from 'react-icons/si'

const frameworks = [
  {
    name: 'Express.js',
    icon: IoLogoNodejs,
    color: 'gray.50'
  },
  {
    name: 'Flask',
    icon: SiFlask,
    color: 'gray.50'
  }
]

const languages = [
  {
    name: 'Node.js',
    icon: IoLogoNodejs,
    color: '#8bc500'
  },
  {
    name: 'PHP',
    icon: SiPhp,
    color: '#6c7eb7'
  },
  {
    name: 'Python',
    icon: SiPython,
    color: '#3571a3'
  },
  {
    name: 'MySQL',
    icon: GrMysql,
    color: '#e78e00'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#306092'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#1e8b37'
  }
]


export default function BackEnd(){
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
        borderColor: 'coral',
      }}
    >
      <Stack 
        align={'center'} 
        justify={'center'} 
        direction={'row'} 
        spacing={'2'} 
        py={2}
      >
        <HiCode 
          size={92} 
          color={'#be0000'}
        />
        <Text
          color={'gray.300'}
          fontSize={'xl'}
          fontWeight={'extrabold'}
        >
          Back End
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
