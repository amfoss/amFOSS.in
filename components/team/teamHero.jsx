import React from "react";
import data from "@/content/team.json";
const teamHero = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-1 md:px-10 px-5 text-white">
        <div className="w-full flex flex-col justify-center items-center">
          <img src={data.hero.img} alt="team" className="" />
          <h1 className="md:text-4xl text-3xl mt-5">{data.hero.title}</h1>
          <p className="md:text-3xl text-2xl text-center">
            {data.hero.subtitle}
          </p>
        </div>
        <div className="md:col-span-3 col-span-1 px-5">
          {data.hero.description.map((desc, id) => {
            return (
              <p className="md:text-xl mt-5" key={id}>
                {desc}
              </p>
            );
          })}
          <p className="md:text-xl mt-5">"{data.hero.quote}"</p>
        </div>
      </div>
    </>
  );
};

export default teamHero;
