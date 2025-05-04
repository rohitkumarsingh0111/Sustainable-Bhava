import React from "react";
import Navbar from "./Navbar";
import Card from "./Testimonial_Card"; // Import the Card component
import Footer from './Footer';
// Import images
import program1 from "../assets/program1.jpg";
import program2 from "../assets/program2.jpg";
import program3 from "../assets/program3.jpg";
import program4 from "../assets/program4.jpg";
import program5 from "../assets/program5.jpg";
import program6 from "../assets/program6.jpg";
import program7 from "../assets/program7.jpg";
import program8 from "../assets/program8.jpg";

// Testimonials image
// import imaggg from "../SB photos/Group 4.jpg";
import t1 from "../SB photos/Testimonial1.jpg";
import t2 from "../SB photos/Testimonial2.jpg";
import t3 from "../SB photos/Testimonial3.jpg";

// Import Slick Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Reusable Box component
const BoxWithText = ({ title, description, image, isLeft, overlayColor }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-[24px]">
      {/* For mobile view, image is on top and text is below */}
      {/* Desktop: Text first when isLeft, Image second */}
      {isLeft && (
        <div className="text-center md:text-right flex flex-col md:max-h-[217px] items-center md:items-end">
          <p className="font-bold text-[24px] md:text-[33px]" style={{ color: overlayColor }}>
            {title}
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-500">{description}</p>
        </div>
      )}

      {/* Image block: Full width for mobile, specific size for desktop */}
      <div className="relative w-full h-[400px] md:w-[217px] md:h-[217px] flex-shrink-0">
        <img src={image} alt={title} className="object-cover w-full h-full" />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundColor: overlayColor,
            opacity: 0.65,
          }}
        />
      </div>

      {/* Desktop: Image first when isLeft is false, Text second */}
      {!isLeft && (
        <div className="text-center md:text-left flex flex-col md:max-h-[217px] items-center md:items-start">
          <p className="font-bold text-[24px] md:text-[33px]" style={{ color: overlayColor }}>
            {title}
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-500">{description}</p>
        </div>
      )}
    </div>
  );
};

const OurServices = () => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time on mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2, // Show two slides at a time on tablet
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mx-auto font-inter font-bold text-[40px] text-center mb-10">
        Our Programs
      </div>
      {/* Carousel for mobile view */}
      <div className="block md:hidden">
        <Slider {...settings}>
          <BoxWithText
            title="School Workshops"
            description="Interactive sessions in schools that introduce students to the Sustainable Development Goals (SDGs) through games, discussions, and creative activities."
            image={program1}
            overlayColor="#EF402D"
          />
          <BoxWithText
            title="Global Goals Ambassador"
            description="A leadership program that empowers young changemakers to champion the SDGs in their communities through campaigns and outreach."
            image={program2}
            overlayColor="#D45900"
          />
          <BoxWithText
            title="Story Telling"
            description="We use the power of stories to engage young minds with real-world issues and inspire action toward sustainable living."
            image={program3}
            overlayColor="#00689C"
          />
          <BoxWithText
            title="Performances"
            description="Street plays, skits, and spoken word events that use art to raise awareness about social and environmental challenges."
            image={program4}
            overlayColor="#A31C44"
          />
          <BoxWithText
            title="College Workshops"
            description="Focused workshops for college students that dive deeper into sustainability, leadership, and social responsibility through hands-on learning."
            image={program5}
            overlayColor="#FFA100"
          />
          <BoxWithText
            title="SDGs Book Clubs"
            description="Reading circles where students explore stories, biographies, and articles related to global challenges and brainstorm solutions together."
            image={program6}
            overlayColor="#C058FF"
          />
          <BoxWithText
            title="Corporate Sessions"
            description="Customized programs that help companies embed sustainability thinking in their workplace culture and encourage employee-led initiatives."
            image={program7}
            overlayColor="#59BA47"
          />
          <BoxWithText
            title="Teachers Training Program"
            description="Workshops for educators that provide tools, lesson plans, and strategies to integrate sustainability into their classrooms effectively."
            image={program8}
            overlayColor="#27BFE6"
          />
        </Slider>
      </div>
      {/* Grid for larger screens */}
      <div className="hidden md:grid grid-cols-2 gap-[24px] justify-center text-justify items-center mx-auto w-full max-w-[900px]">
        <BoxWithText
          title="School Workshops"
          description="Offline Interactive sessions on SDGs for school kids."
          image={program1}
          isLeft={true}
          overlayColor="#EF402D"
        />
        <BoxWithText
          title="Global Goals Ambassador"
          description="Training youth to lead local SDG initiatives."
          image={program2}
          isLeft={false}
          overlayColor="#D45900"
        />
        <BoxWithText
          title="Story Telling"
          description="Inspiring young minds through real-life stories."
          image={program3}
          isLeft={true}
          overlayColor="#00689C"
        />
        <BoxWithText
          title="Performances"
          description="Spreading awareness through creative art forms."
          image={program4}
          isLeft={false}
          overlayColor="#A31C44"
        />
        <BoxWithText
          title="College Workshops"
          description="Engaging college youth with sustainability in action."
          image={program5}
          isLeft={true}
          overlayColor="#FFA100"
        />
        <BoxWithText
          title="SDGs Book Clubs"
          description="Reading and reflecting on global issues."
          image={program6}
          isLeft={false}
          overlayColor="#C058FF"
        />
        <BoxWithText
          title="Corporate Sessions"
          description="Bringing sustainability to the workplace."
          image={program7}
          isLeft={true}
          overlayColor="#59BA47"
        />
        <BoxWithText
          title="Teachers Training"
          description="Empowering educators to teach sustainability."
          image={program8}
          isLeft={false}
          overlayColor="#27BFE6"
        />
      </div>
      <div className="flex items-center justify-center mx-auto font-inter font-bold text-[40px] text-center mb-10 mt-[54px]">
        Testimonials
      </div>

      {/* Cards for testimonials */}
      <div className="flex flex-col md:flex-row justify-center mt-4 space-y-4 md:space-y-0 md:space-x-[20px] items-center md:items-start">
        <Card
          media={
            <img
              src={t1}
              alt="Testimonial"
              className="object-cover w-full h-full"
            />
          }
          text="Sustainable Bhava helped me see how my voice could make a real difference."
          by = "- Mansi, Student Volunteer"
        />
        <Card
          media={
            <img
              src={t2}
              alt="Testimonial"
              className="object-cover w-full h-full"
            />
          }
          text="Partnering with this initiative was one of the best decisions we made."
          by = "- Mr. Anshu, Principal (DPS Faridabad)"
        />
        <Card
          media={
            <img
              src={t3}
              alt="Testimonial"
              className="object-cover w-full h-full"
            />
          }
          text="I joined as a volunteer, and I ended up learning more than I taught."
          by = "- Yash, Student Volunteer"
        />
      </div>

      <Footer />
    </>
  );
};

export default OurServices;
