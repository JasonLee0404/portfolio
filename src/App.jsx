import React from 'react';
import NameBadge from './components/NameBadge/NameBadge';
import Menu from './components/Menu/Menu';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Position from './components/Position/Position';
import { VStack, Flex, Box } from '@chakra-ui/react';
import './App.css';

function App() {
  const experience = {
    sweat: {
      time: 'Dec 2022 - Present',
      company: 'Sweat',
      positionName: 'Platform Software Engineer',
      technologies: ['Ruby', 'Ruby on Rails', 'Ember.js', 'Javascript', 'JQuery', 'Go', 'PostgresSQL', 'Atlassian Suite']
    },
    amplified_intelligence: {
      time: 'Jan 2022 - Dec 2022',
      company: 'Amplified Intelligence',
      positionName: 'Product Software Engineer',
      technologies: ['React', 'Typescript', 'PostgresSQL', 'NodeJS', 'C#/.NET', 'TailwindCSS', 'Atlassian Suite']
    },
    complexica: {
      time: 'June 2021 - December 2021',
      company: 'Complexica',
      positionName: 'Java Software Engineer',
      technologies: ['Python', 'Django', 'Java', 'SpringBoot', 'PostgresSQL', 'MongoDB', 'Atlassian Suite']
    },
    marango: {
      time: 'June 2019 - June 2021',
      company: 'Marango',
      positionName: 'C++ Software Engineer',
      technologies: ['C++', 'Lua', 'XML', 'MySQL', 'Boost', 'wxWidgets', 'Trello', 'Figma']
    },
  };

  return (
    <>
      <Flex height="100vh">
        {/* Left Column */}
        <Box
          flex="1"
          bg="yellow.200"
          overflowY="auto"
          width="100vh"
        >
          <Box pt="20%">
            <NameBadge name="Jason Le" />
          </Box>
          
          <Box pt="20%">
            <Menu />
          </Box>

          <Box pt="20%">
            <SocialMedia />
          </Box>
        </Box>

        {/* Right Column */}
        <Box
          flex="1"
          bg="red.500"
          overflowY="auto"
        >
          <VStack spacing={3} pt="20%">
            {Object.values(experience).map((exp, index) => (
              <Position
                key={index}
                time={exp.time}
                company={exp.company}
                positionName={exp.positionName}
                technologies={exp.technologies}
              />
            ))}
          </VStack>
        </Box>
      </Flex>
    </>
  );
}

export default App;
