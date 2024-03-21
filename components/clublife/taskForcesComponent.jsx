import React from "react";
import data from "@/content/clublife.json";

const taskForcesComponent = () => {
  return (
    <>
      <div className="bg-[#242424] mt-5 pt-40 min-h-fit">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="flex flex-col row-span-3">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] px-5 md:text-center text-left">
              {data.taskForces.title}
            </h1>
            <p className="text-xl text-white my-10 tracking-wide text-center px-12">
              {data.taskForces.description}
            </p>
          </div>
          {data.taskForces.content.map((cont) => (
            <div key={cont.title} className="text-white px-20">
              <p className="text-3xl font-medium tracking-[0.3em] uppercase fond-bold">
                {cont.title}
              </p>
              <p className="text-xl mt-10 mb-20 tracking-wide">
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
