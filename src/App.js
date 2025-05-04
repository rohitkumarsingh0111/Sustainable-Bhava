import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Initiatives from './components/Initiatives'
import AboutUs from './components/AboutUs'
import Learn from './components/Learn'
import OurServices from './components/OurServices'
import SignIn from './components/SignIn'


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path ='/' element = {<Home/>}/>
        <Route path='AboutUs' element={<AboutUs/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Learn' element={<Learn/>}/>
        <Route path='OurServices' element={<OurServices/>}/>
        <Route path="/signin" element={<SignIn />} /> 
      </Routes>
    </>
  )
}

export default App