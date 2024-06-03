import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NameBadge from './components/NameBadge/NameBadge';
import Menu from './components/Menu/Menu';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Position from './components/Position/Position';

import './App.css'

function App() {

  return (
    <>
      <NameBadge name="Jason Le"/>
      <Menu/>
      <SocialMedia/>
      <Position/>
    </>
  )
}

export default App
