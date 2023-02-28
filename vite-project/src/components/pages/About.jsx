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
          <Heading color="blue.900" fontSize={40} letterSpacing="1px" py="3vh">
            About me
          </Heading>
          <Text fontSize={20} pb="15px">
              My name is Shiwei (I also go by April). I'm a Full-Stack software developer based in Cupertino, California. 
              I work as a programming instructor teaching web development at <a style={{textDecoration: 'underline'}}href="https://baycodingclub.com/website-designer-and-developer/" target={"_blank"}>
                  Bay Coding Club</a>, but also coach students for programming contests on my own.
          </Text>

          <Text fontSize={20} pb="15px">
              I've been building programs and games since I was young, and I've always enjoyed building 
              interesting software with real world applications. 
              A few years ago, I decided that I wanted to work full time as a software engineer. 
              I've been attending hackathons, building projects & cool apps, and competing in programming contests 
              ever since.
          </Text>

          <Text fontSize={20} pb="15px">
          I'm primarily interested in full-stack development, UI/UX design, and devops, but am open to experimenting
          with technologies and fields new to me. I also enjoy taking part-time Computer Science classes at De Anza College to supplement my 
          skills & experience.
          You can check out the projects I've made <OneTimeLink to='/portfolio' style={{textDecoration: 'underline'}}>here</OneTimeLink>.
          </Text>

          <Text fontSize={20} pb="15px">
            ...But I'm an interesting person, I sw-w--wear! (˚ ˃̣̣̥⌓˂̣̣̥ ) 
          </Text>

          <Text fontSize={20} pb="15px">
            When I'm not working or building web apps, 
            I enjoy taking my two pet Shibas on a walk, attending cosplay conventions, 
            and playing cello at my local amateur orchestra.
            Please, consider following my dogs, Mugi and Tino's <a style={{textDecoration: 'underline'}}href="https://www.instagram.com/alanspups/" target={"_blank"}>
              Instagram page</a>!
          </Text>
          </Box>
      </Flex>
    );
}