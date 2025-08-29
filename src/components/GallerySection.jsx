import React from "react";
import Rectangle47 from "../SB photos/Rectangle 47.png";
import Rectangle48 from "../SB photos/Rectangle 48.png";
import Rectangle49 from "../SB photos/Rectangle 49.png";
import Rectangle50 from "../SB photos/Rectangle 50.png";
import Rectangle51 from "../SB photos/Rectangle 51.png";
import Rectangle52 from "../SB photos/Rectangle 52.png";
import Rectangle53 from "../SB photos/Rectangle 53.png";
import Rectangle54 from "../SB photos/Rectangle 54.png";

const GallerySection = () => {
  return (
    <>
      <div className="grid grid-cols-3 p-4 px-2 md:px-28">
        <div className="col-span-2 text-white p-1">
          <div className="relative">
            <img
              src={Rectangle47}
              alt="Story Telling"
              className="h-[10vh] md:h-[15vh] w-[60vw] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-3xl font-bold">
              <span>Story Telling</span>
            </div>
          </div>
        </div>
        <div className="row-span-2 text-white p-1">
          <div className="relative">
            <img
              src={Rectangle48}
              alt="School Workshops"
              className="h-[21vh] md:h-[31vh] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-3xl font-bold p-2">
              <span>School Workshops</span>
            </div>
          </div>
        </div>
        <div className="col-span-2 text-white p-1">
          <div className="relative">
            <img
              src={Rectangle49}
              alt="College Workshops"
              className="object-cover h-[10vh] md:h-[15vh] w-[60vw]"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-3xl font-bold">
              <span>College Workshops</span>
            </div>
          </div>
        </div>
        <div className="col-span-3 text-white p-1">
          <div className="relative w-full h-full">
            <img
              src={Rectangle50}
              alt="Corporate Sessions"
              className="object-cover w-full h-[10vh] md:h-[15vh]"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-3xl font-bold">
              <span>Corporate Sessions</span>
            </div>
          </div>
        </div>
        <div className="row-span-2 text-white p-1">
          <div className="relative">
            <img
              src={Rectangle51}
              alt="Performances"
              className="h-[21vh] md:h-[31vh] w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white md:text-2xl font-bold">
              <span>Performances</span>
            </div>
          </div>
        </div>
        <div className="col-span-2 text-white p-1">
          <div className="relative">
            <img
              src={Rectangle52}
              alt="Global Goals Ambassador"
              className="object-cover h-[10vh] md:h-[15vh] w-[60vw]"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-3xl font-bold p-2">
              <span>Global Goals Ambassador</span>
            </div>
          </div>
        </div>
        <div className="col-span-2 text-white p-1">
          <div className="relative">
            <img
              src={Rectangle53}
              alt="SDGs Book Clubs"
              className="object-cover h-[10vh] md:h-[15vh] w-[60vw]"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-3xl font-bold">
              <span>SDGs Book Clubs</span>
            </div>
          </div>
        </div>
        <div className="col-span-3 text-white p-1">
          <div className="relative w-full h-full">
            <img
              src={Rectangle54}
              alt="Teachers Training Program"
              className="object-cover w-full h-[10vh] md:h-[15vh]"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-3xl font-bold">
              <span>Teachers Training Program</span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default GallerySection;
