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
  <>
    <NavbarLinks/>
    <SocialMediaIcons/>
  </>
  )
}

export default AnimatedNavbarElements