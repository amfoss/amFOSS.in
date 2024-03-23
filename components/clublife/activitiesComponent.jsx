import React from "react";
import Title from "../ui/title";
import data from "@/content/clublife.json";

const activitiesComponent = () => {
  return (
    <>
      <div className="mt-5 md:pt-40 pb-10 min-h-fit">
        <div className="w-full md:px-40 px-5 mb-10">
          <Title title="ACTIVITIES" />
        </div>
        <div className="md:px-40 px-5 grid md:grid-cols-2 grid-cols-1 gap-x-20">
          {/* fosstalks */}
          <div className="text-white md:pt-10 md:pb-32 md:pr-40">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] relative md:mb-10 mb-5">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.fosstalks.title}
            </h1>
            <p className="md:text-xl">
              {data.activities.fosstalks.description}
            </p>
          </div>
          <div className="row-span-2 h-[90%] bg-white ml-10 mr-20 md:block hidden"></div>
          {/* opentalks */}
          <div className="text-white pt-10 md:pb-32 md:pr-40">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] relative md:mb-10 mb-5">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.opentalks.title}
            </h1>
            <p className="md:text-xl">
              {data.activities.opentalks.description}
            </p>
          </div>
          {/* documentary */}
          <div className="text-white pt-10 md:pb-32 md:pr-40">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] relative md:mb-10 mb-5">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.documentary.title}
            </h1>
            <p className="md:text-xl">
              {data.activities.documentary.description}
            </p>
          </div>
          {/* amfossplays */}
          <div className="text-white pt-10 md:pb-32 md:pr-40 md:ml-20">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] relative md:mb-10 mb-5">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.amfossplays.title}
            </h1>
            <p className="md:text-xl">
              {data.activities.amfossplays.description}
            </p>
          </div>
          <div className="row-span-2 h-[90%] bg-white -ml-10 mr-40 md:block hidden"></div>
          {/* amfossbiosnight */}
          <div className="text-white pt-10 md:pb-32 md:pr-40 md:ml-20">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] relative md:mb-10 mb-5">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.amfossbiosnight.title}
            </h1>
            <p className="md:text-xl">
              {data.activities.amfossbiosnight.description}
            </p>
          </div>
          {/* socialservice */}
          <div className="text-white pt-10 md:pb-32 md:pr-40 md:ml-20">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] relative md:mb-10 mb-5">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.socialservice.title}
            </h1>
            <p className="md:text-xl">
              {data.activities.socialservice.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default activitiesComponent;
