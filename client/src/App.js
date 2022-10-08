import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Home from './components/pages/Home'
import ContactState from './context/contact/ContactState'

const App = () => {
  return (
    <ContactState>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </ContactState>
  )
}

export default App