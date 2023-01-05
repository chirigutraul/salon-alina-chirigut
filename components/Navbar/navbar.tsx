"use client";
import { useEffect, useState} from "react";
import Logo from "./NavbarComponents/Logo";

import ChevronDownIcon from "components/Icons/ChevronDownIcon";
import CheveronUpIcon from "components/Icons/CheveronUpIcon";

import useWindowSize from "utils/hooks/BreakPointsHooks"
import breakpoints from "utils/TailwindBreakPoints";
import AnimatedNavbarElements from "./NavbarComponents/AnimatedNavbarElements";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter()
  const { width } = useWindowSize()

  const [isNavbarOpenOnMobile,setIsNavbarOpenOnMobile] = useState<boolean>(false);
  const toggleNavbar = () => setIsNavbarOpenOnMobile(currentValue => !currentValue)

  const isLarge = width && (width >= breakpoints.lg)

  useEffect(()=>{
    setIsNavbarOpenOnMobile(false)
  },[router.asPath])

  return (
    <header className={`grid top-0 left-0 right-0 bg-light-pink grid-cols-1 ${isNavbarOpenOnMobile ? '' : 'h-40 mb-16'}  
    w-full ease-in duration-500
    lg:grid-cols-[1fr,2fr,0.5fr] lg:h-40 lg:items-center lg:mb-0
    xl:px-16`}>
      <Logo/>
      <div
      onClick={toggleNavbar}
      className="grid cursor-pointer w-full bg-light-pink
      lg:hidden">
        { !isNavbarOpenOnMobile 
          ? <ChevronDownIcon 
            width={16}
            height={16}
            className="flex justify-self-center"
            />  
          : <CheveronUpIcon
            width={16}
            height={16}
            className="flex justify-self-center"
            />
        }
      </div>
      {
      !isLarge 
      ? isNavbarOpenOnMobile 
        ? <AnimatedNavbarElements/>
        : null
      : <AnimatedNavbarElements/>
      }
    </header>
  )
}
