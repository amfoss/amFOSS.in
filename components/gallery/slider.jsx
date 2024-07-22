import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { Blur } from 'transitions-kit'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1
    }
};

const Slider = ({ sliderImageUrl, showDescription }) => {
    return (
        <div className="parent py-10">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                // showDots={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {sliderImageUrl.map((imageUrl, index) => {
                    return (
                        <div className="slider group" key={index}>
                            <img src={imageUrl.url} Transition={Blur} loading="lazy" alt={imageUrl.alt}/>
                            {showDescription && ( 
                            <div className="absolute rounded-b-[0.6rem] inset-x-0 bottom-8 bg-black bg-opacity-80 py-2 px-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-center">{imageUrl.description}</p>
                            </div>
                            )}
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default Slider;
