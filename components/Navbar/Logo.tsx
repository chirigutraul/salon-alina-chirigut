import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
  <div className={`
      basis-4/5 relative h-full
      xs:basis-3/5
      sm:w-[32rem] sm:basis-2/5
      md:basis-full md:h-[4rem]
      lg:h-[6rem] lg:basis-full
    `}>
    <Image
      src={`/images/darklogo.png`}
      alt="Picture of the author"
      fill
    />
  </div>
  )
}

export default Logo