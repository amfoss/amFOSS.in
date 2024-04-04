import React from "react";
import data from "@/content/about.json";
import Title from "../ui/title";

const OurMission = () => {
  return (
    <>
      <div className="bg-[#242424] mt-5 md:pt-40 min-h-fit text-white tracking-wide">
        <div className="grid md:grid-cols-3 grid-cols-1 md:px-40 px-5">
          <div className="flex flex-col md:col-span-3 col-span-1 mb-10 mt-10">
            <Title title="OUR MISSION" />
          </div>
          {data.mission.map((cont, index) => (
            <>
              <div className="text-xl 2xl:text-3xl">{cont.title}</div>
              <div className="md:col-span-2 col-span-1 md:my-0 my-10">
                {cont.points.map((point, index) => (
                  <div
                    key={index}
                    className="relative min-h-20 md:text-xl md:ml-0 ml-5"
                  >
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
