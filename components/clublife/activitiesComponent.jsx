import React from "react";
import Title from "../ui/title";
import data from "@/content/clublife.json";

const activitiesComponent = () => {
  return (
    <>
      <div className="mt-5 pt-40 min-h-fit">
        <div className="w-full px-40 mb-10">
          <Title title="ACTIVITIES" />
        </div>
        <div className="px-40 grid md:grid-cols-2 grid-cols-1 gap-x-20">
          {/* fosstalks */}
          <div className="text-white pt-10 pb-32 pr-40">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] relative mb-10">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.fosstalks.title}
            </h1>
            <p className="text-xl">{data.activities.fosstalks.description}</p>
          </div>
          <div className="row-span-2 h-[90%] bg-white ml-10 mr-20"></div>
          {/* opentalks */}
          <div className="text-white pt-10 pb-32 pr-40">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] relative mb-10">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.opentalks.title}
            </h1>
            <p className="text-xl">{data.activities.opentalks.description}</p>
          </div>
          {/* documentary */}
          <div className="text-white pt-10 pb-32 pr-40">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] relative mb-10">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.documentary.title}
            </h1>
            <p className="text-xl">{data.activities.documentary.description}</p>
          </div>
          {/* amfossplays */}
          <div className="text-white pt-10 pb-32 pr-40 ml-20">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] relative mb-10">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.amfossplays.title}
            </h1>
            <p className="text-xl">{data.activities.amfossplays.description}</p>
          </div>
          <div className="row-span-2 h-[90%] bg-white -ml-10 mr-40"></div>
          {/* amfossbiosnight */}
          <div className="text-white pt-10 pb-32 pr-40 ml-20">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] relative mb-10">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.amfossbiosnight.title}
            </h1>
            <p className="text-xl">
              {data.activities.amfossbiosnight.description}
            </p>
          </div>
          {/* socialservice */}
          <div className="text-white pt-10 pb-32 pr-40 ml-20">
            <h1 className="md:text-4xl text-lg tracking-[0.3em] relative mb-10">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.socialservice.title}
            </h1>
            <p className="text-xl">
              {data.activities.socialservice.description}
            </p>
          </div>

          <div className="row-span-2"></div>
        </div>
      </div>
    </>
  );
};

export default activitiesComponent;
