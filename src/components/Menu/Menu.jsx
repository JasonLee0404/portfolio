import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Menu = ({}) => {
    return (
      <Box
        display="inline-block"
        bg="gray.200"
        color="black"
        width="200px"
        borderRadius="sm"
        textAlign="left"
      >
        <Text fontSize="l" fontWeight="bold">
          About
        </Text>
        <Text fontSize="l" fontWeight="bold">
          Experience
        </Text>
        <Text fontSize="l" fontWeight="bold">
          Technologies
        </Text>
      </Box>
    );
  };
  
  export default Menu;