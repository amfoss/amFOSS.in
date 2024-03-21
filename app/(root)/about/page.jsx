"use client";
import React from "react";
import about from "@/content/about.json";
import Image from "next/image";
import { Button } from "@/components/ui/button.jsx";

const About = () => {
  return (
    <div className="max-sm:py-8 text-center py-24">
      <h1 className="flex justify-start text-7xl max-md-custom-2:text-5xl max-sm:text-3xl tracking-wide leading-[80px] mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        ABOUT
      </h1>
      <div className="py-24 max-sm:py-8 text-white">
        <div className="mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <Image
            src={about[0].image}
            width={700}
            height={700}
            alt="About Us"
            className="w-full my-16 max-sm:my-4 shadow-xl rounded-xl"
          />
          <p className="text-start text-lg max-md-custom-2:text-md max-sm:text-sm mt-4 tracking-wide">
            {about[0].p1}
          </p>
          <br className="max-sm:hidden" />
          <Button
            className="text-2xl bg-[#D0A730] rounded-xl text-black w-1/7 h-1/3 mt-8 max-sm:hidden hover:text-[#D0A730] hover:bg-black transition duration-200"
            onClick={() => (window.location.href = "/ourstory")}
          >
            Read Our Story
          </Button>
        </div>

        <div className="bg-[#1E1D1D]">
          <div className="mt-24 py-12 max-sm:py-8 max-w-screen-full mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
            <div className="border-[#CCBE45] border-2 w-[55px] sm:w-[105px] rounded-2xl" />
            <h1 className="text-start text-4xl max-md-custom-2:text-2xl max-sm:text-lg tracking-wide leading-[80px]">
              OUR MISSION
            </h1>
            <br className="max-sm:hidden" />

            <div className="flex flex-row ">
              <div className="w-1/3">
                <p className="text-start text-xl max-md-custom-2:text-md max-sm:text-sm mt-4 tracking-wide">
                  {about[1].mission}
                </p>
              </div>
              <div className="flex flex-col items-start w-2/3">
                {Object.keys(about[1]).map((key, index) => (
                  <div key={index}>
                    {key !== 'mission' && (
                      <div>
                        <div className="w-1.5 h-1.5 bg-[#D9D9D9] rounded-full " />
                          <p className="text-start text-sm max-w-full px-6 max-md-custom-2:text-sm max-sm:text-sm mt-4 tracking-wide">
                            {about[1][key]}
                          </p>
                        {index !== Object.keys(about[1]).length - 1 && (
                          <div className="w-[1px] h-12 bg-[#D0A730]"></div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>


            <br className="max-sm:hidden" />
            <br className="max-sm:hidden" />
            <br className="max-sm:hidden" />


            <div className="flex flex-row ">
              <div className="w-1/3">
                <p className="text-start text-xl max-md-custom-2:text-md max-sm:text-sm mt-4 tracking-wide">
                  {about[2].mission}
                </p>
              </div>
              <div className="flex flex-col items-start w-2/3">
                {Object.keys(about[2]).map((key, index) => (
                  <div key={index}>
                    {key !== 'mission' && (
                      <div>
                        <div className="w-1.5 h-1.5 bg-[#D9D9D9] rounded-full " />
                          <p className="text-start text-sm max-w-full px-6 max-md-custom-2:text-sm max-sm:text-sm mt-4 tracking-wide">
                            {about[2][key]}
                          </p>
                        {index !== Object.keys(about[2]).length - 1 && (
                          <div className="w-[1px] h-12 bg-[#D0A730]"></div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <br className="max-sm:hidden" />
          </div>
        </div>


        <div className="mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <Image
              src={about[3].image}
              width={700}
              height={700}
              alt="About Us"
              className="w-full my-16 max-sm:my-4"
            />
          <div className="border-[#CCBE45] border-2 w-[55px] sm:w-[105px] rounded-2xl" />
          <h1 className="text-start text-4xl max-md-custom-2:text-2xl max-sm:text-lg tracking-wide leading-[80px]">
            MODUS OPERANDI
          </h1>


          <div className="flex flex-row">
            <p className="text-left p-14 w-1/3 text-xl max-md-custom-2:text-md max-sm:text-sm mt-4 tracking-wide">
              MENTORSHIP
            </p>

            <p className="text-start text-sm textmax-md-custom-2:text-md max-sm:text-sm mt-4 tracking-wide">
              {about[3].p1}
            </p>
          </div>

          <div className="flex flex-row">
          <p className="text-left p-14 w-1/3 text-xl max-md-custom-2:text-md max-sm:text-sm mt-4 tracking-wide">
          SELF-SUSTAINANCE
          </p>
          <p className="text-start text-sm max-md-custom-2:text-md max-sm:text-sm max-sm:py-2 tracking-wide">
            {about[3].p2}
          </p>
            
          <br className="max-sm:hidden" />
          </div>
          <br className="max-sm:hidden" />
        </div>


      </div>
    </div>
  );
};

export default About;
