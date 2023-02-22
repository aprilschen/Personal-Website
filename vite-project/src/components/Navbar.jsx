import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Spacer,
    HStack,
    IconButton,
    useBreakpointValue
  } from '@chakra-ui/react'
  //import { Logo } from './Logo'
  import Photo from '../assets/icon.png';
  import {Link, Router} from 'react-router-dom';

  export default function Navbar () {
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
                            <Button key='Home'>
                                <Link to="/">
                                    Home
                                </Link>
                                </Button>
                            <Button key='About'>
                                <Link to="/about">
                                    About
                                </Link>
                                </Button>
                            <Button key='Portfolio'>
                                <Link to="/portfolio">
                                    Portfolio
                                </Link>
                            </Button>
                            <Button key='Contact'>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </Button>
                        </ButtonGroup>
                    </Flex>
              ) : (
                <Flex justify={'space-evenly'} mx={'40px'}>
                    <ButtonGroup variant="link" spacing='15vw'>
                        <Button key='Home'>
                                <Link to="/">
                                    Home
                                </Link>
                                </Button>
                            <Button key='About'>
                                <Link to="/about">
                                    About
                                </Link>
                                </Button>
                            <Button key='Portfolio'>
                                <Link to="/portfolio">
                                    Portfolio
                                </Link>
                            </Button>
                            <Button key='Contact'>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </Button>
                    </ButtonGroup>
                </Flex>

              )}
        </Box>
      </Box>
    )
  }