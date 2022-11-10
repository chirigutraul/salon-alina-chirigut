import React from 'react'

import BigHeader from './BigHeader'
import VisitCard from './VisitCard'

function VisitUsSection() {
  return (
    <div className='h-[calc(theme(full)+theme(2)]] bg-light-pink grid grid-cols-2 py-2'>
    <BigHeader/>
    <VisitCard/>
    </div>
  )
}

export default VisitUsSection