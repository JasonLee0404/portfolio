import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NameBadge from './components/NameBadge/NameBadge';
import Menu from './components/Menu/Menu';

import './App.css'

function App() {

  return (
    <>
      <NameBadge name="Jason Le"/>
      <Menu/>
    </>
  )
}

export default App
