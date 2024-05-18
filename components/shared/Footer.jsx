import React from 'react'
import Image from 'next/image'
import dayjs from "dayjs";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 py-2 sm:py-4 md:px-8 bg-[#2e2e2e]">
      <div className="mt-7 lg:mt-4 place-self-center sm:place-self-start sm:ml-8">
        <Image
          src="/assets/icons/amrita-white.png"
          width={180}
          height={180}
          alt="Amrita University"
          className="cursor-pointer transition duration-200 "
        />
      </div>

      <div className="p-5 text-white text-lg text-center max-sm:text-sm mt-1 place-self-center sm:place-self-end">
        © Team amFOSS 2007-{dayjs().year()}. All Rights Reserved.
      </div>

    </div>
  )
}

export default Footer