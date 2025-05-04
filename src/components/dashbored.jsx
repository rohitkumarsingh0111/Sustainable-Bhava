import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faSearch, faCommentDots, faTimes } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const cardsContainerRef = useRef(null);
    const noticesContainerRef = useRef(null);
    const [cardsScrollLeftDisabled, setCardsScrollLeftDisabled] = useState(true);
    const [cardsScrollRightDisabled, setCardsScrollRightDisabled] = useState(false);
    const [noticesScrollLeftDisabled, setNoticesScrollLeftDisabled] = useState(true);
    const [noticesScrollRightDisabled, setNoticesScrollRightDisabled] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false); // State to manage chat window visibility

    const updateScrollButtons = (ref, setLeftDisabled, setRightDisabled) => {
        const { scrollLeft, scrollWidth, clientWidth } = ref.current;
        setLeftDisabled(scrollLeft === 0);
        setRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    };

    const scrollLeft = (ref, setLeftDisabled, setRightDisabled) => {
        ref.current.scrollBy({ left: -300, behavior: 'smooth' });
        setTimeout(() => updateScrollButtons(ref, setLeftDisabled, setRightDisabled), 300);
    };

    const scrollRight = (ref, setLeftDisabled, setRightDisabled) => {
        ref.current.scrollBy({ left: 300, behavior: 'smooth' });
        setTimeout(() => updateScrollButtons(ref, setLeftDisabled, setRightDisabled), 300);
    };

    useEffect(() => {
        updateScrollButtons(cardsContainerRef, setCardsScrollLeftDisabled, setCardsScrollRightDisabled);
        updateScrollButtons(noticesContainerRef, setNoticesScrollLeftDisabled, setNoticesScrollRightDisabled);
    }, []);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen); // Toggle chat window visibility
    };

    const cards = [
        {
            number: "1",
            title: "No Poverty",
            description: "Learn About SDG 1",
            bgColor: "bg-red-500 text-white",
        },
        {
            number: "6",
            title: "Clean Water And Sanitation",
            description: "Learn About SDG 6",
            bgColor: "bg-blue-500 text-white",
        },
        {
            number: "15",
            title: "Life On Land",
            description: "Learn About SDG 15",
            bgColor: "bg-green-500 text-white",
        },
    ];

    const notices = [
        {
            title: "Notice 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit temp.",
        },
        {
            title: "Notice 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit temp.",
        },
        {
            title: "Notice 3",
            content: "Lorem ipsum dolor sit amet consectetur quibusdam ad sit error. Culpa, corrupti unde.",
        },
    ];

    return (
        <div className="relative col-span-10 grid grid-cols-1 lg:grid-cols-10 gap-4">
            <div className="col-span-10 lg:col-span-7 bg-white rounded-lg shadow-md p-4">
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
                        Notice
                        <span className="flex space-x-2">
                            <button
                                onClick={() => scrollLeft(noticesContainerRef, setNoticesScrollLeftDisabled, setNoticesScrollRightDisabled)}
                                className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:block ${noticesScrollLeftDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={noticesScrollLeftDisabled}
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button
                                onClick={() => scrollRight(noticesContainerRef, setNoticesScrollLeftDisabled, setNoticesScrollRightDisabled)}
                                className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:block ${noticesScrollRightDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={noticesScrollRightDisabled}
                            >
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </span>
                    </h2>
                    <div ref={noticesContainerRef} className="flex overflow-x-scroll scrollbar-hide space-x-4">
                        {notices.map((notice, index) => (
                            <div
                                key={index}
                                className="w-60 bg-gray-100 p-3 rounded-lg flex-shrink-0 hv"
                            >
                                <p className="text-gray-700 font-medium text-left">{notice.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=''>
                    <h2 className="text-xl font-bold mt-4 flex justify-between items-center">
                        Continue Watching
                        <span className="flex space-x-2 hidden lg:block">
                            <button
                                onClick={() => scrollLeft(cardsContainerRef, setCardsScrollLeftDisabled, setCardsScrollRightDisabled)}
                                className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${cardsScrollLeftDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={cardsScrollLeftDisabled}
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button
                                onClick={() => scrollRight(cardsContainerRef, setCardsScrollLeftDisabled, setCardsScrollRightDisabled)}
                                className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${cardsScrollRightDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={cardsScrollRightDisabled}
                            >
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </span>
                    </h2>
                    <div ref={cardsContainerRef} style={{height:"200px"}} className="flex flex-col lg:flex-row overflow-x-scroll lg:overflow-x-hidden lg:space-x-4 lg:space-y-0 space-y-4">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`lg:w-60 h-40 bg-white-100 rounded-lg flex-shrink-0 hv`}
                            >
                                <div className={`p-4 rounded-t-lg flex items-center ${card.bgColor}`}>
                                    <div className="text-6xl font-bold mr-1">{card.number}</div>
                                    <div className="text-xl font-bold text-left flex-grow">{card.title}</div>
                                </div>
                                <div className="p-4">
                                    <p className="text-gray-700 font-medium text-left">{card.description}</p>
                                    <div className="w-20 h-1 bg-orange-500 mt-2"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Show the following only on mobile view */}
            <div className="col-span-10 lg:col-span-3 bg-orange-500 text-white rounded-lg shadow-md p-4 flex flex-col hidden lg:block">
                <h2 className="font-bold mb-4 text-left text-black text-2xl">Chat Bot</h2>
                <div className="flex-1"></div>

                <div className="absolute tv">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                    </span>
                    <input
                        type="text"
                        placeholder="Enter your message"
                        style={{ width: '120%' }}
                        className="pl-10 p-2 rounded border-2 border-orange-500 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                </div>
            </div>

            {/* Floating Chat Button visible only in mobile view */}
            <button
                onClick={toggleChat}
                className="fixed bottom-16 right-4 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none lg:hidden"
            >
                <FontAwesomeIcon icon={faCommentDots} size="lg" />
            </button>

            {/* Floating Chat Window visible only in mobile view */}
            {isChatOpen && (
                <div className="fixed bottom-24 right-4 w-80 h-96 bg-white shadow-lg rounded-lg p-4 flex flex-col z-50 lg:hidden">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-gray-700">Chat Bot</h2>
                        <button
                            onClick={toggleChat}
                            className="text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {/* Chat content can go here */}
                    </div>
                    <div className="relative mt-4">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                        </span>
                        <input
                            type="text"
                            placeholder="Enter your message"
                            className="pl-10 p-2 rounded border-2 border-gray-300 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
