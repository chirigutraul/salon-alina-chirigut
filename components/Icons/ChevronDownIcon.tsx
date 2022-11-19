import React from 'react'

function ChevronDownIcon({
  width,
  height,
  className,
}:{
  width?:number;
  height?:number;
  className?:string;
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3A3665"
     className={`w-${width ?? 6} h-${height ?? 6} animate-bounce ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

export default ChevronDownIcon