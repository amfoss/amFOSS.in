import React from 'react'
import herotext from '@/content/homehero.json'
import whoweare from '@/content/whoweare.json'
import Image from 'next/image'
import Title from '@/components/ui/title'
import Dynamicard from '@/components/ui/dynamicard'
import whatwedo from '@/content/whatwedo.json'
import Achievement from '@/components/ui/achievement'
import achievement from '@/content/firsttodo.json'

const page = () => {  
  return (
    <div className="flex-col flex-center justify-center items-center">
      <div className="max-sm:py-8 text-center py-72 md:min-h-screen mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <h1 className="text-7xl max-md-custom:text-5xl max-sm:text-3xl tracking-wide leading-[110px]">
          {herotext.hero}
        </h1>
      </div>
      <div className="bg-[#1E1D1D] flex items-center md:min-h-screen relative">
        <div className="grid grid-cols-3 py-16 max-sm:py-16 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <div className="flex items-center col-span-1 max-md-grid:col-span-3">
            <h1 className="text-3xl md-grid:text-7xl max-sm:text-xl text-center tracking-wide">
              {whoweare.title1}
              <br className="max-md-grid:hidden" />
              <span> {whoweare.title2}</span>
            </h1>
          </div>
          <div className="col-span-2 max-md-grid:col-span-3">
            <br />
            <p className="text-xl md-grid:text-2xl max-sm:text-sm text-white text-justify tracking-wide">
              {whoweare.desc1}
              <br /> <br />
              {whoweare.desc2}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex-col flex-center mx-auto sm:py-48 ">
        <div className="flex gap-2">
          <Image
            src="/home_1.png"
            width={985}
            height={175}
            alt="image 1"
          />
          <Image
            src="/home_2.png"
            width={423}
            height={175}
            alt="image 2"
          />
        </div>
        <div className="flex gap-2 py-2">
          <Image
            src="/home_3.png"
            width={844}
            height={175}
            alt="image 3"
          />
          <Image
            src="/home_4.png"
            width={564}
            height={175}
            alt="image 4"
          />
        </div>
      </div> */}
      <div className="py-12 sm:py-48 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Title title="WHAT WE DO" />
        <div className="grid grid-cols-2 gap-1 py-8 sm:py-16">
          {whatwedo.map((item, index) => (
            <Dynamicard
              key={index}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
      </div>
      <div className="py-18 sm:py-12 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <h1 className="text-xl md-custom:text-7xl sm:text-4xl text-center tracking-wide">
          Members of amFOSS were the
          <br />
          first in Amritapuri to:
        </h1>
        <div className="py-12 sm:py-32">
          {achievement.map((item, index) => (
            <div
              key={index}
              className={`w-1/2 md-custom:w-1/3 max-sm:w-full mb-8 ${
                index % 3 === 0
                  ? "mr-auto"
                  : index % 3 === 1
                  ? "ml-auto"
                  : "mx-auto"
              }`}
            >
              <Achievement achievement={item.Achievement} event={item.Event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page