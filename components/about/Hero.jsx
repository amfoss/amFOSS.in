import React from "react";
import data from "@/content/about.json";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col justify-center md:px-40 px-5 mb-20">
        <div className="w-full my-10">
          <img src={data.hero.image} className="w-full" />
        </div>
        <h1 className="text-justify text-white text-xl 2xl:text-3xl tracking-wide my-10">
          {data.hero.description}
        </h1>
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/ourstory")}
            className="text-2xl bg-[#D0A730] font-medium rounded-xl text-black w-fit px-10 py-2 tracking-wide mt-8 hover:text-white hover:bg-[#242424] transition duration-200"
          >
            {data.hero.button}
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
