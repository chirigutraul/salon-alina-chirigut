import Image from 'next/image'
import React from 'react'

import {motion} from 'framer-motion'

const SocialMediaIconContainer = ({variant}:{variant:string;}) => {

  const redirect = () => {
    if(variant.toLowerCase()==='instagram') return window.location.assign('https://instagram.com/')
    else if (variant.toLowerCase()==='facebook') return window.location.assign('https://facebook.com/')
  }

  return (
  <motion.div
    onClick={redirect}
    whileHover={{scale:1.3}}
    className="relative h-16 w-32 hover:bg-light-pink-hover cursor-pointer
    lg:h-8 lg:w-8
    xl:h-12 xl:w-12">
      <Image 
      src={`/icons/${variant}.svg`}
      alt={`${variant} icon`}
      fill={true}
      sizes={'max-width(1920px) h-16'}
      />
  </motion.div>)
}

function SocialMediaIcons() {
  return (
    <motion.div
    initial={{opacity:0, y:'-100%'}}
    animate={{opacity:1, y:'0'}}
    transition={{duration:0.5}}
    className={`grid grid-cols-2 h-16 w-64 py-16 items-center pb-24 justify-self-center 
    lg:py-4 lg:w-24 lg:px-4 lg:justify-self-end lg:grid
    xl:w-40 xl:py-0 xl:grid`}>
      <SocialMediaIconContainer variant='Instagram'/>
      <SocialMediaIconContainer variant='Facebook'/>
    </motion.div>
  )
}

export default SocialMediaIcons