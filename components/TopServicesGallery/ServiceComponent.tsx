import React from 'react'
import { IServicesObject } from 'types'
import Image from 'next/image'

function ServiceComponent({service}:{service:IServicesObject}) {
  return (
    <div className="bg-red-200 h-1/2 mt-16">
      <div className='h-full w-full relative'>
        <Image
        src={service.pictureOfService}
        fill={true}
        className="object-cover"
        alt={service.nameOfService}
        />
      </div>  
     
      <div className='text-center'>
        <p className='text-2xl text-white mt-16'>
          {service.nameOfService}
        </p>
        <p className='text-1xl text-white mt-8 px-16'>
          {service.descriptionOfService}
        </p>
      </div>
    </div>
  )
}

export default ServiceComponent