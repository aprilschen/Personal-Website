import { Box, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { Link as OneTimeLink} from "react-router-dom";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
export default function AboutPage() {
    return (
        <Flex
        flexDirection="column"
        p="40px"
        justifyContent="space-between"
        pt={'10vh'}
        minHeight={'100vh'}
      >
        <Box>
          <Heading color="blue.900" fontSize={28} letterSpacing="1px" pb="16px">
            Welcome to my site!
          </Heading>
          <Text pb="10px">
              My name is Shiwei (I also go by April). I'm a Full-Stack software developer, based in Cupertino, California. 
              I teach web development and general programming at <a style={{textDecoration: 'underline'}}href="https://baycodingclub.com/website-designer-and-developer/" target={"_blank"}>
                  Bay Coding Club</a> and coach students for competitive programming contests on my own.
          </Text>
  
          <Text 
          pb="20px">
              I'm broadly interested in web development, algorithms, UI/UX design, devops, and distributed systems.
          </Text>
        </Box>
  
        <Link color="blue.800">
          <OneTimeLink to='/about'>
              Learn more
          </OneTimeLink>
          <Icon as={FiArrowUpRight} ml="10px" h={5} w={5} />
        </Link>
      </Flex>
    );
}