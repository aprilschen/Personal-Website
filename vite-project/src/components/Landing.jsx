import { Box, Divider, Text } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react";
import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
function Hero() {
    return (
        <Box
            minHeight={'100vh'}
            bg="brand.100"
            justify='center'
            align='center'

            >
            <Flex
            justify='center'
            align='flex-end'
            minHeight={'50vh'}>
                <Text
                fontSize="6xl"
                fontWeight="medium"
                >
                    Shiwei Chen
                </Text>
            </Flex>

            <Divider borderColor="black" borderWidth="1px" width={'45vh'} mt={-3} mb={5}/>

            <ButtonGroup>
                        <IconButton
                        mx={5}
                        colorScheme= 'blue'
                        as="a"
                        href="https://www.linkedin.com/in/schen15/"
                        target={"_blank"}
                        aria-label="LinkedIn"
                        icon={<FaLinkedin fontSize="1.25rem" />}
                        />

                        <IconButton
                        mx={5}
                        colorScheme= 'purple'
                        as="a"
                        href="https://github.com/aprilschen"
                        target={"_blank"}
                        aria-label="GitHub"
                        icon={<FaGithub fontSize="1.25rem" />} />

                        <IconButton
                        mx={5}
                        colorScheme= 'pink'
                        as="a"
                        href="https://www.instagram.com/shiwei_chen06/"
                        target={"_blank"}
                        aria-label="Instagram"
                        icon={<FaInstagram fontSize="1.25rem" />} />
                    </ButtonGroup>
        </Box>
    );
}

export default Hero