import React from "react";
import GridComponent from "@/components/achievements/gridComponent";

const page = () => {
  return (
    <>
      <div className="flex-col flex-center justify-center items-center">
        <div className="max-sm:py-8 md:text-left text-center py-72 md:min-h-screen mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <h1 className="text-7xl max-md-custom:text-5xl max-sm:text-3xl tracking-wide leading-[110px]">
            ACHIVEMENTS
          </h1>
        </div>
      </div>
      <GridComponent />
      <div className="py-20"></div>
    </>
  );
};

export default page;
