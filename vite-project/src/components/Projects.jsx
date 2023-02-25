import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import PortfolioCard from './PortolioCard'
import { Wrap, WrapItem } from '@chakra-ui/react'
function Projects() {
    return (
        <Box
        mx='40px'
        mb='40px'>
            <Text fontSize='5xl' textAlign={'center'} mb={4}>
                Projects
            </Text>
            <Wrap justify={'space-evenly'}>
                <WrapItem>
                    <PortfolioCard
                    title={"Café Stile"}
                    description={"Marketplace Web App"}
                    image={"https://raw.githubusercontent.com/aprilschen/Cafe-Stile/main/assets/demo1.png"}
                    link={"/cafe-stile"}
                    date={"Feb 2023"}
                    />
                </WrapItem>

                <WrapItem>
                    <PortfolioCard
                    title={"Digicache"}
                    description={"Single page Geotagging App"}
                    image={"https://raw.githubusercontent.com/aprilschen/Digicache/main/assets/demo1.png"}
                    link={"/digicache"}
                    date={"Jan 2023"}
                    />
                </WrapItem>

                <WrapItem>
                    <PortfolioCard
                    title={"Little Lemon Website"}
                    description={"Restaurant Website"}
                    image={"https://raw.githubusercontent.com/aprilschen/Little-Lemon-Website/main/assets/readme-image1.png"}
                    link={"/little-lemon"}
                    date={"Nov 2022"}
                    />
                </WrapItem>
            </Wrap>
        </Box>
    );
}

export default Projects