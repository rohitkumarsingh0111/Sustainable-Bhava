import AccordionSection from './AccordionSection'; // Adjust path if needed
import './About_us.css';

// Existing image imports
import team_member_1 from "../assets/our_team_1.jpg";
import team_member_2 from "../assets/our_team_2.jpg";
import team_member_3 from "../assets/our_team_3.jpg";
import imageHero1 from "../SB photos/Picture 2.jpeg";
import imageHero2 from "../SB photos/6055154510512374557.jpg";
import imageHero3 from "../SB photos/Picture 1.jpeg";
import imageHero4 from "../SB photos/6055154510512374538.jpg";
import imageHero5 from "../SB photos/Picture2Mani.jpeg";

// Team member image imports
import divanshuImg from "../assets/Divanshu.jpg";
import mansiImg from "../assets/Mansi.jpg";
import yashImg from "../assets/Yash.jpg";
import muskanImg from "../assets/Muskan.jpg";
import anooshImg from "../assets/Anoosh.jpg";
import deeptiImg from "../assets/Deepti.jpg";
import manideepImg from "../assets/Mani.jpg";
import manishImg from "../assets/Manish.jpg";


// --- Reusable Icon Components ---

const LinkedInIcon = ({ hoverColorClass }) => (
    <svg className={`w-6 h-6 text-gray-400 transition-colors ${hoverColorClass}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);


// --- Reusable Card Components ---

const TeamMemberCard = ({ member }) => (
    <div className="flex w-full md:flex-1 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
        <div className="w-1/3 flex items-center justify-center p-4">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover" />
        </div>
        <div className="w-2/3 p-5 flex flex-col justify-center">
            <div>
                <h3 className={`text-xl font-bold ${member.colorClass}`}>{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
            </div>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-3">
                <LinkedInIcon hoverColorClass={member.hoverColorClass} />
            </a>
        </div>
    </div>
);

// UPDATED: Expert Card Component
const ExpertCard = ({ expert }) => (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
        <div className="relative">
            {/* Using a 4:3 aspect ratio for a more compact image */}
            <div className="aspect-w-16 aspect-h-9"> 
                <img className="object-cover object-center w-full h-full rounded-t-2xl" 
                     src={expert.img} 
                     alt={`Portrait of ${expert.name}`} />
            </div>
        </div>
        {/* Reduced padding, font sizes, and margins for a tighter layout */}
        <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-gray-900">{expert.name}</h3>
            <p className="mt-1 text-base font-semibold text-amber-600">{expert.role}</p>
            <p className="mt-2 text-sm text-gray-500 h-14 flex items-center justify-center"> 
                {expert.description}
            </p>
            <div className="mt-3 flex justify-center">
                <a href={expert.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors">
                    <LinkedInIcon hoverColorClass="hover:text-amber-500" />
                </a>
            </div>
        </div>
    </div>
);


const AboutUsContainer = () => {
    // Data for team members
    const teamMembers = [
        { name: "Divanshu", role: "Co-founder & Executive Director", img: divanshuImg, linkedin: "#", colorClass: "text-yellow-800", hoverColorClass: "hover:text-yellow-600" },
        { name: "Mansi", role: "Co-founder & Deputy Director", img: mansiImg, linkedin: "#", colorClass: "text-blue-800", hoverColorClass: "hover:text-blue-600" },
        { name: "Yash", role: "Director, Technology & Innovation", img: yashImg, linkedin: "#", colorClass: "text-red-800", hoverColorClass: "hover:text-red-600" },
        { name: "Muskan", role: "Director, Communications & Design", img: muskanImg, linkedin: "#", colorClass: "text-green-800", hoverColorClass: "hover:text-green-600" },
        { name: "Anoosh", role: "Director, Outreach & Community", img: anooshImg, linkedin: "#", colorClass: "text-rose-800", hoverColorClass: "hover:text-rose-600" },
        { name: "Deepti", role: "Director, Storytelling & Content", img: deeptiImg, linkedin: "#", colorClass: "text-indigo-800", hoverColorClass: "hover:text-indigo-600" },
        { name: "Manideep", role: "Director, Education & Youth Chapters", img: manideepImg, linkedin: "#", colorClass: "text-pink-800", hoverColorClass: "hover:text-pink-600" },
        { name: "Manish", role: "Director, Education & the Chapters", img: manishImg, linkedin: "#", colorClass: "text-teal-800", hoverColorClass: "hover:text-teal-600" },
    ];

    // Data for the experts section with LinkedIn links
    const expertsData = [
        {
            name: "Mr. Rumit Walia",
            role: "Educational Strategist",
            description: "A visionary in modern pedagogy, guiding our educational framework for maximum impact.",
            img: team_member_1,
            linkedin: "https://www.linkedin.com/in/rumitwalia" // Example link, update as needed
        },
        {
            name: "Ms. Rachna Puri",
            role: "Community Development Advisor",
            description: "Expert in fostering community engagement and sustainable development programs.",
            img: team_member_2,
            linkedin: "https://www.linkedin.com/in/rachnapuri" // Example link, update as needed
        },
        {
            name: "Ms. Poojita Goswami",
            role: "Youth Empowerment Consultant",
            description: "Passionate about creating opportunities that empower the next generation of leaders.",
            img: team_member_3,
            linkedin: "https://www.linkedin.com/in/poojitagoswami" // Example link, update as needed
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="w-full py-16 md:py-20 bg-gradient-to-br from-yellow-500 via-yellow-300 to-yellow-100">
                {/* ... existing hero section JSX ... */}
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
            
            {/* Accordion Section */}
            <AccordionSection />

            {/* UPDATED: Our Experts Section */}
            {/* Removed min-h-screen and adjusted padding for a more compact feel */}
            <section className="bg-amber-200 py-16 sm:py-20"> 
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">Meet Our Experts</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            The talented individuals driving our success and innovation.
                        </p>
                    </div>
                    <div className="px-8 md:px-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {expertsData.map((expert) => (
                            <ExpertCard key={expert.name} expert={expert} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className="bg-amber-50 md:py-24 py-12 px-4">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Meet Our Team</h2>
                        <p className="text-lg text-gray-600 mt-2">Leaders driving our mission, guided by our experts</p>
                    </div>
                    <div className="flex flex-col items-center w-full gap-8">
                        {/* Row 1 */}
                        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 w-full lg:w-4/5">
                            <TeamMemberCard member={teamMembers[0]} />
                            <TeamMemberCard member={teamMembers[1]} />
                        </div>
                        {/* Row 2 */}
                        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 w-full">
                            <TeamMemberCard member={teamMembers[2]} />
                            <TeamMemberCard member={teamMembers[3]} />
                            <TeamMemberCard member={teamMembers[4]} />
                        </div>
                        {/* Row 3 */}
                        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 w-full">
                            <TeamMemberCard member={teamMembers[5]} />
                            <TeamMemberCard member={teamMembers[6]} />
                            <TeamMemberCard member={teamMembers[7]} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsContainer;