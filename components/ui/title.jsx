import React from 'react'

const Title = ({title}) => {
  return (
    <>
      <div className="border-[#CCBE45] border-b-4 w-[55px] sm:w-[105px] rounded-2xl text-start" />
      <h1 className="text-start text-white text-xl sm:text-4xl tracking-wide">{title}</h1>
    </>
  )
}

export default Title