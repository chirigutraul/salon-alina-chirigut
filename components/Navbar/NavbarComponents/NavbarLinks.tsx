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
    <div 
    className={`text-center grid grid-cols-1 align-center
    lg:grid-cols-[0.75fr,0.75fr,0.75fr,1fr,0.75fr] lg:grid
    xl:w-2/3 xl:justify-self-center xl:grid`}>
      {
      navbarOptions.map((option:string) => 
      <motion.a 
      href="/acasa"
      whileHover={{ scale: 1.2 }}
      className="text-2xl p-4 hover:bg-light-pink-hover
      lg:text-xl lg:p-y-4"
      >
        <Link
        key={option} 
        href={
        option==="Acasa" 
        ? "/" 
        : option.split(" ")[0].toLowerCase()
        }>
          {option}
        </Link>
      </motion.a>
      )}
    </div>
  )
}

export default NavbarLinks