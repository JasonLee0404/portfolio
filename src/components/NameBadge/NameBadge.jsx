import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const NameBadge = ({ name }) => {
    return (
      <Box
        display="inline-block"
        bg="gray.200"
        color="black"
        width="200px"
        borderRadius="sm"
        textAlign="left"
      >
        <Text fontSize="2xl" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="l" fontWeight="bold">
          Software Engineer
        </Text>
        <Text fontSize="l" fontWeight="bold">
          A student of the trade
        </Text>
      </Box>
    );
  };
  
  export default NameBadge;