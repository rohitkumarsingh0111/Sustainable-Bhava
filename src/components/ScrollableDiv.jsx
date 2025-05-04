import React from 'react';
import Card from './Cards'; // Import the Card component

const ScrollableCardList = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap w-full">
      {/* Your cards */}
      <div className="inline-flex">
        <div className="w-80 mr-4"> {/* Adjust the width as needed */}
          <Card />
        </div>
        <div className="w-80 mr-4"> {/* Adjust the width as needed */}
          <Card />
        </div>
        <div className="w-80 mr-4"> {/* Adjust the width as needed */}
          <Card />
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default ScrollableCardList;
