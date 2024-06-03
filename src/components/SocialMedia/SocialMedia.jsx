import React from 'react';
import { Box, Tooltip, Link} from '@chakra-ui/react';
import { FaLinkedin } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";

const SocialMedia = ({}) => {
    return (
      <Box
        display="inline-block"
        bg="gray.200"
        color="black"
        width="200px"
        borderRadius="sm"
        textAlign="left"
      >
        <Tooltip label='https://www.linkedin.com/in/jasonle1402/'>
            <Link href='https://www.linkedin.com/in/jasonle1402/' color='gray.600'><FaLinkedin /></Link>
        </Tooltip>
        <Tooltip label='longle14231@gmail.com'>
                    <Link href='mailto:longle14231@gmail.com' color='gray.600'><IoMailOpen /></Link>
                </Tooltip>
      </Box>
    );
  };
  
  export default SocialMedia;