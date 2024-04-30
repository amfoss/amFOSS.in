import React from "react";
import Slider from 'react-infinite-logo-slider'

const InfiniteSlider = ({data}) => {
  return (
      <Slider duration={100}>
        {data.map((company, index) => (
          <div className="flex justify-center items-center">
            <Slider.Slide key={index} className="">
              <img
                src={company.img_path}
                alt={company.alt}
                className="py-2 px-6"
              />
            </Slider.Slide>
          </div>
        ))}
      </Slider>
  );
};

export default InfiniteSlider;
