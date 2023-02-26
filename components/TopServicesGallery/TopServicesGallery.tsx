import { AnimatePresence } from 'framer-motion';
import React from 'react'
import ServiceComponent from './ServiceComponent';
import servicesArray from './servicesArray';

function TopServicesGallery() {

  return (
    <div className='grid justify-center grid-cols-1 gap-8 px-8 py-8 text-center bg-accent md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:py-16 lg:h-screen lg:items-center'>
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