import React from "react";
import data from "@/content/ourstory.json";
import Title from "../ui/title";

const Component2 = () => {
  return (
    <>
      <div className="w-full md:px-40 px-5 bg-[#242424] py-10">
        <Title title={data.second.title} />
        <img src={data.second.image} className="my-10" />
        <div className="text-white md:text-xl tracking-[0.3em] md:my-20">
          {data.second.description.map((desc, index) => (
            <p key={index} className="my-10">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Component2;
