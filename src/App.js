// src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import Blogs from './components/Blogs';
import QuickTestForm from './components/QuickTestForm';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='AboutUs' element={<AboutUs />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='OurServices' element={<OurServices />} />
        <Route path='Blogs' element={<Blogs />} />
        <Route path="/quick-test" element={<QuickTestForm />} />
      </Routes>
    </>
  );
};

export default App;