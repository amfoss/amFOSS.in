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
  return (
    <div>
      {showSlider && (
        <Slider toRight={direction} blurBoderColor={'black'}>
          {data.map((company, index) => (
            <div className="flex justify-center items-center" key={index}>
              <Slider.Slide className="">
                <img
                  src={company.img_path}
                  alt={company.alt}
                  className="md:w-44 md:h-44"
                />
              </Slider.Slide>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default InfiniteSlider;
