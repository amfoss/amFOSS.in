import React from "react";
import data from "@/content/about.json";
import Title from "../ui/title";

const OurMission = () => {
  return (
    <>
      <div className="md:bg-[#242424] mt-5 md:pt-40 min-h-fit text-white tracking-wide">
        <div className="grid md:grid-cols-3 grid-cols-1 px-40">
          <div className="flex flex-col col-span-3 mb-10">
            <Title title="OUR MISSION" />
          </div>
          {data.mission.map((cont, index) => (
            <>
              <div className="md:text-xl 2xl:text-3xl">{cont.title}</div>
              <div className="col-span-2">
                {cont.points.map((point, index) => (
                  <div key={index} className="relative min-h-20 text-xl">
                    <div className="absolute -left-5 top-2 h-full">
                      <div className="w-2 h-2 bg-[#D9D9D9] rounded-full " />
                      {index !== cont.points.length - 1 && (
                        <div className="w-2 h-full flex justify-center">
                          <div className="w-[2px] bg-[#D0A730]"></div>
                        </div>
                      )}
                    </div>
                    <p className="">{point}</p>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurMission;
