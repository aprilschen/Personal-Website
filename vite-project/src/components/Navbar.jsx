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
  import Photo from '../assets/react.svg'

  export default function App () {
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    })

    return (
      <Box
        as="section"
        pb={{
          base: '12',
          md: '24',
        }}
      >
        <Box boxShadow="sm"
            py={{
              lg: '5',
            }} px={{sm:'10'}}>
            <Flex>
              <img src={Photo} />
              <Spacer/>
              {isDesktop ? (
                  <ButtonGroup variant="link" spacing="8">

                    <Button key='About'>About</Button>
                    <Button key='About'>Portfolio</Button>
                    <Button key='About'>Contact</Button>

                  </ButtonGroup>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </Flex>
        </Box>
      </Box>
    )
  }