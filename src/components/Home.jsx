import React from 'react'
import Navbar from './Navbar';
import { useState } from 'react';
import impactCreated from '../assets/impact_created.svg'
import Sdgs from './Sdgs';
import './Home.css'
import Initiatives from './Initiatives';
import FooterUpper from './FooterUpper';
import Footer from './Footer';
import Group_6 from '../SB photos/Group 6.png'
import Group_9 from '../SB photos/Group 9.jpg'
import ImpactCreated from './ImpactCreated';
import GallerySection from './GallerySection';
import Carousel from './Carousel';

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
            <div className="intro-container">
                <div className="intro-image">
                    <img src={Group_9} alt="Sustainable Bhava" />
                </div>
                <div className="intro-text">
                    <span className="intro-title">Sustainable Bhava</span>, is a timely tale,
                    Which through the magic of stories and transformative training, is empowering young minds to become the guardians of our planet's well being, by nurturing a deep sense of ownership for a sustainable future in their hearts.
                    Weaving captivating real life stories and inspiring young minds to protect and preserve mother earth.🌍
                    <br />
                    <br />
                    The curiosity of these tiny hearts ignites our passion to keep making the difference.
                    Together we are planting the seeds of responsibility and love for our home, our mother, our earth.
                    Join us.
                    Together, we will equip the next generation with the tools they need to combat climate change and build a sustainable future.
                </div>
            </div>

            
            <div className="story-section">
  <div className="story-content">
    <div className="story-left">
      <div className="story-header">
        <span className="story-title">How? A story can change the world.</span>
        <br />
        <span className="story-subtitle">
          Explore stories and be part of shaping minds, moving hearts, and
          changing the world.
        </span>
      </div>
      <div className="story-text">
        <div className="story-details">
          <ul>
            <li>Every moment is a tale waiting to unfold.</li>
            <li>They hold the essence and beauty of life's journey.</li>
            <li>They carry emotions as precious threads of our existence.</li>
            <li>We only live once! Yet, our actions, experiences, and their outcomes are eternal.</li>
            <li>A tale woven with emotions and relatable characters can shape our actions and habits.</li>
            <li>This will guide and ignite our journey towards a cleaner, more peaceful, and thriving planet.</li>
            <li>This planet is the cherished home for 8.7 million species. It is our shared duty to protect its beauty.</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="story-image">
      <img src={Group_6} alt="Story Image" />
    </div>
  </div>
</div>



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
            {/* <Initiatives/> */}

            {/* <div className="gallery-section">
                <strong></strong>
            </div> */}

            {/* <GallerySection/> */}
            
            {/* <FooterUpper/> */}
            <Footer />
        </>
    )
}

export default Home