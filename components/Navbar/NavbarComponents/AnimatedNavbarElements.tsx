import React from 'react'
import NavbarLinks from './NavbarLinks'
import SocialMediaIcons from './SocialMediaIcons'

import {motion} from 'framer-motion'

function AnimatedNavbarElements({
  active,
}:{
  active?:boolean;
}) {
  return (
    <motion.div
    initial={{opacity:0, y:'-100%'}}
    animate={{opacity:1, y:'0'}}
    transition={{duration:0.5}}
    className='flex flex-col justify-center items-center
    lg:flex-row lg:justify-between'
    >
    <NavbarLinks/>
    <SocialMediaIcons/>
    </motion.div> 
  )
}

export default AnimatedNavbarElements