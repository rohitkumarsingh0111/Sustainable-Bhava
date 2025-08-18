import React, { useState, useEffect } from 'react';
import './StoryChanger.css';

// Data for our cards and modals
const storyData = [
    {
        id: 'modal1',
        bgImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2070',
        gradient: 'bg-gradient-to-br from-blue-500/90 to-blue-600/80',
        icon: ( <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg> ),
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-700',
        title: 'Mindful Learning: The Story of Self',
        content: 'This principle is about understanding our own narrative. Through self-awareness and continuous learning, we recognize how our thoughts and choices shape our reality. Every decision becomes a conscious chapter in our personal journey toward sustainability.'
    },
    {
        id: 'modal2',
        // --- FIXED: Replaced the broken image URL ---
        bgImage: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2070',
        gradient: 'bg-gradient-to-br from-red-500/90 to-red-600/80',
        icon: ( <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg> ),
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        title: 'Community: The Story of Us',
        content: 'Our individual stories weave together to form the fabric of community. This principle emphasizes compassion, connection, and collaboration. By sharing our experiences and supporting one another, we create a collective narrative of resilience and shared purpose.'
    },
    {
        id: 'modal3',
        bgImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1974',
        gradient: 'bg-gradient-to-br from-green-500/90 to-green-600/80',
        icon: ( <svg className="w-8 h-8" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg> ),
        iconBg: 'bg-green-100',
        iconColor: 'text-green-700',
        title: 'Nature: The Story of Our World',
        content: 'We are all characters in the grand story of the Earth. This principle is about reconnecting with nature and understanding its intricate plot. By honoring our environment, we learn to live in harmony with it, ensuring a healthier narrative for future generations.'
    },
    {
        id: 'modal4',
        bgImage: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2070',
        gradient: 'bg-gradient-to-br from-yellow-500/90 to-yellow-600/80',
        icon: ( <svg className="w-8 h-8" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg> ),
        iconBg: 'bg-yellow-100',
        iconColor: 'text-yellow-700',
        title: 'Action: The Story of Our Impact',
        content: 'A story is defined by its action. This principle turns intention into impact. It\'s about taking conscious, mindful steps—small and large—that reflect our values. Our actions become the living proof of the sustainable story we choose to tell.'
    }
];

const StoryChanger = () => {
    const [activeModal, setActiveModal] = useState(null);
    const openModal = (modalId) => setActiveModal(modalId);
    const closeModal = () => setActiveModal(null);
    useEffect(() => {
        const handleKeyDown = (event) => { if (event.key === 'Escape') closeModal(); };
        document.addEventListener('keydown', handleKeyDown);
        return () => { document.removeEventListener('keydown', handleKeyDown); };
    }, []);

    return (
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="relative max-w-7xl mx-auto">
                {/* --- FIXED: Redesigned Heading --- */}
                <div className="text-center">
                    <h2 className="text-base font-bold text-brand-blue tracking-wider uppercase">
                        THE POWER OF NARRATIVE
                    </h2>
                    <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-dark">
                        How a Story Changes the World
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
                        These four principles are the heart of our storytelling, guiding young minds to understand themselves, their community, and their power to create a sustainable future.
                    </p>
                </div>

                <div className="relative mt-16 lg:mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {storyData.map((item) => (
                            <div key={item.id} className="card" onClick={() => openModal(item.id)}>
                                <div className="card-background-image" style={{ backgroundImage: `url(${item.bgImage})` }}></div>
                                <div className={`card-gradient-overlay ${item.gradient}`}></div>
                                <div className="card-content flex flex-col w-full p-6">
                                    <div className="flex-shrink-0">
                                        <div className={`flex items-center justify-center h-16 w-16 rounded-full ${item.iconBg} ${item.iconColor}`}>
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-xl font-semibold text-white">{item.title.split(':')[0]}: <span className="font-bold">{item.title.split(':')[1]}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* --- FIXED: Added the modal rendering code back in --- */}
            {storyData.map((item) => (
                 <div key={`${item.id}-modal`} className={`modal-overlay ${activeModal === item.id ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
                    <div className="modal-content bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
                        <h3 className="text-2xl font-bold text-brand-dark">{item.title}</h3>
                        <p className="mt-4 text-gray-700">{item.content}</p>
                        <button onClick={closeModal} className="modal-close mt-8 font-semibold text-gray-600 hover:text-gray-900">Close</button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default StoryChanger;