import React from 'react';
import { Box, Text, Tag, HStack} from '@chakra-ui/react';

const Position = ({ time, company, positionName, technologies}) => {
    return (
      <Box
        padding={3}
        bg="gray.200"
        width="35rem"
        borderRadius="1rem"
        textAlign="left"
        _hover={{ bg: 'gray.300', boxShadow: 'lg', transform: 'scale(1.05)'}}
      >
        <Text>
            {time}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
            {company}
        </Text>
        <Text fontSize="md" fontWeight="bold">
            {positionName}
        </Text>

        <HStack spacing={2}>
            {technologies.map((tech, index) => (
                <Tag size='sm' colorScheme='teal'>
                    {tech}
                </Tag>
            ))}
        </HStack>
        
      </Box>
    );
  };
  
  export default Position;