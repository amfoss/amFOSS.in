import React from "react";
import Image from "next/image";

const seeMore = ({showContent, toggle}) => {
  return (
    <>
      <buttton onClick={showContent}>
        <div className="flex flex-col justify-center items-center md:mt-20 mt-5">
          <p className="text-center md:text-3xl text-xl">See more</p>
          <Image
            src="/assets/icons/seeMore.png"
            width={100}
            height={100}
            alt="button"
            className={`md:w-14 w-10 ${toggle ? "tranform rotate-180":"tranform rotate-0"} transition-transform duration-300 ease-in-out`}
          />
        </div>
      </buttton>
    </>
  );
};

export default seeMore;
