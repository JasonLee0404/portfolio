import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';

const Menu = ({}) => {
    return (
        <>
            <Link
                _hover={{ textDecoration: 'underline' }}
            >
                <Text fontSize="l" fontWeight="bold">About</Text>
            </Link>

            <Link
                _hover={{ textDecoration: 'underline' }}
            >
                <Text fontSize="l" fontWeight="bold">Experience</Text>
            </Link>

            <Link
                _hover={{ textDecoration: 'underline' }}
            >
                <Text fontSize="l" fontWeight="bold">Technologies</Text>
            </Link>
            
        </>
    );
  };
  
  export default Menu;