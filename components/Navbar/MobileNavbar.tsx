import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { FunctionComponent } from 'react'
import HamburgerMenuButton from './HamburgerMenuButton';
import MobileProfilePicture from './MobileProfilePicture';
import { motion } from "framer-motion";
import Button from 'components/Button';
import NavbarLinks from './navbarLinks';
import ProfilePicture from './ProfilePicture';

interface LinkType {
  title: string
  route: string
}

const links:LinkType[] = [
  {
    title:'ACASA',
    route:'/'
  },
  {
    title:'GALERIE',
    route:'/galerie'
  },
  {
    title:'DESPRE NOI',
    route:'/despre'
  },
  {
    title:'PROGRAMARI',
    route:'/programari'
  },
  {
    title:'CONTACT',
    route:'/contact'
  },
]

interface MobileNavbarProps {
  isMedium: boolean;
  navbarOpen: boolean;
  toggleNavbar: () => void;
}

const MobileNavbar:FunctionComponent<MobileNavbarProps> = ({
  isMedium,
  navbarOpen,
  toggleNavbar
}) => {
  const {data : session}  = useSession();

  if(isMedium || !navbarOpen) return null;

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className={`
      h-screen w-screen absolute bg-[rgba(0,0,0,0.5)] top-0 left-0 overflow-hidden
      backdrop-blur-sm z-50
      `}
    >
    <motion.div
      initial={{x: '100%'}}
      animate={{x: 0}}
      exit={{x: '100%'}}
      className={`
      h-screen w-[90%] absolute bg-medium-purple top-0 right-0
      flex flex-col pl-8 pt-16
      xs:w-[80%]
      sm:pl-16
      `}
    >
      <div className={`flex flex-row items-center justify-end
      pr-8
      sm:pr-24
      `}>
        {
          session && session.user.image && session.user.name &&
          <MobileProfilePicture
            image={session.user.image}
            name={session.user.name}
            isMedium={isMedium}
            toggleModal={toggleNavbar}
          />
        }

        <HamburgerMenuButton
          navbarOpen={navbarOpen}
          toggleNavbar={toggleNavbar}
          isMedium={isMedium}
        />
      </div>

      <ul className={`flex flex-col justify-center gap-24 ${!!session && 'mt-16'}
      sm:pl-16
      `}>
        {
          links.map((link:LinkType, index:number) => (
            <li 
            key={index+link.title}
            className={`
              text-3xl text-white font-sans font-medium
            `}
            onClick={toggleNavbar}
            >
              <Link href={link.route}>
              {link.title}
              </Link>
            </li>
          ))
        }
      </ul>

      <div className={`mt-16`}>
        <Link href="/sign-in">
          <Button
            title="Conecteaza-te"
            onClick={toggleNavbar}
            size='2xl'
          />
        </Link>
      </div>

    </motion.div>
    </motion.div>
  )
}

export default MobileNavbar