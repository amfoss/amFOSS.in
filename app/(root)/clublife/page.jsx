import React from "react";
import data from "@/content/clublife.json";
import TaskForcesComponent from "@/components/clublife/taskForcesComponent";

const page = () => {
  return (
    <>
      <div className="flex-col flex-center justify-center items-center">
        <div className="max-sm:py-8 md:text-left text-center py-72 md:min-h-[95vh] mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <h1 className="text-7xl max-md-custom:text-5xl max-sm:text-3xl tracking-wide leading-[110px]">
            LIFE IN THE CLUB
          </h1>
        </div>
      </div>
      {/* foss lab */}
      <div className="grid md:grid-cols-3 grid-cols-1 min-h-fit">
        <div className="col-span-1 flex md:justify-center items-center">
          <h1 className="md:text-4xl text-lg tracking-[0.3em] px-5 md:text-center text-left">
            {data.fosslab.title}
          </h1>
        </div>
        <div className="md:col-span-2 col-span-1 lg:px-32 md:px-5">
          <p className="h-full flex justify-center items-center text-white lg:text-3xl md:text-2xl p-5">
            {data.fosslab.description}
          </p>
        </div>
      </div>
      {/* taskforces */}
      <TaskForcesComponent />
    </>
  );
};

export default page;
