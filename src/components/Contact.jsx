import React from 'react';
import Navbar from './Navbar';
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import Footer from './Footer';
import Tales from '../assets/our_story_sdg.jpg';

const Contact = () => {
  return (
    <>
      {/* Full-screen image with Navbar on top */}
      <div className="relative h-screen">
        <img src={Tales} alt="Our Story" className="absolute top-0 left-0 w-full h-full object-cover" />

        {/* Navbar inside the same container to be placed on top of the image */}
        <div className="absolute inset-0 z-20">
          <Navbar />
        </div>

        {/* Overlay with text and contact details */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col justify-center z-10">
          <div className="text-white pl-20 pr-12 text-left">
            <h1 className="text-5xl font-bold mb-2">Liked what we do? Join Us Today</h1>
            <p className="text-4xl mb-4">Let's create a meaningful impact together!</p>

            {/* Reach out section */}
            <div className="mt-6">
              <strong className="text-2xl mb-4 block">Reach out to us:</strong>
              <div className="my-2 text-xl flex items-center">
                <FaPhone className="mr-2" />
                <span><a href="tel:+91-6283412360">+91-6283412360</a></span>
              </div>
              <div className="my-2 text-xl flex items-center">
                <FaEnvelope className="mr-2" />
                <span><a href="mailto:sustainablebhava@gmail.com">sustainablebhava@gmail.com</a></span>
              </div>
              <div className="my-2 text-xl flex items-center">
                <FaInstagram className="mr-2" />
                <span><a href="https://www.instagram.com/sustainablebhava">@sustainablebhava</a></span>
              </div>
            </div>
          </div>
        </div>

        {/* Cards at the bottom of the background image */}
        <div className="absolute bottom-0 left-0 w-full flex justify-around p-4 z-30">
          {/* Card styling */}
          <div className="flex flex-col bg-[#034d8a] bg-opacity-120 text-white w-1/3 py-6 px-4 rounded-lg">
            <div className="mb-4 text-center">
              <strong className="md:text-3xl text-2xl">Partner with us</strong>
            </div>
            <div className="my-1 md:text-xl mx-auto">
              <span>- Share resources and expertise</span>
            </div>
            <div className="my-1 md:text-xl mx-auto">
              <span>- Collaborate for strategic synergies</span>
            </div>
            <div className="my-1 md:text-xl mx-auto">
              <span>- Network and strengthen your brand</span>
            </div>
          </div>

          <div className="flex flex-col bg-yellow-500 bg-opacity-120 text-white w-1/3 py-6 px-4 rounded-lg">
            <div className="mb-4 text-center ">
              <strong className="md:text-3xl text-2xl">Invite us</strong>
            </div>
            <div className="my-1 md:text-xl mx-auto">
              <span>- Conduct sessions in your academic institution</span>
            </div>
            <div className="my-1 md:text-xl mx-auto">
              <span>- Get access to various learning resources</span>
            </div>
            <div className="my-1 md:text-xl mx-auto">
              <span>- Motivate your students to think outside the box</span>
            </div>
          </div>

          <div className="flex flex-col bg-[#034d8a] bg-opacity-120 text-white w-1/3 py-6 px-4 rounded-lg">
            <div className="mb-4 text-center">
              <strong className="md:text-3xl text-2xl">Join the team</strong>
            </div>
            <div className="my-1 md:text-xl mx-auto">
              <span>- Get involved as a volunteer or trainer</span>
            </div>
            <div className="my-1 md:text-xl mx-auto">
              <span>- Receive certificates, swags, and discounts</span>
            </div>
            <div className="my-1 md:text-xl mx-auto">
              <span>- Gain skill development and professional growth</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
