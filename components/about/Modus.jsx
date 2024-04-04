import React from "react";
import data from "@/content/about.json";
import Title from "../ui/title";

const Modus = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center md:px-40 px-5 md:mt-10 md:mb-20 my-5 tracking-[0.2em]">
        <div className="w-full my-10">
          <img src={data.modus.image} className="w-full" />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 text-white">
          <div className="flex flex-col md:col-span-3 col-span-1 mb-10">
            <Title title={data.modus.title} />
          </div>
          {data.modus.items.map((cont, index) => (
            <>
              <div className="text-xl 2xl:text-3xl md:my-20 w-full">
                {cont.title}
              </div>
              <div className="md:col-span-2 col-span-1 md:text-xl md:my-20 my-5 2xl:px-40">
                {cont.description}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Modus;
