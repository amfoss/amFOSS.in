import React from "react";
import Image from "next/image";

const memberCard = ({
  name,
  title,
  githubLink,
  twitterLink,
  linkedinLink,
  imgPath,
}) => {
  return (
    <>
      <div className="bg-[#252524] w-full xl:w-3/4 lg:h-80 md:h-72 h-44 relative rounded-3xl md:mt-32 mt-20 flex justify-center items-center">
        <div className="absolute left-1/2 md:top-0 md:mt-0 -mt-10 bg-[#D9D9D9] md:w-3/4 md:h-3/4 w-[80%] h-32 md:rounded-3xl rounded-[2rem] -translate-x-1/2 -translate-y-1/2">
          <Image
            src={imgPath}
            width={250}
            height ={250}
            className="h-full w-full md:rounded-3xl rounded-[2rem]"
            alt={name}
          />
        </div>
        <div className="text-white lg:mt-40 md:mt-28 mt-10 text-center px-1">
          <h1 className="md:text-2xl text-xs font-bold">{name}</h1>
          <p className="md:text-lg text-xs">{title}</p>
          <div className="flex justify-center lg:mt-10 md:mt-5 mt-1">
            <a href={githubLink} target="_blank" rel="noreferrer">
              <img
                src="assets/icons/socials/Vector-3.svg"
                alt="github"
                className="lg:w-8 md:w-6 w-3 lg:h-8 md:h-6 h-3 mx-2"
              />
            </a>
            <a href={twitterLink} target="_blank" rel="noreferrer">
              <img
                src="assets/icons/socials/Vector-2.svg"
                alt="twitter"
                className="lg:w-8 md:w-6 w-3 lg:h-8 md:h-6 h-3 mx-2"
              />
            </a>
            <a href={linkedinLink} target="_blank" rel="noreferrer">
              <img
                src="assets/icons/socials/Vector-4.svg"
                alt="linkedin"
                className="llg:w-8 md:w-6 w-3 lg:h-8 md:h-6 h-3 mx-2"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default memberCard;
