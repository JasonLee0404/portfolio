import React from 'react';
import { Box, Tooltip, Link, HStack} from '@chakra-ui/react';
import { FaLinkedin } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

const SocialMedia = ({}) => {
    return (
      <Box
        display="inline-block"
        bg="gray.200"
        color="black"
        borderRadius="sm"
        textAlign="left"
      >
        <HStack spacing={8}>
            <Tooltip label='https://www.linkedin.com/in/jasonle1402/'>
                <Link href='https://www.linkedin.com/in/jasonle1402/' color='gray.600'><FaLinkedin size={30}/></Link>
            </Tooltip>
            <Tooltip label='longle14231@gmail.com'>
                <Link href='mailto:longle14231@gmail.com' color='gray.600'><IoMailOpen size={30}/></Link>
            </Tooltip>
            <Tooltip label='https://github.com/JasonLee0404'>
                <Link href='https://github.com/JasonLee0404' color='gray.600'><FaGithub size={30}/></Link>
            </Tooltip>
        </HStack>
      </Box>
    );
  };
  
  export default SocialMedia;