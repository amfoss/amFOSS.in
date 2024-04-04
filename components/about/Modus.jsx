import React from "react";
import data from "@/content/about.json";
import Title from "../ui/title";

const Modus = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center px-40 mt-10 mb-20  tracking-[0.2em]">
        <div className="w-full my-10">
          <img src={data.modus.image} className="w-full" />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 text-white">
          <div className="flex flex-col col-span-3 mb-10">
            <Title title={data.modus.title} />
          </div>
          {data.modus.items.map((cont, index) => (
            <>
              <div className="md:text-xl 2xl:text-3xl my-20 w-full">
                {cont.title}
              </div>
              <div className="col-span-2 text-xl my-20 px-40">
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
