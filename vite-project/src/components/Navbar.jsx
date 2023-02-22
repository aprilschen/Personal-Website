import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Spacer,
    HStack,
    IconButton,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'
  //import { Logo } from './Logo'
  import Photo from '../assets/icon.png'

  export default function App () {
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    })

    return (
      <Box
        as="section"
        pb={{
        }}
      >
        <Box boxShadow="sm"
            py={{
              lg:'5',
              sm:'3'
            }}
            px={{sm:'10'}}>
              {isDesktop ? (
                    <Flex>
                        <img src={Photo} width='50px'/>
                        <Spacer/>
                        <ButtonGroup variant="link" spacing="12">
                            <Button key='Home'>Home</Button>
                            <Button key='About'>About</Button>
                            <Button key='Portfolio'>Portfolio</Button>
                            <Button key='Contact'>Contact</Button>
                        </ButtonGroup>
                    </Flex>
              ) : (
                <Flex justify={'space-evenly'} mx={'40px'}>
                    <ButtonGroup variant="link" spacing='15vw'>
                        <Button key='Home'>Home</Button>
                        <Button key='About'>About</Button>
                        <Button key='Portfolio'>Portfolio</Button>
                        <Button key='Contact'>Contact</Button>
                    </ButtonGroup>
                </Flex>

              )}
        </Box>
      </Box>
    )
  }