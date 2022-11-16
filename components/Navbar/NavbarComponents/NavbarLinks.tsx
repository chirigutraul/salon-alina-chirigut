import Link from 'next/link'
import React from 'react'

import { motion } from "framer-motion"

function NavbarLinks() {
  const navbarOptions = [
    "ACASA",
    "GALERIE",
    "DESPRE",
    "PROGRAMARI",
    "CONTACT",
  ]
    
  return (
    <motion.div
    initial={{opacity:0, y:'-100%'}}
    animate={{opacity:1, y:'0'}}
    transition={{type: "spring" ,duration:0.3}}
    exit={{ opacity:0 , y:'-20%'}}
    className={`text-center grid grid-cols-1 align-center
    lg:grid-cols-[0.75fr,0.75fr,0.75fr,1fr,0.75fr] lg:grid
    xl:w-2/3 xl:justify-self-center xl:grid`}>
      {
      navbarOptions.map((option:string) => 
      <motion.a 
      key={option} 
      href="/acasa"
      whileHover={{ scale: 1.2 }}
      className="text-2xl p-4 hover:bg-light-pink-hover
      focus:bg-light-pink-hover
      active:bg-light-pink-hover
      lg:text-xl lg:p-y-4"
      >
        <Link
        href={
        option==="ACASA" 
        ? "/" 
        : option.split(" ")[0].toLowerCase()
        }>
          {option}
        </Link>
      </motion.a>
      )}
    </motion.div>
  )
}

export default NavbarLinks