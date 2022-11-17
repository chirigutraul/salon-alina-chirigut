import React from 'react'
import { IServicesObject } from 'types'
import Image from 'next/image'

function ServiceComponent({service}:{service:IServicesObject}) {
  return (
    <div>
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
    </div>
  )
}

export default ServiceComponent