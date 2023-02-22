import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Box } from '@chakra-ui/react';
import Photo from '../assets/icon.png';
export default function Footer() {
    return (
        <Box mx={'40px'} py={{ base: '6'}}>
          <Stack>
            <Stack justify="space-between" direction="row" align="center">
              <img src={Photo} width={'40px'} />

              <Text fontSize="sm" color="subtle">
                Made with 💜 by April Chen, 2023
              </Text>

              <ButtonGroup variant="ghost">
                <IconButton
                  as="a"
                  href="#"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin fontSize="1.25rem" />}
                />
                <IconButton 
                as="a" 
                href="#"
                aria-label="GitHub" 
                icon={<FaGithub fontSize="1.25rem" />} />
              </ButtonGroup>
            </Stack>
          </Stack>
        </Box>
      );
}