import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Box } from '@chakra-ui/react';
import Photo from '../assets/icon.png';
export default function Footer() {
    return (
        <Box px={'40px'} py={{ base: '6'}}>
          <Stack spacing={{ base: '4', md: '5' }}>
            <Stack justify="space-between" direction="row" align="center">
              <img src={Photo} width={'40px'} />
              <ButtonGroup variant="ghost">
                <IconButton
                  as="a"
                  href="#"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin fontSize="1.25rem" />}
                />
                <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Twitter"
                  icon={<FaTwitter fontSize="1.25rem" />}
                />
              </ButtonGroup>
            </Stack>
            <Text fontSize="sm" color="subtle">
              &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
            </Text>
          </Stack>
        </Box>
      );
}