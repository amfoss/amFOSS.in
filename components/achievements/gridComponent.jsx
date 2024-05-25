import React from "react";
import { useState } from "react";
import data from "@/content/achievements.json";
import SeeMore from "@/components/achievements/seeMore";

const gridComponent = () => {
  const [gsocScrolller, setGsocScrolller] = useState(false);
  const [gsocToggle, setGsocToggle] = useState(false);

  const showGSOC = () => {
    setGsocScrolller(!gsocScrolller);
    setGsocToggle(!gsocToggle);
  };

  return (
    <div className="block">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:h-[30rem] h-[20rem] md:order-1 order-2 p-10 flex items-center">
          <p className="text-white md:text-2xl sm:text-xl md:text-left text-center">
            {data.gsoc.compressedContent}
          </p>
        </div>
        <div className="md:h-[30rem] h-[15rem] bg-[#D0A730] md:w-[90%] md:ml-[10%] md:order-2 order-1 text-black md:p-10 flex flex-col items-center justify-center">
          <p className="uppercase md:text-6xl text-3xl text-center tracking-wider pt-12 md:pt-20">
            {data.gsoc.title}
          </p>
          <SeeMore showContent={showGSOC} toggle={gsocToggle} />
        </div>
      </div>
      </div>
  );
};

export default gridComponent;
