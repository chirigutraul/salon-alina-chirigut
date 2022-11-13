import React from 'react'
import Image from "next/image"


function Logo() {
  return (
    <div className="relative h-40 w-96 justify-self-center
    lg:h-32 lg:w-72 lg:justify-self-start
    xl:h-40 xl:w-96">
      <Image 
      src={"/images/dark logo.png"}
      alt="Logo salon"
      fill={true}
      priority
      sizes="(max-width:1920px) theme(w-64)"
      />
    </div>
  )
}

export default Logo