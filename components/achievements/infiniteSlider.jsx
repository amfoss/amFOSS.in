import React from "react";
import Slider from 'react-infinite-logo-slider'

const InfiniteSlider = ({data, direction}) => {
  return (
      <Slider duration={40} toRight={direction} blurBoderColor={'black'}>
        {data.map((company, index) => (
          <div className="flex justify-center items-center">
            <Slider.Slide key={index} className="">
              <img
                src={company.img_path}
                alt={company.alt}
                className="md:w-44 md:h-44 px-2"
              />
            </Slider.Slide>
          </div>
        ))}
      </Slider>
  );
};

export default InfiniteSlider;
