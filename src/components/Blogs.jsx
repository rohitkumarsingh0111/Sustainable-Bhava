import React from 'react';
import Navbar from './Navbar'
import './Blogs.css'; 
import { Link } from "react-router-dom";
import BlogCard1 from "../assets/BlogCard1.png";
import BlogCard2 from "../assets/BlogCard2.png";
import BlogCard3 from "../assets/BlogCard3.png";
import BlogCard4 from "../assets/BlogCard4.png";



const Blogs = () => {
  return (
    <>
    <Navbar/>
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Featured Post Section */}
        <section className="mb-16">
          <Link to="#" className="featured-post blog-card block relative w-full h-96 rounded-2xl overflow-hidden shadow-lg"
            >
            <img src="https://placehold.co/1200x800/005A9C/FFFFFF?text=Featured+Story" alt="A feature story about empowering children through storytelling" className="w-full h-full object-cover" />
            <div className="overlay absolute inset-0"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="text-sm font-bold uppercase tracking-widest">Featured</span>
              <h1 className="text-3xl lg:text-4xl font-extrabold mt-2">The Ripple Effect: How One Story Can Inspire a Village</h1>
              <p className="mt-2 max-w-2xl text-gray-200">
                Join us as we explore the journey of a single narrative that sparked a wave of environmental action in a rural community, proving that the most powerful tool for change is a story well told.
              </p>
            </div>
            <div className="absolute top-6 right-6 bg-white p-3 rounded-full text-brand-dark">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
          </Link>
        </section>

        {/* Recent Blog Posts Section */}
        <section>
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Recent blog posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Post 1 */}
            <a href="blog1" className="blog-card block bg-white rounded-2xl overflow-hidden shadow-md">
              <img className="h-56 w-full object-cover" src={BlogCard1} alt="An open book with illustrations" />
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-blue">Psychological Education</p>
                <h3 className="mt-2 text-xl font-bold text-brand-dark">Eco Anxiety And Mental Health</h3>
                <p className="mt-3 text-gray-600">How to stay motivated and positive while studying environmental issues ?</p>
                <div className="mt-4 flex items-center">
                  <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/333333/FFFFFF?text=P" alt="Author avatar" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-brand-dark">Priya Das</p>
                    <p className="text-sm text-gray-500">08 Aug 2025</p>
                  </div>
                </div>
              </div>
            </a>
            {/* Blog Post 2 */}
            <a href="blog2" className="blog-card block bg-white rounded-2xl overflow-hidden shadow-md">
              <img className="h-56 w-full object-cover" src={BlogCard2}  alt="A group of people working together" />
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-blue">Awareness</p>
                <h3 className="mt-2 text-xl font-bold text-brand-dark">Growing Your Own Food</h3>
                <p className="mt-3 text-gray-600">How can home gardening serve as a practical path toward personal independence and food security?</p>
                <div className="mt-4 flex items-center">
                  <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/333333/FFFFFF?text=R" alt="Author avatar" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-brand-dark">Ravi Kumar</p>
                    <p className="text-sm text-gray-500">28 Aug 2025</p>
                  </div>
                </div>
              </div>
            </a>
            {/* Blog Post 3 */}
            <a href="blog3" className="blog-card block bg-white rounded-2xl overflow-hidden shadow-md">
              <img className="h-56 w-full object-cover" src={BlogCard3} alt="An open book with illustrations" />
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-blue">Awareness & Advocacy</p>
                <h3 className="mt-2 text-xl font-bold text-brand-dark">Eco-Friendly Study Habits</h3>
                <p className="mt-3 text-gray-600">"Can eco-friendly study habits actually make you a better student?"</p>
                <div className="mt-4 flex items-center">
                  <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/333333/FFFFFF?text=P" alt="Author avatar" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-brand-dark">Anjali Gupta</p>
                    <p className="text-sm text-gray-500">18 Oct 2025</p>
                  </div>
                </div>
              </div>
            </a>
            {/* Blog Post 4 */}
            <a href="blog4" className="blog-card block bg-white rounded-2xl overflow-hidden shadow-md">
              <img className="h-56 w-full object-cover" src={BlogCard4} alt="An open book with illustrations" />
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-blue">Awareness</p>
                <h3 className="mt-2 text-xl font-bold text-brand-dark">The Zero-Waste Dorm Kit</h3>
                <p className="mt-3 text-gray-600">A guide to the essential reusables (cutlery, jars, beeswax wraps) that fit in a small space</p>
                <div className="mt-4 flex items-center">
                  <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/333333/FFFFFF?text=P" alt="Author avatar" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-brand-dark">Samarth Kulkarni</p>
                    <p className="text-sm text-gray-500">13 Nov 2025</p>
                  </div>
                </div>
              </div>
            </a>
            
          </div>
        </section>
      </div>
    </main>
    </>
  );
};

export default Blogs;