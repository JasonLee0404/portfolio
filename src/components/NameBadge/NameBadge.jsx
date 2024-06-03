import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const NameBadge = ({ name }) => {
    return (
      <Box
        display="inline-block"
        bg="blue.500"
        color="white"
        px={4}
        py={2}
        borderRadius="md"
        boxShadow="md"
        textAlign="center"
      >
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
      </Box>
    );
  };
  
  export default NameBadge;