import React from 'react'
import {motion} from 'framer-motion'

function BigHeader() {
  return (
    <motion.div
    initial={{x:'100%'}}
    whileInView={{x:'0'}}
    transition={{duration:1}}
    viewport={{once:true}}
    className='flex items-center py-32 text-center'>
    <h1 className='font-bold text-8xl text-accent'>
      Fa-ne o vizita la locatie!
    </h1>
    </motion.div>
  )
}

export default BigHeader