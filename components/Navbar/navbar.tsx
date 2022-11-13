import { useState } from "react";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import SocialMediaIcons from "./SocialMediaIcons";

import ChevronDownIcon from "components/Icons/ChevronDownIcon";
import CheveronUpIcon from "components/Icons/CheveronUpIcon";

export default function Navbar() {
  const [isNavbarOpenOnMobile,setIsNavbarOpenOnMobile] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsNavbarOpenOnMobile(currentValue => !currentValue)
  }

  return (
    <header className={`grid top-0 left-0 right-0 bg-light-pink grid-cols-1 ${isNavbarOpenOnMobile ? '' : 'h-40'} 
    w-full absolute ease-in duration-500
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
        <NavbarLinks isVisible={isNavbarOpenOnMobile}/>
        <SocialMediaIcons isVisible={isNavbarOpenOnMobile}/>
    </header>
  )
}
