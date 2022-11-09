import React from 'react'
import ServiceComponent from './ServiceComponent';
import servicesArray from './servicesArray';

function TopServicesGallery() {

  return (
    <div className='h-screen bg-dark-purple grid grid-cols-3 gap-16 text-center px-16'>
        { servicesArray.map(service => <ServiceComponent service={service}/>) }
    </div>
  )
}

export default TopServicesGallery