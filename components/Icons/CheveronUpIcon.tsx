import React from 'react'

function CheveronUpIcon({
  width,
  height
}:{
  width?:number;
  height?:number;
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3A3665" className={`w-${width ?? 6} h-${height ?? 6}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
    )
}

export default CheveronUpIcon