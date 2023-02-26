import React from 'react'

import BigHeader from './BigHeader'
import VisitCard from './VisitCard'

import {AnimatePresence, motion} from 'framer-motion'

function VisitUsSection() {
  return (
    <AnimatePresence>
    <div
    className='grid grid-cols-1 py-2 bg-primary lg:grid-cols-2'>
    <BigHeader/>
    <VisitCard/>
    </div>
    </AnimatePresence>
  )
}

export default VisitUsSection