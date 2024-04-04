import React from "react";
import data from "@/content/ourstory.json";
import Title from "../ui/title";

const Component1 = () => {
  return (
    <>
      <div className="w-full md:px-40 px-5">
        <Title title={data.first.title} />
        <div className="text-white md:text-xl tracking-[0.3em] md:my-20">
          {data.first.description.map((desc, index) => (
            <p key={index} className="my-10">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Component1;
