import React from "react";
import data from "@/content/clublife.json";

const taskForcesComponent = () => {
  return (
    <>
      <div className="md:bg-[#242424] mt-5 md:pt-40 min-h-fit">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="flex flex-col row-span-3">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] px-5 md:text-center text-left">
              {data.taskForces.title}
            </h1>
            <p className="md:text-xl text-white my-10 tracking-wide md:text-center md:px-12 px-5">
              {data.taskForces.description}
            </p>
          </div>
          {data.taskForces.content.map((cont) => (
            <div key={cont.title} className="text-white md:px-20 px-5">
              <p className="md:text-3xl font-medium tracking-[0.3em] uppercase fond-bold">
                {cont.title}
              </p>
              <p className="md:text-xl md:mt-10 md:mb-20 my-5 tracking-wide">
                {cont.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default taskForcesComponent;
