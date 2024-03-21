"use client"
import React from 'react'
import ourstory from '@/content/ourstory.json'
import Image from 'next/image'
import {Button} from '@/components/ui/button.jsx'

const OurStory = () => {
  return (
    <div className="max-sm:py-8 text-center py-24">
      <h1 className="flex justify-justify text-7xl max-md-custom-2:text-5xl max-sm:text-3xl tracking-wide leading-[80px] mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-24">
        OUR STORY
      </h1>
      <div className="mt-8 md:mt-32 py-24 max-sm:py-8 text-white">
        <div className="mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-24">
          <div className="border-[#CCBE45] border-2 w-[55px] sm:w-[105px] rounded-2xl" />
          <h1 className="text-justify text-4xl max-md-custom-2:text-2xl max-sm:text-lg tracking-wide leading-[80px]">
            {ourstory[0].Timestamp}
          </h1>
          <p className="text-justify text-lg max-md-custom-2:text-md max-sm:text-sm mt-4 tracking-wide">
            {ourstory[0].p1}
          </p>
          <br className="max-sm:hidden" />
          <p className="text-justify text-lg max-md-custom-2:text-md max-sm:text-sm max-sm:py-2 tracking-wide">
            {ourstory[0].p2}
          </p>
          <br className="max-sm:hidden" />
          <p className="text-justify text-lg max-md-custom-2:text-md max-sm:text-sm max-sm:py-2 tracking-wide">
            {ourstory[0].p3}
          </p>
        </div>
        <div className="bg-[#1E1D1D]">
          <div className="mt-24 py-12 max-sm:py-8 max-w-screen-full mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-24">
            <div className="border-[#CCBE45] border-2 w-[55px] sm:w-[105px] rounded-2xl" />
            <h1 className="text-justify text-4xl max-md-custom-2:text-2xl max-sm:text-lg tracking-wide leading-[80px]">
              {ourstory[1].Timestamp}
            </h1>
            <Image
              src={ourstory[1].image}
              width={700}
              height={700}
              alt="Our Story"
              className="w-full my-16 max-sm:my-4 shadow-xl rounded-xl"
            />
            <p className="text-justify text-lg max-md-custom-2:text-md max-sm:text-sm mt-4 tracking-wide">
              {ourstory[1].p1}
            </p>
            <br className="max-sm:hidden" />
            <p className="text-justify text-lg max-md-custom-2:text-md max-sm:text-sm max-sm:py-2 tracking-wide">
              {ourstory[1].p2}
            </p>
            <br className="max-sm:hidden" />
            <p className="text-justify text-lg max-md-custom-2:text-md max-sm:text-sm max-sm:py-2 tracking-wide">
              {ourstory[0].p3}
            </p>
          </div>
        </div>
        <div className="py-12 max-sm:py-8 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-24">
          <div className="border-[#CCBE45] border-2 w-[55px] sm:w-[105px] rounded-2xl" />
          <h1 className="text-justify text-4xl max-md-custom-2:text-2xl max-sm:text-lg tracking-wide leading-[80px]">
            {ourstory[2].Timestamp}
          </h1>
          <p className="text-justify text-lg max-md-custom-2:text-md max-sm:text-sm mt-4 tracking-wide">
            {ourstory[2].p1}
          </p>
          <br className="max-sm:hidden" />
          <p className="text-justify text-lg max-md-custom-2:text-md max-sm:text-sm max-sm:py-2 tracking-wide">
            {ourstory[2].p2}
          </p>
        </div>
        <Button
          className="text-2xl bg-[#D0A730] rounded-xl text-black w-1/7 h-1/3 mt-8 max-sm:hidden hover:text-[#D0A730] hover:bg-black transition duration-200"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default OurStory