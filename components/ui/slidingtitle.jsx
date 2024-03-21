"use client"
import React, { useEffect, useState } from "react"

const SlidingTitle = ({ title }) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className="absolute font-bold md:text-9xl md-custom-2:text-5xl text-5xl opacity-10 text-[#D0A730] p-4 right-0 bottom-0 z-10"
      style={{ transform: `translateX(-${scrollPosition}px)` }}
    >
      {title}
    </div>
  )
}

export default SlidingTitle
