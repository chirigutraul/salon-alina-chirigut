import Link from 'next/link'
import React from 'react'


function NavbarLinks({
  isVisible,
}:{
  isVisible:boolean
}) {
  const navbarOptions = [
    "ACASA",
    "GALERIE",
    "DESPRE",
    "PROGRAMARI",
    "CONTACT",
  ]
  
  return (
    <div className={`text-center grid grid-cols-1 align-center ${isVisible ? 'grid' : 'hidden'}
    lg:grid-cols-[0.75fr,0.75fr,0.75fr,1fr,0.75fr] lg:grid
    xl:w-2/3 xl:justify-self-center xl:grid`}>
      {
      navbarOptions.map((option:string) => 
        <Link
        key={option} 
        href={
        option==="Acasa" 
        ? "/" 
        : option.split(" ")[0].toLowerCase()
        } 
        className="text-3xl p-4 hover:bg-light-pink-hover ease-in duration-300
        lg:text-xl lg:p-y-4"
        >
          {option}
        </Link>)
      }
    </div>
  )
}

export default NavbarLinks