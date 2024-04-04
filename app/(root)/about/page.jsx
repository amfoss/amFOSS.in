"use client";
import React from "react";
import Hero from "@/components/about/Hero";
import OurMission from "@/components/about/OurMission";
import Modus from "@/components/about/Modus";
import MeetTeamHero from "@/components/about/MeetTeamHero";

const About = () => {
  return (
    <>
      <div className="flex-col flex-center justify-center items-center">
        <div className="max-sm:py-8 md:text-left text-center py-72 md:min-h-[95vh] mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <h1 className="text-7xl max-md-custom:text-5xl max-sm:text-3xl tracking-wide leading-[110px]">
            ABOUT
          </h1>
        </div>
      </div>
      <Hero />
      {/* Our mission */}
      <OurMission />
      {/* Modus Operandi */}
      <Modus />
      {/* Meet Team */}
      <MeetTeamHero />
    </>
  );
};

export default About;
