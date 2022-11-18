import React from 'react'
import { IServicesObject } from 'types'
import Image from 'next/image'

import {motion} from 'framer-motion'
import useWindowSize from 'utils/hooks/BreakPointsHooks'
import breakpoints from 'utils/TailwindBreakPoints'

const isNumberOdd = (verifiedNumber:number) => verifiedNumber%2===0

function ServiceComponent({
  service,
  indexOfItem,
}:{
  service:IServicesObject;
  indexOfItem:number;
}) {
  const { width } = useWindowSize()

  const isScreenMedium = (width:number) => {
      return width >= breakpoints.md
  }

  const animationForSmallScreen = {x: isNumberOdd(indexOfItem) ? '100%' : '-100%'}
  const animationForMediumScreen = {y: isNumberOdd(indexOfItem) ? '100%' : '-100%'}

  const whileInViewForSmallScreen = {x: '0'}
  const whileInViewForMediumScreen = {y: '0', x:'0'}
  
  const initialAnimationVariation= (width && isScreenMedium(width))  ? animationForMediumScreen  : animationForSmallScreen
  const whileInViewVariation = (width && isScreenMedium(width)) ? whileInViewForMediumScreen : whileInViewForSmallScreen

  return (
    <motion.div
    initial={initialAnimationVariation}
    whileInView={whileInViewVariation}
    transition={{duration:1}}
    >
      <div className='relative h-96'>
        <Image
        src={service.pictureOfService}
        fill={true}
        className="object-cover"
        alt={service.nameOfService}
        sizes='(max-width:1920px) theme(w-full)'
        />
      </div>  
     
      <div className='text-center'>
        <p className='text-2xl text-white mt-8'>
          {service.nameOfService}
        </p>
        <p className='text-1xl text-white mt-8 px-8'>
          {service.descriptionOfService}
        </p>
      </div>
    </motion.div>
  )
}

export default ServiceComponent