import { Box, Text, Heading } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import PortfolioCard from '../PortolioCard';

export default function Portfolio() {
    return (
      <Box
      p="40px"
      pt={'10vh'}
      minHeight={'100vh'}
    >
            <Text fontSize={75} textAlign={'center'} mb={5}>
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