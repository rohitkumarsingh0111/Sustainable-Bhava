import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faFilePdf, faVideo } from '@fortawesome/free-solid-svg-icons';
import sdg1 from "../assets/sustainable-lg/1.jpg";
import sdg2 from "../assets/sustainable-lg/2.jpg";
import sdg3 from "../assets/sustainable-lg/3.jpg";
import sdg4 from "../assets/sustainable-lg/4.jpg";
import sdg5 from "../assets/sustainable-lg/5.jpg";
import sdg6 from "../assets/sustainable-lg/6.jpg";
import sdg7 from "../assets/sustainable-lg/7.jpg";
import sdg8 from "../assets/sustainable-lg/8.jpg";
import sdg9 from "../assets/sustainable-lg/9.jpg";
import sdg10 from "../assets/sustainable-lg/10.jpg";
import sdg11 from "../assets/sustainable-lg/11.jpg";
import sdg12 from "../assets/sustainable-lg/12.jpg";
import sdg13 from "../assets/sustainable-lg/13.jpg";
import sdg14 from "../assets/sustainable-lg/14.jpg";
import sdg15 from "../assets/sustainable-lg/15.jpg";
import sdg16 from "../assets/sustainable-lg/16.jpg";
import sdg17 from "../assets/sustainable-lg/17.jpg";

const Sdg = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sdgIcons = [
        { title: "No Poverty", img: sdg1 },
        { title: "Zero Hunger", img: sdg2 },
        { title: "Good Health", img: sdg3 },
        { title: "Quality Education", img: sdg4 },
        { title: "Gender Equality", img: sdg5 },
        { title: "Clean Water", img: sdg6 },
        { title: "Affordable Energy", img: sdg7 },
        { title: "Decent Work", img: sdg8 },
        { title: "Industry, Innovation", img: sdg9 },
        { title: "Reduced Inequalities", img: sdg10 },
        { title: "Sustainable Cities", img: sdg11 },
        { title: "Responsible Consumption", img: sdg12 },
        { title: "Climate Action", img: sdg13 },
        { title: "Life Below Water", img: sdg14 },
        { title: "Life on Land", img: sdg15 },
        { title: "Peace and Justice", img: sdg16 },
        { title: "Partnerships", img: sdg17 },
      ];
      

    const learningMaterials = [
        { type: 'pdf', name: 'Introduction to SDG 1', icon: faFilePdf },
        { type: 'video', name: 'SDG 1 Explained', icon: faVideo },
        { type: 'pdf', name: 'How to Achieve SDG 1', icon: faFilePdf },
    ];

    const sdgIconsContainerRef = useRef(null);

    const [sdgScrollLeftDisabled, setSdgScrollLeftDisabled] = useState(true);
    const [sdgScrollRightDisabled, setSdgScrollRightDisabled] = useState(false);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : learningMaterials.length - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < learningMaterials.length - 1 ? prevIndex + 1 : 0));
    };

    const currentMaterial = learningMaterials[currentIndex];

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

    // Calculate progress
    const progress = ((currentIndex + 1) / learningMaterials.length) * 100;

    return (
        <div className="col-span-10 grid grid-cols-10 gap-4">
            <div className="col-span-10 bg-white rounded-lg shadow-md p-4">
                {/* SDG Icons Row */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
                        Choose from
                        <span className="flex space-x-2">
                            <button
                                onClick={() => scrollLeft(sdgIconsContainerRef, setSdgScrollLeftDisabled, setSdgScrollRightDisabled)}
                                className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${sdgScrollLeftDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={sdgScrollLeftDisabled}
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button
                                onClick={() => scrollRight(sdgIconsContainerRef, setSdgScrollLeftDisabled, setSdgScrollRightDisabled)}
                                className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${sdgScrollRightDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={sdgScrollRightDisabled}
                            >
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </span>
                    </h2>
                    <div ref={sdgIconsContainerRef} className="flex overflow-x-scroll scrollbar-hide">
                        {sdgIcons.map((icon, index) => (
                            <img id={index} src={icon.img} alt={icon.title} className='h-40'/>
                        ))}
                    </div>
                </div>
            </div>

            <div className="col-span-10 bg-white rounded-lg shadow-md p-4">
                {/* Continue Learning Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4 text-left">
                        Continue Learning
                    </h2>
                    <div className="bg-gray-100 p-4 rounded-lg shadow flex items-center hv">
                        <div className="flex-grow">
                            <span className="font-semibold text-lg">SDG 1 - No Poverty</span>
                            <div className="h-3 bg-gray-300 mt-2 rounded-full w-full">
                                <div className="bg-orange-500 h-full rounded-full" style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                            <button
                                onClick={handlePrevClick}
                                className={`p-2 rounded-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500`}
                            >
                                <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
                            </button>
                            <button
                                onClick={handleNextClick}
                                className={`p-2 rounded-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500`}
                            >
                                <FontAwesomeIcon icon={faArrowRight} className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-5 w-full h-60 bg-white rounded-lg flex-shrink-0 flex flex-col items-center justify-center p-4 shadow-md hv">
                            <FontAwesomeIcon icon={currentMaterial.icon} className="text-4xl mb-2 text-gray-700" />
                            <div className="text-gray-700 font-semibold">{currentMaterial.name}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sdg;
