import { Box, Text } from "@chakra-ui/react"

function Hero() {
    return (
        <Box>
            <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            textAlign="center"
            >
            Shiwei Chen
            </Text>
        </Box>
    );
}

export default Hero