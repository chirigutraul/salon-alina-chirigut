import React from 'react'
import {motion} from 'framer-motion'

function BigHeader() {
  return (
    <motion.div
    initial={{x:'100%'}}
    whileInView={{x:'0'}}
    transition={{duration:0.5}}
    className='h-screen text-center items-center flex'>
    <h1 className='text-8xl text-dark-purple font-bold'>
      Fa-ne o vizita la locatie!
    </h1>
    </motion.div>
  )
}

export default BigHeader