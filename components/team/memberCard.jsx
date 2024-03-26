import React from "react";

const memberCard = ({ name, title, githubLink, twitterLink, linkedinLink }) => {
  return (
    <>
      <div className="bg-[#252524] w-full h-80 relative rounded-3xl mt-32 flex justify-center items-center">
        <div className="absolute left-1/2 bg-[#D9D9D9] w-3/4 h-3/4 rounded-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="text-white mt-40 text-center">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-lg">{title}</p>
          <div className="flex justify-center mt-10">
            <a href={githubLink} target="_blank" rel="noreferrer">
              <img
                src="assets/icons/socials/Vector-3.svg"
                alt="github"
                className="w-8 h-8 mx-2"
              />
            </a>
            <a href={twitterLink} target="_blank" rel="noreferrer">
              <img
                src="assets/icons/socials/Vector-2.svg"
                alt="twitter"
                className="w-8 h-8 mx-2"
              />
            </a>
            <a href={linkedinLink} target="_blank" rel="noreferrer">
              <img
                src="assets/icons/socials/Vector-4.svg"
                alt="linkedin"
                className="w-8 h-8 mx-2"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default memberCard;
