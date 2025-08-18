import React from 'react';
import About_usContainer from './About_usContainer';
import Navbar from './Navbar';
import Footer from './Footer';
import GallerySection from './GallerySection';
import './About_us.css'; 

const AboutUs = () => {
  return (
    <>
      <Navbar/>
      <About_usContainer/>
      {/* Change the wrapper div to be centered and remove margins */}
      <div className="text-center mb-8 mt-16 px-4">
        <h2 className="section-heading m-2">
          Engage with our Initiatives
        </h2>
      </div>
      <GallerySection/>
      <Footer/>
    </>
  );
};

export default AboutUs;