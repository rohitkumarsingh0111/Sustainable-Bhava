import React from 'react';
import './IntroSection.css'; // We will create this CSS file next.

// --- IMPORTANT ---
// 1. Place your images inside your project (e.g., in an `src/assets` folder).
// 2. Update the import paths below to point to your images.
import mainGroupPhoto from '../assets/Homepage1.jpg'; // Example path
import childrenWithSignsPhoto from '../assets/Homepage2.jpg'; // Example path
import craftingSessionPhoto from '../assets/Homepage3.jpg'; // Example path


const IntroSection = () => {
    return (
        <section className="relative py-24 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-inter">
            {/* Decorative Circles */}
            <div className="deco-circle w-64 h-64 bg-blue-100 top-0 -left-20"></div>
            <div className="deco-circle w-48 h-48 bg-red-100 bottom-10 -right-10"></div>
            
            <div className="relative max-w-6xl mx-auto">
                {/* Text Content */}
                <div className="text-center">
                    <h2 className="text-base font-bold text-brand-blue tracking-wider uppercase">We Make it Happen</h2>
                    <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-dark">
                        Empowering Young Minds
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
                        The curiosity of these tiny hearts ignites our passion to keep making the difference. Together we are planting the seeds of responsibility and love for our home, our mother, our earth.
                    </p>
                </div>

                {/* Photo Grid */}
                <div className="relative mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
                    {/* Main Image */}
                    <div className="lg:col-span-2">
                        <img 
                            src={mainGroupPhoto} 
                            alt="A large group of children engaged in a Sustainable Bhava session."
                            className="photo-grid-item w-full rounded-xl shadow-2xl"
                        />
                    </div>
                    
                    {/* Side Images */}
                    <div className="space-y-6">
                        <img 
                            src={childrenWithSignsPhoto} 
                            alt="Children proudly holding up signs and crafts they created."
                            className="photo-grid-item w-full rounded-xl shadow-xl"
                        />
                        
                        <img 
                            src={craftingSessionPhoto} 
                            alt="Two girls focused on their work during a crafting workshop."
                            className="photo-grid-item w-full rounded-xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;