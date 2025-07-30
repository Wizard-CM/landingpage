import React from 'react'

const HalfOval = () => {
  // INSTEAD OF CODING THIS OVAL ELEMENT , IT'S SVG CAN BE USED
  return (
    <div className="absolute top-[31.5625rem] w-[180vw] h-[90vw] left-1/2 -translate-x-1/2 overflow-hidden z-1">
      <div className="w-full h-[180vw] rounded-full bg-[#020116] shadow-[inset_0_0.125rem_6.25rem_0_#6C24F5]" />
    </div>
  )
}

export default HalfOval
