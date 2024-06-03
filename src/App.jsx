import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NameBadge from './components/NameBadge/NameBadge';
import Menu from './components/Menu/Menu';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Position from './components/Position/Position';
import { VStack } from '@chakra-ui/react';
import './App.css'

function App() {

  const experience = {
    marango: {
      time: 'June 2019 - June 2021',
      positionName: 'C++ Software Engineer',
      technologies: ['C++', 'Lua', 'XML', 'MySQL', 'Boost', 'wxWidgets', 'Trello', 'Figma']
    },
    complexica: {
      time: 'June 2021 - December 2021',
      positionName: 'Java Software Engineer',
      technologies: ['Python', 'Django', 'Java', 'SpringBoot', 'PostgresSQL', 'MongoDB', 'Atlassian Suite']
    }, 
    amplified_intelligence: {
      time: 'Jan 2022 - Dec 2022',
      positionName: 'Product Software Engineer',
      technologies: ['React', 'Typescript', 'PostgresSQL', 'NodeJS', 'C#/.NET', 'TailwindCSS', 'Atlassian Suite']
    },
    sweat: {
      time: 'Dec 2022 - Present',
      positionName: 'Platform Software Engineer',
      technologies: ['Ruby', 'Ruby on Rails', 'Ember.js', 'Go', 'PostgresSQL', 'Atlassian Suite']
    }
  };


  return (
    <>
      <NameBadge name="Jason Le"/>
      <Menu/>
      <SocialMedia/>
      <VStack>
        {Object.values(experience).map((exp, index) => (
          <Position
            key={index}
            time={exp.time}
            positionName={exp.positionName}
            technologies={exp.technologies}
          />
        ))}
      </VStack>
    </>
  )
}

export default App
