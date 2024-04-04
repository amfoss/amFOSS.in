import React from "react";
import data from "@/content/about.json";
import { useRouter } from "next/navigation";

const MeetTeamHero = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex-col flex-center justify-center items-center border-[#D0A730] md:border-[1.5rem] border-[0.5rem] text-white bg-[#1E1D1D]">
        <div className="max-sm:py-8 text-center py-72 md:min-h-[50vh] mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 md:w-1/2">
          <h1 className="2xl:text-3xl text-xl tracking-wide my-10">
            {data.footer.title}
          </h1>
          <button
            onClick={() => router.push("/team")}
            className="text-2xl bg-[#D0A730] font-medium rounded-xl text-black w-fit px-10 py-2 tracking-wide mt-8 hover:text-white hover:bg-[#242424] transition duration-200"
          >
            {data.footer.button}
          </button>
        </div>
      </div>
    </>
  );
};

export default MeetTeamHero;
