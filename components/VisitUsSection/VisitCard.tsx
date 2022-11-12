import React from 'react'
import VisitCardAdressOverlay from './VisitCardAdressOverlay'
import Image from 'next/image'

function VisitCard() {
  const salonImage:string = "https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
 
  return (
    <div className='h-screen border-8 border-dark-purple relative'>
      <div className='h-full w-full'>
        <Image
        src={salonImage}
        alt={'Imagine cu salonul'}
        className='object-cover'
        fill={true}
        />
      </div>
      <VisitCardAdressOverlay/>
    </div>
  )
}

export default VisitCard