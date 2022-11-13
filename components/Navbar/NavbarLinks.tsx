import Link from 'next/link'
import React from 'react'


function NavbarLinks() {
  const navbarOptions = [
    "ACASA",
    "GALERIE",
    "DESPRE",
    "PROGRAMARI",
    "CONTACT",
  ]
  
  return (
    <div className="text-center grid grid-cols-1 align-center
    lg:grid-cols-[0.75fr,0.75fr,0.75fr,1fr,0.75fr] lg:w-full
    xl:w-2/3 xl:justify-self-center">
      {
      navbarOptions.map((option:string) => 
        <Link
        key={option} 
        href={
        option==="Acasa" 
        ? "/" 
        : option.split(" ")[0].toLowerCase()
        } 
        className="text-5xl p-4 hover:bg-light-pink-hover
        lg:text-xl lg:p-y-4"
        >
          {option}
        </Link>)
      }
    </div>
  )
}

export default NavbarLinks