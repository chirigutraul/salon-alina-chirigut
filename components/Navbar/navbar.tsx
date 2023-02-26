import React, { useState } from 'react'
import NavbarLinks  from './navbarLinks'
import {Button} from 'components'

import useWindowSize from "utils/hooks/BreakPointsHooks"
import breakpoints from "utils/TailwindBreakPoints";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useSession } from 'next-auth/react'
import ProfilePicture from './ProfilePicture'
import HamburgerMenuButton from './HamburgerMenuButton'
import Logo from './Logo';
import MobileNavbar from './MobileNavbar';


const Navbar = () => {
  const router = useRouter()
  const { width } = useWindowSize()
  const {data : session}  = useSession();

  const isMedium = (!!width && !!(width >= breakpoints.md)) ?? false;
  const [navbarOpenOnSmallerScreen, setNavbarOpenOnSmallerScreen] = useState<boolean>(false);

  const toggleNavbar = () => setNavbarOpenOnSmallerScreen(currentValue => !currentValue)

  const navigateToSignIn = () => router.push('/profile')

  return (
    <div 
    className={`
    flex flex-col bg-primary py-8 px-8
    xs:px-2 xs:bg-red-200
  sm:bg-red-300
    md:flex-row md:justify-between md:px-4 md:bg-red-400
    lg:justify-between lg:items-center lg:px-8 lg:bg-red-500
    `}>
      <div className={`
      flex flex-row justify-between items-center relative w-full
      xs:basis-24
      md:justify-center md:basis-36 md:w-[8rem]
      lg:w-[14rem] lg:basis-24
      `}>
      <Logo/>

      <HamburgerMenuButton
        navbarOpen={navbarOpenOnSmallerScreen}
        toggleNavbar={toggleNavbar}
        isMedium={isMedium}
      />
      </div>

      <NavbarLinks isMedium={isMedium}/> 

      {
      isMedium && 
      ( session
        ? (session.user.image && session.user.name) 
          && <ProfilePicture
              image={session.user.image}
              name={session.user.name}
            />
        : <div className={`flex justify-center`}>
            <Button
              onClick={()=>navigateToSignIn()}
              title={`CONECTEAZA-TE`}
            />
          </div>
      )
      }
      <AnimatePresence>
        <MobileNavbar
          isMedium={isMedium}
          navbarOpen={navbarOpenOnSmallerScreen}
          toggleNavbar={toggleNavbar}
        />
      </AnimatePresence>

    </div>
  )
}

export default Navbar