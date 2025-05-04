import React, { useState } from 'react';
import The_idea from "../assets/The_idea.png";
import team_member_1 from "../assets/our_team_1.jpg";
import team_member_2 from "../assets/our_team_2.jpg";
import team_member_3 from "../assets/our_team_3.jpg";
import milestoneImage from "../assets/arrow.png";
import Rectangle34 from "../SB photos/Rectangle 34.png";
import Rectangle35 from "../SB photos/Rectangle 35.png";
import Rectangle32 from "../SB photos/Rectangle 32.png";
import Rectangle31 from "../SB photos/Rectangle 31.png";
import Rectangle33 from "../SB photos/Rectangle 33.png";

const About_usContainer = () => {
    const [activeYear, setActiveYear] = useState(2025);

    return (
        <>
            {/* Our Mission & Vision */}
            <div className="bg-yellow-400 min-h-screen pt-6 pr-6 pl-6 pb-[100px] md:pt-8 md:pr-8 md:pl-8 md:pb-[80px]">


                <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 md:mb-10">
                    Our Mission & Vision
                </h1>
                <br />
                <br />
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-2/5">
                        <div className="text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-8 ml-4 md:ml-16">
                            <h2>Our mission is to</h2>
                            <h2>educate young people</h2>
                            <h2>in India on the 17</h2>
                            <h2>Sustainable</h2>
                            <h2>Development Goals.</h2>
                        </div>
                        <br />
                        <div className="grid grid-cols-1 gap-4 ml-4 md:ml-16">
                            <img className="rounded-md shadow-md object-cover h-48 w-full" src={Rectangle31} alt="Child 1" />
                            <img className="rounded-md shadow-md object-cover w-full" src={Rectangle35} alt="Child 2" />
                        </div>
                    </div>
                    <div className="md:w-3/5 mt-8 md:mt-0 md:pl-8 text-left">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <img className="rounded-md shadow-md object-cover h-full w-full" src={Rectangle32} alt="Child 3" />
                            <img className="rounded-md shadow-md object-cover h-full w-full" src={Rectangle33} alt="Child 4" />
                            <img className="rounded-md shadow-md object-cover h-full w-full" src={Rectangle34} alt="Child 5" />
                        </div>
                        <p className="mt-16 text-lg md:text-2xl w-4/5 mx-auto">
                        Our vision is a world where every young person understands the importance of sustainability and takes action to create a better future for all.
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-lg md:text-2xl w-4/5 mx-auto">
                            <li>To Educate children on the importance of sustainability.</li>
                            <li>To enable a platform for kids to share their work on sustainability.</li>
                            <li>To Reach out to more than a million kids across India in the next 5 years.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Our Story */}
            <div className="bg-white py-8">
                <div className="flex flex-col md:flex-row items-center md:mx-28 m-8">
                    <div className="md:w-1/2 text-black md:pt-8 py-4 md:pl-4 mx-auto text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">How it all started?</h2>
                        <p className="text-base md:text-xl text-justify">
                        Two students, feeling like they were lost in life's maze,
                stumbled upon an idea.  
                <br />
                  They couldn't help but notice something: their fellow students
                  and even their curriculum seemed to be snoozing on
                  sustainability and environmental awareness. Determined to make
                  a difference, they decided to be the change they wanted to
                  see. They gathered some friends who shared their vision and
                  worked tirelessly through nights, fueled by coffee and their
                  dreams.
                <br />
                And there it was:
                <br />
                <strong>SUSTAINABLE BHAVA "telling tales for a better tomorrow".
                </strong>
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                        <img src={The_idea} alt="The Idea" className="rounded-lg max-w-full h-auto" />
                    </div>
                </div>
            </div>

            {/* Our Experts */}
            <div className="bg-yellow-400 py-8">
                <div className="text-center md:text-left mb-8 md:ml-36 ml-8">
                    <h2 className="m-2 md:text-5xl text-3xl font-bold">
                        Our Experts
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row md:mx-36 md:mb-16 mb-4 gap-8">
                    {[{ img: team_member_1, name: "Mr. Rumit Walia" }, { img: team_member_2, name: "Ms. Rachna Puri" }, { img: team_member_3, name: "Ms. Poojita Goswami" }].map((member, index) => (
                        <div key={index} className="flex flex-col basis-1/3 py-4 p-1 rounded-lg items-center">
                            <div className="relative w-full h-96 md:w-80">
                                <img src={member.img} alt={`team member ${index + 1}`} className="w-full h-full object-cover rounded-lg border-8 border-white shadow-lg" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-xl rounded-lg">
                                    {member.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Our Future Milestones */}
            {/* <div className="bg-white py-8 px-4 md:px-36">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Future Milestones</h2>
                <div className="flex flex-col md:flex-row items-center w-full">
                    <div className="w-full md:w-2/6 mb-4 md:mb-0">
                        <img src={milestoneImage} alt="Milestone" className="w-full md:max-w-md rounded-lg shadow-md" />
                    </div>
                    <div className="w-full md:w-5/7 md:ml-4 flex flex-col space-y-4">
                        {[{ year: 2023, goals: ["Complete 2023 Goal 1", "Complete 2023 Goal 2", "Complete 2023 Goal 3"], color: "red" }, { year: 2024, goals: ["Complete 2024 Goal 1", "Complete 2024 Goal 2", "Complete 2024 Goal 3"], color: "green" }, { year: 2025, goals: ["Partner with 500+ Schools", "Educating 150K+ Students", "Launching teacher training program"], color: "yellow" }, { year: 2026, goals: ["Expand across Asia", "Train 1000+ teachers", "Reach 1M students"], color: "blue" }].map(({ year, goals, color }) => (
                            <div key={year}>
                                <div onMouseEnter={() => setActiveYear(year)} className={`cursor-pointer flex items-center justify-center font-bold text-2xl border-2 border-${color}-400 bg-${color}-400 w-full py-3 px-8 rounded-full ${activeYear === year ? `bg-${color}-500` : ''}`}>
                                    {year}
                                </div>
                                {activeYear === year && (
                                    <div className={`mt-2 p-4 text-lg bg-${color}-400 rounded-lg`}>
                                        {goals.map((goal, idx) => (
                                            <div key={idx} className="pl-4 py-2">{goal}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default About_usContainer;
