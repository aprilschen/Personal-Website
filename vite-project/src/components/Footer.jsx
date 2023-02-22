import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Box } from '@chakra-ui/react';
import Photo from '../assets/icon.png';
import { Flex } from '@chakra-ui/react';
import { Card, CardBody,  } from '@chakra-ui/react'

import { Divider } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Card>
            <Divider/>
            <CardBody px={'40px'}>
                <Flex justify="space-between" align="center">
                    <img src={Photo} width={'40px'} />
                    <Text fontSize="sm" color="subtle" ml={'5rem'}>
                        Made with 💜 by April Chen, 2023
                        </Text>
                    <ButtonGroup variant="ghost">
                        <IconButton
                        as="a"
                        href="https://www.linkedin.com/in/schen15/"
                        target={"_blank"}
                        aria-label="LinkedIn"
                        icon={<FaLinkedin fontSize="1.25rem" />}
                        />

                        <IconButton 
                        as="a" 
                        href="https://github.com/aprilschen"
                        target={"_blank"}
                        aria-label="GitHub" 
                        icon={<FaGithub fontSize="1.25rem" />} />

                        <IconButton 
                        as="a" 
                        href="https://www.instagram.com/shiwei_chen06/"
                        target={"_blank"}
                        aria-label="Instagram" 
                        icon={<FaInstagram fontSize="1.25rem" />} />
                    </ButtonGroup>
                </Flex>
            </CardBody>
        </Card>
      );
}