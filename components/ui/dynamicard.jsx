"use client"
import React, { useState } from "react"

const Dynamicard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState(false)

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsHovered(true)
    }, 300)
    setHoverTimeout(timeout)
  }

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
    }
    setIsHovered(false)
  }

  return (
    <div
      className="col-span-2 sm:col-span-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex justify-center items-center w-full h-32 max-sm:h-20 rounded-l rounded-r p-2 overflow-hidden relative group transition ${
          isHovered ? "from-[#272626] to-[#CEA223]" : "bg-[#272626]"
        }`}
      >
        <div
          className={`absolute top-0 left-0 bottom-0 right-0 bg-[#CEA223] transition-heigth duration-300 ${
            isHovered ? "h-full" : "h-0"
          }`}
        ></div>
        <div className="z-10">
          <p
            className={`text-white transition duration-300 text-${
              isHovered ? "md sm:text-xl" : "2xl max-sm:text-lg"
            } tracking-wide text-center`}
          >
            {isHovered ? description : title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dynamicard
