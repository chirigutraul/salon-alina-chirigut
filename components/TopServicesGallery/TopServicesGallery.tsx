import { AnimatePresence } from 'framer-motion';
import React from 'react'
import ServiceComponent from './ServiceComponent';
import servicesArray from './servicesArray';

function TopServicesGallery() {

  return (
    <div className='bg-dark-purple grid grid-cols-1 py-8 gap-16 text-center px-8
    md:grid-cols-2
    lg:grid-cols-3 lg:py-16 lg:px-16'>
      <AnimatePresence>
        { 
        servicesArray.map((service, index:number) => 
        <ServiceComponent
        key={service.nameOfService}
        service={service}
        indexOfItem={index}
        />
        )}
      </AnimatePresence>
    </div>
  )
}

export default TopServicesGallery