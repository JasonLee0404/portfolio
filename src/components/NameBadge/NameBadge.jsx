import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const NameBadge = ({ name }) => {
    return (
        <>
            <VStack spacing={2}>
                <Text fontSize="7xl" fontWeight="bold">
                    {name}
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                    Software Engineer
                </Text>
            </VStack>
            
            <Text fontSize="l" fontWeight="bold">
                A student of the trade
            </Text>
        </>
    );
  };
  
  export default NameBadge;