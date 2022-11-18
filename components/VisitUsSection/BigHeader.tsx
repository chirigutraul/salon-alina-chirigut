import React from 'react'
import {motion} from 'framer-motion'

function BigHeader() {
  return (
    <motion.div
    initial={{x:'100%'}}
    whileInView={{x:'0'}}
    transition={{duration:1}}
    className='text-center items-center flex py-32'>
    <h1 className='text-8xl text-dark-purple font-bold'>
      Fa-ne o vizita la locatie!
    </h1>
    </motion.div>
  )
}

export default BigHeader