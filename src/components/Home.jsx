import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
import Sdgs from './Sdgs';
import './Home.css';
import Footer from './Footer';
import ImpactCreated from './ImpactCreated';
import Carousel from './Carousel';
import StoryChanger from './StoryChanger'; 
import IntroSection from './IntroSection'; // <--- 1. IMPORT THE NEW COMPONENT

const Home = () => {
    const [reportsOpen, setReportsOpen] = useState(false);
    return (
        <>
            <div className="Home-page-wrapper">
                <div className="home-main-container  flex flex-col  min-h-screen">
                   <Navbar />
                    <div className="carousel-container flex md:min-h-[400px] mt-8">
                     <Carousel />
                </div>
            </div>
            
            {/* 2. REPLACE THE OLD INTRO-CONTAINER DIV WITH THE NEW COMPONENT */}
            <section className="intro-section-container">
                <IntroSection />
            </section>

            <section className="story-changer-section">
                <StoryChanger /> 
            </section>

            <section className="sdgs-section-container">
                <h1 className="mt-2 mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-dark text-center">
                        The 17 SDGs
                </h1>
                <Sdgs/>
            </section>

            <section className="impact-section-container">
                <h1 className="mt-24 mb-6 text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-dark">
                        Words to Wonders
                </h1>
                <ImpactCreated/>
            </section>
            
            <Footer />
            </div>

            
        </>
    )
}

export default Home;