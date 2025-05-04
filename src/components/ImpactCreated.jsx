import React from 'react';
import Rectangle25 from '../SB photos/Rectangle 25.png';
import Rectangle26 from '../SB photos/Rectangle 26.png';
import Rectangle27 from '../SB photos/Rectangle 27.png';
import Rectangle28 from '../SB photos/Rectangle 28.png';
import Rectangle29 from '../SB photos/Rectangle 29.png';

const ImpactCreated = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        
        {/* First Image with Text */}
        <div className="relative w-full mb-0">
          <img src={Rectangle25} alt="Stories" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
            <span>20+ Stories</span>
          </div>
        </div>
        
        {/* Second Image with Text */}
        <div className="relative w-full mb-0">
          <img src={Rectangle26} alt="Students" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
            <span>1600+ Students</span>
          </div>
        </div>
        
        {/* Third Image with Text */}
        <div className="relative w-full mb-0">
          <img src={Rectangle27} alt="Performances" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
            <span>4 Performances</span>
          </div>
        </div>
        
        {/* Fourth Image with Text */}
        <div className="relative w-full mb-0">
          <img src={Rectangle28} alt="Educational Institutions" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
            <span>8 Educational Institutions</span>
          </div>
        </div>
        
        {/* Fifth Image with Text */}
        <div className="relative w-full">
          <img src={Rectangle29} alt="Sessions" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
            <span>39 Sessions</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ImpactCreated;
