import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import PortfolioCard from './PortolioCard'
import { Flex } from "@chakra-ui/react";
import { Wrap, WrapItem } from '@chakra-ui/react'
function Projects() {
    return (
        <Box
        mx='40px'
        my='150px'>
            <Text>
                Projects
            </Text>
            <Wrap justify={'center'}>
                <WrapItem>
                    <PortfolioCard/>
                </WrapItem>

                <WrapItem>
                    <PortfolioCard/>
                </WrapItem>

                <WrapItem>
                    <PortfolioCard/>
                </WrapItem>
            </Wrap>
        </Box>
    );
}

export default Projects