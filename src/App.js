// src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import Blogs from './components/Blogs';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import Blog4 from './pages/Blog4';
import Blog5 from './pages/Blog5';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='AboutUs' element={<AboutUs />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='OurServices' element={<OurServices />} />
        <Route path='Blogs' element={<Blogs />} />
        <Route path='blog1' element={<Blog1/>} />
        <Route path='blog2' element={<Blog2/>} />
        <Route path='blog3' element={<Blog3/>} />
        <Route path='blog4' element={<Blog4/>} />
        <Route path='blog5' element={<Blog5/>} />
      </Routes>
    </>
  );
};

export default App;