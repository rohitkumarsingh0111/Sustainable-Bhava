import React from 'react'
import Group_4 from '../SB photos/Group 4.jpg'
import './Carousel.css';

function Carousel() {
  return (
    <>
     <div className="w-full h-auto -mt-12 overflow-hidden">
      <img
        src={Group_4}
        alt="Description"
        className="w-full h-auto object-cover"
      />
    </div>
    </>
  )
}

export default Carousel