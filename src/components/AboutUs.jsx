import React from 'react'
import About_usContainer from './About_usContainer'
import Navbar from './Navbar'
import Footer from './Footer'
import Highlight from './Highlight'
import GallerySection from './GallerySection';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <About_usContainer/>
    {/* <Highlight/> */}
    <div className="text-center md:text-left mb-8 md:ml-24 ml-8 mt-16">
                    <h2 className="m-2 md:text-5xl text-3xl font-bold">
                    Engaging Youth Through Our Key Initiatives
                    </h2>
                </div>
    <GallerySection/>
    <Footer/>
    
    </>
  )
}

export default AboutUs