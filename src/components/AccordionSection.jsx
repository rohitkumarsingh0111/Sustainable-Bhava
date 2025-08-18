import React, { useState } from 'react';
import styles from './AccordionSection.module.css';

const accordionItems = [
    {
        title: "Our Vision",
        content: "A world where every community is environmentally conscious, socially equitable, and inspired to co-create a sustainable future for generations to come. This is the future we see and the destination of our journey.",
        bgImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop",
        gradient: "bg-gradient-to-r from-blue-500/90 to-blue-600/80",
    },
    {
        title: "Our Mission",
        content: "To empower communities through the art of storytelling, fostering a deep-rooted connection to sustainability and providing the tools for collective environmental stewardship. This is the path we walk every single day.",
        bgImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop",
        gradient: "bg-gradient-to-r from-green-500/90 to-green-600/80",
    },
    {
        title: "Our Values",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li><strong className="font-semibold">Empathy:</strong> Understanding and sharing the feelings of the communities we serve.</li>
                <li><strong className="font-semibold">Collaboration:</strong> Believing that we are stronger and more effective together.</li>
                <li><strong className="font-semibold">Integrity:</strong> Committing to honesty and transparency in all our actions.</li>
            </ul>
        ),
        bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        gradient: "bg-gradient-to-r from-red-500/90 to-red-600/80",
    }
];


const AccordionSection = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                {/* --- Updated Heading Section --- */}
                <div className="text-center mb-16">
                     <h2 className={styles.preHeading}>CHARTING OUR COURSE</h2>
                     <h1 className={styles.mainHeading}>The Compass we follow</h1>
                     <p className={styles.subHeading}>
                        Navigating our journey with a clear vision for the future, a defined mission for today, and the core values that guide our every step.
                     </p>
                </div>

                <div className="space-y-6">
                    {accordionItems.map((item, index) => {
                        const isActive = openAccordion === index;
                        const itemClass = `${styles.accordionItem} ${isActive ? styles.active : ''}`;

                        return (
                            <div key={item.title} className={itemClass}>
                                <div 
                                    className={styles.accordionHeader} 
                                    style={{ backgroundImage: `url('${item.bgImage}')` }}
                                    onClick={() => handleAccordionClick(index)}
                                >
                                    <div className={`${styles.imageOverlay} ${item.gradient}`}></div>
                                    
                                    <h3 className={styles.title}>{item.title}</h3>
                                    <div className={styles.icon}>
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>

                                <div className={styles.accordionContent}>
                                    <div className={styles.accordionContentInner}>
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default AccordionSection;