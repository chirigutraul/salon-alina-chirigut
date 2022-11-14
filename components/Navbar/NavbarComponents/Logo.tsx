import React from 'react'
import Image from "next/image"

import {motion} from 'framer-motion'

function Logo() {
  return (
    <motion.div
    initial={{opacity:0, y:'-100%'}}
    animate={{opacity:1, y:'0'}}
    transition={{duration:0.3}}
    className="relative h-40 w-96 justify-self-center
    lg:h-32 lg:w-72 lg:justify-self-start
    xl:h-40 xl:w-96">
      <Image 
      src={"/images/dark logo.png"}
      alt="Logo salon"
      fill={true}
      priority
      sizes="(max-width:1920px) theme(w-64)"
      />
    </motion.div>
  )
}

export default Logo