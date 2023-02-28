import { Box, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { Link as OneTimeLink} from "react-router-dom";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function About() {
  return (
    <Flex
      flexDirection="column"
      p="40px"
      justifyContent="space-between"
    >
      <Box>
        <Heading color="blue.900" fontSize={40} letterSpacing="1px" pb="3vh">
          Welcome to my site!
        </Heading>
        <Text pb="10px" fontSize={20} >
            My name is Shiwei (I also go by April). I'm a Full-Stack software developer, based in Cupertino, California. 
            I currently teach web development and general programming at <a style={{textDecoration: 'underline'}}href="https://baycodingclub.com/website-designer-and-developer/" target={"_blank"}>
                Bay Coding Club</a> and coach students for competitive programming contests on my own.
        </Text>

        <Text 
        pb="10px" fontSize={20} >
            I'm interested in full-stack web development, UI/UX design, devops, and distributed systems.
        </Text>
      </Box>

      <Link color="blue.800" fontSize={20} >
        <OneTimeLink to='/about' >
            Learn more about me
        </OneTimeLink>
        <Icon as={FiArrowUpRight} ml="8px" h={5} w={5} />
      </Link>
    </Flex>
  );
}