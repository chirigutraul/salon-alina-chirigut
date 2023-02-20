import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { navbarLinks } from './navbarLinks'
import {Button} from 'components'

import useWindowSize from "utils/hooks/BreakPointsHooks"
import breakpoints from "utils/TailwindBreakPoints";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";


const Navbar = () => {
  const router = useRouter()
  const { width } = useWindowSize()

  const isLarge = width && (width >= breakpoints.lg)
  const [navbarOpenOnSmallerScreen, setNavbarOpenOnSmallerScreen] = useState<boolean>(false);

  const shouldLinksBeVisbile = isLarge || navbarOpenOnSmallerScreen

  const toggleNavbar = () => setNavbarOpenOnSmallerScreen(currentValue => !currentValue)


  return (
    <div className={`
    flex flex-col bg-light-pink py-8 px-2
    lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-8
    `}>
      <div className={`
      flex flex-row justify-between
      relative w-full basis-32
      md:justify-center
      lg:w-[18rem]
      `}>
      <div className={`
        basis-4/5 relative h-full
        xs:basis-3/5
        sm:w-[32rem] sm:basis-2/5
        lg:h-[8rem] lg:basis-full
      `}>
        <Image
          src={`/images/darklogo.png`}
          alt="Picture of the author"
          fill
        />
      </div>

      { !isLarge
      &&  
      <div
      onClick={toggleNavbar}
      className={`
      flex justify-center items-center
      `}
      >
        toggle
      </div>
      }
      </div>
      {
        shouldLinksBeVisbile &&
        <div className={`
        py-4 flex flex-col items-center
        lg:flex-row
        `}
        >
        <ul className={`
        flex flex-col gap-6 items-center mb-10
        md:flex md:flex-row md:basis-full md:gap-10
        lg:flex-row lg:gap-4 lg:justify-center lg:mb-0
        `}
        >
          { navbarLinks.map((link, index) => (
            <li key={index} className={`
            text-xl text-dark-purple
            sm:text-2xl
            lg:text-xl
            `}
            >
              <Link href={link.route}>{link.title}</Link>
            </li>
          ))
          }
        </ul>
      </div>
      }
      
      {
      shouldLinksBeVisbile &&
      <div className={`
      flex justify-center
      `}
      >
        <Button
          title={`CONECTEAZA-TE`}
        />
      </div>
      }

    </div>
  )
}

export default Navbar