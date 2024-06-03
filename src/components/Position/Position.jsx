import React from 'react';
import { Box, Text, List, ListItem } from '@chakra-ui/react';

const Position = ({ time, positionName, technologies}) => {
    return (
      <Box
        display="inline-block"
        bg="gray.200"
        color="black"
        width="200px"
        borderRadius="sm"
        textAlign="left"
      >
        <Text>
            {time}
        </Text>

        <Text>
            {positionName}
        </Text>

        {technologies.map((tech, index) => (
            <Text key={index} fontSize="sm">- {tech}</Text>
        ))}
      </Box>
    );
  };
  
  export default Position;