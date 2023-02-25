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
    Divider
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
        <Box boxShadow="md"
            minWidth={'100vw'}
            bg={"brand.100"}
            style={{position: 'fixed', zIndex: 9000}}
            pt={4} pb={3}
            px={'10'}>
              {isDesktop ? (
                    <Flex >
                        <img src={Photo} width='50px'/>
                        <Spacer/>
                        <ButtonGroup  spacing="12" mt={1}>
                        <Button colorScheme= 'blue' key='Home'>
                                <Link to="/">
                                    Home
                                </Link>
                                </Button>
                            <Button colorScheme= 'purple' key='About'>
                                <Link to="/about">
                                    About
                                </Link>
                                </Button>
                            <Button colorScheme= 'green' key='Portfolio'>
                                <Link to="/portfolio">
                                    Portfolio
                                </Link>
                            </Button>
                            <Button colorScheme= 'pink' key='Contact'>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </Button>
                        </ButtonGroup>
                    </Flex>
              ) : (
                <Flex justify={'space-evenly'}>
                    <ButtonGroup spacing='5vw'>
                            <Button colorScheme= 'blue' key='Home'>
                                <Link to="/">
                                    Home
                                </Link>
                                </Button>
                            <Button colorScheme= 'purple' key='About'>
                                <Link to="/about">
                                    About
                                </Link>
                                </Button>
                            <Button colorScheme= 'green' key='Portfolio'>
                                <Link to="/portfolio">
                                    Portfolio
                                </Link>
                            </Button>
                            <Button colorScheme= 'pink' key='Contact'>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </Button>
                    </ButtonGroup>
                </Flex>

              )}
        </Box>
    );
  }