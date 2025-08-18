import React, { useState } from 'react';

// --- COMPONENT IMPORTS ---
import AccordionSection from './AccordionSection'; // Adjust path if needed
import './About_us.css';
// --- ASSET IMPORTS ---
import The_idea from "../assets/The_idea.png";
import team_member_1 from "../assets/our_team_1.jpg";
import team_member_2 from "../assets/our_team_2.jpg";
import team_member_3 from "../assets/our_team_3.jpg";
import imageHero1 from "../SB photos/Picture 2.jpeg";
import imageHero2 from "../SB photos/6055154510512374557.jpg";
import imageHero3 from "../SB photos/Picture 1.jpeg";
import imageHero4 from "../SB photos/6055154510512374538.jpg";
import imageHero5 from "../SB photos/Picture 2 Mani.jpeg";

const About_usContainer = () => {
    const [activeExpert, setActiveExpert] = useState(null);

    return (
        <>
            {/* Hero Section */}
            <section className="w-full py-16 md:py-20 bg-gradient-to-br from-yellow-500 via-yellow-300 to-yellow-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                                <span className="text-white">Educating young minds.</span>
                                <br className="hidden md:block" />
                                <span className="text-gray-800">Empowering India's future.</span>
                            </h1>
                            <p className="mt-6 text-lg sm:text-xl text-gray-100 font-medium">
                                Guided by 17 Global Goals.
                            </p>
                        </div>
                        <div className="grid grid-cols-5 grid-rows-3 gap-3 h-[500px]">
                            <div className="col-span-3 row-span-1 rounded-xl overflow-hidden shadow-lg"><img src={imageHero1} alt="Smiling child reading a book" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" /></div>
                            <div className="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg"><img src={imageHero2} alt="Two boys studying together" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" /></div>
                            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg"><img src={imageHero3} alt="Happy girl with braided hair" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" /></div>
                            <div className="col-span-3 row-span-2 grid grid-cols-3 gap-3">
                                <div className="col-span-1 rounded-xl overflow-hidden shadow-lg"><img src={imageHero4} alt="Young boy looking at the camera" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" /></div>
                                <div className="col-span-2 rounded-xl overflow-hidden shadow-lg"><img src={imageHero5} alt="Smiling girl" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Use the new, self-contained Accordion component here */}
            <AccordionSection />

            {/* Our Story
            <div className="bg-white py-8">
                <div className="flex flex-col md:flex-row items-center md:mx-28 m-8">
                    <div className="md:w-1/2 text-black md:pt-8 py-4 md:pl-4 mx-auto text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">How it all started?</h2>
                        <p className="text-base md:text-xl text-justify">
                            Two students, feeling like they were lost in life's maze, stumbled upon an idea.<br />
                            They couldn't help but notice something: their fellow students and even their curriculum seemed to be snoozing on sustainability and environmental awareness. Determined to make a difference, they decided to be the change they wanted to see. They gathered some friends who shared their vision and worked tirelessly through nights, fueled by coffee and their dreams.<br />
                            And there it was:<br />
                            <strong>SUSTAINABLE BHAVA "telling tales for a better tomorrow".</strong>
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                        <img src={The_idea} alt="The Idea" className="rounded-lg max-w-full h-auto" />
                    </div>
                </div>
            </div> */}

            {/* Our Experts */}
            <div className="bg-yellow-400 py-12">
                <div className="text-center mb-8 px-4">
                    <h2 className="section-heading m-2">Our Experts</h2>
                </div>
                <div className="flex flex-col md:flex-row md:mx-36 md:mb-16 mb-4 gap-8">
                    {[{ img: team_member_1, name: "Mr. Rumit Walia" }, { img: team_member_2, name: "Ms. Rachna Puri" }, { img: team_member_3, name: "Ms. Poojita Goswami" }].map((member, index) => (
                        <div key={index} className="flex flex-col basis-1/3 py-4 p-1 rounded-lg items-center">
                            <div className="relative w-full h-96 md:w-80 group" onClick={() => setActiveExpert(activeExpert === index ? null : index)} onMouseLeave={() => setActiveExpert(null)} style={{ cursor: 'pointer' }}>
                                <img src={member.img} alt={`team member ${index + 1}`} className="w-full h-full object-cover rounded-lg border-8 border-white shadow-lg" />
                                <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${activeExpert === index ? "opacity-100" : ""}`} style={{ pointerEvents: "none" }}>
                                    {member.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default About_usContainer;