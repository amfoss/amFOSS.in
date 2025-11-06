import React from "react";
import { useState, useEffect } from "react";
import Slider from 'react-infinite-logo-slider'

const InfiniteSlider = ({ data, direction }) => {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowSlider(true);
    }, 1000);
    return () => clearTimeout(delay);
  }, []);

  const moveRight = direction === "right" || direction === true;

  return (
    <div className="w-full flex justify-center items-center">
      {showSlider && (
        <Slider
          toRight={moveRight}
          blurBorderColor="black"
          duration={90}
        >
          {data.map((company, index) => (
            <Slider.Slide key={index}>
              <img
                src={company.img_path}
                alt={company.alt || `company-${index}`}
                className="md:w-44 md:h-44 object-contain"
              />
            </Slider.Slide>
          ))}
        </Slider>
      )}
    </div>
  );
};


export default InfiniteSlider;
