import Image from 'next/image'
import React from 'react'

function SocialMediaIcons({
  isVisible,
}:{
  isVisible:boolean
}) {
  return (
    <div className={`grid grid-cols-2 h-16 w-64 justify-self-center py-16 items-center  ${isVisible ? 'grid' : 'hidden'} pb-24
    lg:py-4 lg:w-24 lg:px-4 lg:justify-self-end lg:grid
    xl:w-32 xl:py-0 xl:grid`}>
      <div className="relative h-16 w-32 hover:bg-light-pink-hover
      lg:h-8 lg:w-8
      xl:h-10 xl:w-10">
        <Image 
        src={"/icons/Instagram.svg"}
        alt="Instagram icon"
        fill={true}
        sizes={'max-width(1920px) h-16'}
        />
      </div>
      <div className="relative h-16 w-32 hover:bg-light-pink-hover
      lg:h-8 lg:w-8
      xl:h-10 xl:w-10">
        <Image 
        src={"/icons/Facebook.svg"}
        alt="Facebook icon"
        fill={true}
        sizes={'max-width(1920px) theme(h-16)'}
        />
      </div>
    </div>
  )
}

export default SocialMediaIcons