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
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow">
                    <Carousel />
                </div>
            </div>
            
            {/* 2. REPLACE THE OLD INTRO-CONTAINER DIV WITH THE NEW COMPONENT */}
            <IntroSection />

            <StoryChanger /> 

            <div className="sdgs-section">
                <strong>The 17 SDGs</strong>
            </div>
            <Sdgs/>
            <br />
            <br />
            <br />
            <div className="impact-section">
                <strong>Words to Wonders</strong>
            </div>

            <ImpactCreated/>
            <br/>
            <br />
            
            <Footer />
        </>
    )
}

export default Home;