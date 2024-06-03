import React from 'react';
import { Box, Text, Tag, HStack} from '@chakra-ui/react';

const Position = ({ time, positionName, technologies}) => {
    return (
      <Box
        display="inline-block"
        bg="gray.200"
        color="black"
        width="40rem"
        borderRadius="sm"
        textAlign="left"
        _hover={{ bg: 'gray.300', boxShadow: 'lg', transform: 'scale(1.05)'}}
      >
        <Text>
            {time}
        </Text>

        <Text>
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