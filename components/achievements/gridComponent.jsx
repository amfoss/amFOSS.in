import React from "react";
import data from "@/content/achievements.json";
import SeeMore from "@/components/achievements/seeMore";

const gridComponent = () => {
  return (
    <div className="block">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:h-[30rem] h-[20rem] md:order-1 order-2 p-10 flex items-center">
          <p className="text-white lg:text-3xl md:text-2xl sm:text-xl md:text-left text-center">
            {data.gsoc.compressedContent}
          </p>
        </div>
        <div className="md:h-[30rem] h-[15rem] bg-[#D0A730] md:w-[90%] md:ml-[10%] md:order-2 order-1 text-black md:p-10 flex flex-col justify-center items-center">
          <p className="uppercase md:text-6xl text-3xl text-center tracking-wider">
            {data.gsoc.title}
          </p>
          <SeeMore />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:h-[30rem] h-[15rem] bg-[#D0A730] md:w-[90%] md:mr-[10%] md:order-1 order-1 text-black md:p-10 flex flex-col justify-center items-center">
          <p className="uppercase md:text-6xl text-3xl text-center tracking-wider">
            {data.internships.title}
          </p>
          <SeeMore />
        </div>
        <div className="md:h-[30rem] h-[20rem] bg-[#1E1D1D] md:ml-[-10%] md:order-2 order-2 p-10 flex items-center">
          <p className="text-white lg:text-3xl md:text-2xl sm:text-xl md:text-right text-center">
            {data.internships.compressedContent}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:h-[30rem] h-[20rem] md:order-1 order-2 p-10 flex items-center">
          <p className="text-white lg:text-3xl md:text-2xl sm:text-xl  md:text-left text-center">
            {data.summerSchools.compressedContent}
          </p>
        </div>
        <div className="md:h-[30rem] h-[15rem] bg-[#D0A730] md:w-[90%] md:ml-[10%] md:order-2 order-1 text-black md:p-10 flex flex-col  justify-center items-center">
          <p className="uppercase md:text-6xl text-3xl text-center tracking-wider">
            {data.summerSchools.title}
          </p>
          <SeeMore />
        </div>
      </div>
    </div>
  );
};

export default gridComponent;
