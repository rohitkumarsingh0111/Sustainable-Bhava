// Card.jsx
import React from "react";

const Card = ({ media, text, by }) => {
    return (
      <div className="w-[329px] h-[400px] rounded-[30px] overflow-hidden border border-gray-300 shadow-md flex flex-col"> {/* Added shadow-md for box shadow */}
        <div className="h-[194px] relative"> {/* Relative positioning for the line */}
          {media}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300" /> {/* Line at the bottom of the image */}
        </div>
        <div className="flex-grow flex items-center justify-center bg-white">
          <p className="text-[20px] text-center w-3/4">{text} <br /> {by}</p> {/* Center-aligned text */}
        </div>
      </div>
    );
  };
  
  

export default Card;

  