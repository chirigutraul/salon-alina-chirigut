"use client";
import { useState } from "react";
import Logo from "./NavbarComponents/Logo";

import ChevronDownIcon from "components/Icons/ChevronDownIcon";
import CheveronUpIcon from "components/Icons/CheveronUpIcon";

import useWindowSize from "utils/hooks/BreakPointsHooks"
import breakpoints from "utils/TailwindBreakPoints";
import AnimatedNavbarElements from "./NavbarComponents/AnimatedNavbarElements";

import { AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { width } = useWindowSize()

  const [isNavbarOpenOnMobile,setIsNavbarOpenOnMobile] = useState<boolean>(false);
  const toggleNavbar = () => setIsNavbarOpenOnMobile(currentValue => !currentValue)

  const isLarge = width && (width >= breakpoints.lg)

  return (
    <header className={`grid top-0 left-0 right-0 bg-light-pink grid-cols-1 ${isNavbarOpenOnMobile ? '' : 'h-40'} 
    w-full ease-in duration-500
    lg:grid-cols-[1fr,2fr,0.5fr] lg:h-40 lg:items-center
    xl:px-16`}>
      <Logo/>
      <div onClick={toggleNavbar} className="bg-light-pink flex justify-center cursor-pointer
      lg:hidden">
        { !isNavbarOpenOnMobile 
          ? <ChevronDownIcon 
            width={16}
            height={16}
            />
          : <CheveronUpIcon
            width={16}
            height={16}
            />
        }
      </div>
      <AnimatePresence mode={"popLayout"}>
      {
      !isLarge 
      ? isNavbarOpenOnMobile 
        ? <AnimatedNavbarElements/>
        : null
      : <AnimatedNavbarElements/>
      }
      </AnimatePresence> 
    </header>
  )
}
