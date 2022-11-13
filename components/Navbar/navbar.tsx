import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Navbar() {
  const [isNavbarOpenOnMobile,setIsNavbarOpenOnMobile] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsNavbarOpenOnMobile(currentValue => !currentValue)
  }

  return (
    <header className={`grid top-0 left-0 right-0 bg-light-pink grid-cols-1 ${isNavbarOpenOnMobile ? 'h-full' : 'h-40'} w-full absolute
    lg:grid-cols-[1fr,3fr,0.5fr] lg:h-40 lg:items-center
    xl:px-16`}>
      <Logo/>
      <button onClick={toggleNavbar} 
      className={`block lg:hidden`}
      >
        Open navbar
      </button>
      { isNavbarOpenOnMobile && 
        <>
        <NavbarLinks/>
        <SocialMediaIcons/>
        </>
      }
    </header>
  )
}
