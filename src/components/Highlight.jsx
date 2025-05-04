import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "./Highlight.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Highlight = () => {
  const [activeTile, setActiveTile] = useState(0);
  const carouselRef = useRef(null);

  const handleMouseEnter = (index) => {
    setActiveTile(index);
  };

  const tileData = [
    "Local Movements",
    "Teachings",
    "Nukkad Natak",
    "Sustainable Schemes",
    "Tree Plantation",
    "Webinars & Discussions",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="flex flex-col bg-white md:px-36">
        <div className="text-left mt-20">
          <span className="md:text-5xl text-3xl">
            <strong>Highlights of our work</strong>
          </span>
        </div>

        <div className="app-container">
          {/* Desktop View - Hidden on mobile */}
          <div className="img-nav hidden md:flex" ref={carouselRef}>
            {tileData.map((title, index) => (
              <div
                key={index}
                className={`tile ${activeTile === index ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <p spine>{title}</p>
                <div className="content">
                  <h1>{title}</h1>
                  <p>{`Information about ${title}`}</p>
                </div>
                <div className="heading">{title}</div>
                <div className="img" />
              </div>
            ))}
          </div>

          {/* Mobile View - Using Slick Carousel */}
          <div className="carousel-container md:hidden">
            <Slider {...settings}>
              {tileData.map((title, index) => (
                <div key={index} className={`tile ${activeTile === index ? "active" : ""}`}>
                  <p spine>{title}</p>
                  <div className="content">
                    <h1>{title}</h1>
                    <p>{`Information about ${title}`}</p>
                  </div>
                  <div className="heading">{title}</div>
                  <div className="img" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlight;
