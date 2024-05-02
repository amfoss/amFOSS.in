import React from "react";
import { useState } from "react";
import data from "@/content/achievements.json";
import SeeMore from "@/components/achievements/seeMore";
import companies_data from "@/content/companies";
import InfiniteSlider from "./infiniteSlider";
import { convertTypeAcquisitionFromJson } from "typescript";

const gridComponent = () => {
  const [companyScroller, setCompanyScroller] = useState(false);
  const [companyToggle, setCompanyToggle] = useState(false);
  const [summerSchoolScroller, setSummerShcoolScroller] = useState(false);
  const [summerSchoolToggle, setSummerSchoolToggle] = useState(false);
  const [gsocScrolller, setGsocScrolller] = useState(false);
  const [gsocToggle, setGsocToggle] = useState(false);


  const showGSOC = ()=>{
    setGsocScrolller(!gsocScrolller);
    setGsocToggle(!gsocToggle);
  }
  
  const showCompanies = () => {
    setCompanyScroller(!companyScroller);
    setCompanyToggle(!companyToggle);
  };

  const showSummerSchools = () =>{
    setSummerShcoolScroller(!summerSchoolScroller);
    setSummerSchoolToggle(!summerSchoolToggle);
  }

  return (
    <div className="block">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:h-[30rem] h-[20rem] md:order-1 order-2 p-10 flex items-center">
          <p className="text-white lg:text-3xl md:text-2xl sm:text-xl md:text-left text-center">
            {data.gsoc.compressedContent}
          </p>
        </div>
          <div className="md:h-[30rem] h-[15rem] bg-[#D0A730] md:w-[90%] md:ml-[10%] md:order-2 order-1 text-black md:p-10 flex flex-col items-center justify-center">
            <p className="uppercase md:text-6xl text-3xl text-center tracking-wider pt-12 md:pt-20">
              {data.gsoc.title}
            </p>
            <SeeMore showContent={showGSOC} toggle={gsocToggle}/>
          </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:h-[30rem] h-[15rem] bg-[#D0A730] md:w-[90%] md:mr-[10%] md:order-1 order-1 text-black md:p-10 flex flex-col justify-center items-center">
          <p className="uppercase md:text-6xl text-3xl text-center tracking-wider pt-20">
            {data.internships.title}
          </p>
          <SeeMore showContent={showCompanies} toggle={companyToggle} />
        </div>
        <div className="md:h-[30rem] h-[20rem] bg-[#1E1D1D] md:ml-[-10%] md:order-2 order-2 p-10 flex items-center">
          <p className="text-white lg:text-3xl md:text-2xl sm:text-xl md:text-right text-center">
            {data.internships.compressedContent}
          </p>
        </div>
      </div>
      <div className={`overflow-hidden transition-opacity transition-height duration-1000 ${companyScroller ? "opacity-100 h-auto" : "opacity-100 h-auto"}`}>
        <InfiniteSlider data={companies_data.slice(0,10)}  toRight={false}/>
        <InfiniteSlider data={companies_data.slice(11,21)} toRight={true}/>
        <InfiniteSlider data={companies_data.slice(22,34)} toRight={false}/>
        {/* <InfiniteSlider data={companies_data.slice(34,)} /> */}
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:h-[30rem] h-[20rem] md:order-1 order-2 p-10 flex items-center">
          <p className="text-white lg:text-3xl md:text-2xl sm:text-xl  md:text-left text-center">
            {data.summerSchools.compressedContent}
          </p>
        </div>
        <div className="md:h-[30rem] h-[15rem] bg-[#D0A730] md:w-[90%] md:ml-[10%] md:order-2 order-1 text-black md:p-10 flex flex-col  justify-center items-center">
          <p className="uppercase md:text-6xl text-3xl text-center tracking-wider pt-20">
            {data.summerSchools.title}
          </p>
          <SeeMore showContent={showSummerSchools} toggle={summerSchoolToggle}/>
        </div>
      </div>
    </div>
  );
};

export default gridComponent;
