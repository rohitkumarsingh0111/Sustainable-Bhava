import React from 'react';
import Navbar from './Navbar'
import './Blogs.css'; 

const Blogs = () => {
  return (
    <>
    <Navbar/>
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Featured Post Section */}
        <section className="mb-16">
          <a href="#" className="featured-post blog-card block relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
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
          </a>
        </section>

        {/* Recent Blog Posts Section */}
        <section>
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Recent blog posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Post 1 */}
            <a href="#" className="blog-card block bg-white rounded-2xl overflow-hidden shadow-md">
              <img className="h-56 w-full object-cover" src="https://placehold.co/600x400/E85D75/FFFFFF?text=Education" alt="Children in a classroom" />
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-blue">Education</p>
                <h3 className="mt-2 text-xl font-bold text-brand-dark">Planting Seeds of Sustainability in the Classroom</h3>
                <p className="mt-3 text-gray-600">Discover our methods for integrating environmental education into the core curriculum.</p>
                <div className="mt-4 flex items-center">
                  <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/333333/FFFFFF?text=A" alt="Author avatar" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-brand-dark">Asha Sharma</p>
                    <p className="text-sm text-gray-500">12 Aug 2025</p>
                  </div>
                </div>
              </div>
            </a>
            {/* Blog Post 2 */}
            <a href="#" className="blog-card block bg-white rounded-2xl overflow-hidden shadow-md">
              <img className="h-56 w-full object-cover" src="https://placehold.co/600x400/FFD700/333333?text=Community" alt="A group of people working together" />
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-blue">Community</p>
                <h3 className="mt-2 text-xl font-bold text-brand-dark">The Power of 'We': Building Eco-Conscious Communities</h3>
                <p className="mt-3 text-gray-600">How collective action and shared stories are creating greener neighborhoods.</p>
                <div className="mt-4 flex items-center">
                  <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/333333/FFFFFF?text=R" alt="Author avatar" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-brand-dark">Ravi Kumar</p>
                    <p className="text-sm text-gray-500">10 Aug 2025</p>
                  </div>
                </div>
              </div>
            </a>
            {/* Blog Post 3 */}
            <a href="#" className="blog-card block bg-white rounded-2xl overflow-hidden shadow-md">
              <img className="h-56 w-full object-cover" src="https://placehold.co/600x400/6D8B74/FFFFFF?text=Storytelling" alt="An open book with illustrations" />
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-blue">Storytelling</p>
                <h3 className="mt-2 text-xl font-bold text-brand-dark">Five Folktales That Teach Children About Nature</h3>
                <p className="mt-3 text-gray-600">Rediscovering ancient Indian stories that hold timeless lessons on respecting our planet.</p>
                <div className="mt-4 flex items-center">
                  <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/333333/FFFFFF?text=P" alt="Author avatar" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-brand-dark">Priya Das</p>
                    <p className="text-sm text-gray-500">08 Aug 2025</p>
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