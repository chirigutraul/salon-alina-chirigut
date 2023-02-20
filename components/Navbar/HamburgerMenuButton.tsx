import React, { FunctionComponent } from 'react'

interface HamburgerMenuButtonProps {
  navbarOpen: boolean;
  toggleNavbar: () => void;
  isMedium: boolean;
}



const HamburgerMenuButton: FunctionComponent<HamburgerMenuButtonProps> = ({
  navbarOpen,
  toggleNavbar,
  isMedium
}) => {

  if(isMedium) return null;

  return (
    <div
    onClick={toggleNavbar}
    className={`
    flex flex-col gap-1 justify-center items-center content-center
    h-8 rounded-md p-6 relative
    `}
    > 
      <span
      className={
      navbarOpen
      ? `w-8 h-1 bg-dark-purple rounded-lg
      absolute rotate-45 transition-transform ease-out`
      : `w-8 h-1 bg-dark-purple rounded-lg
      absolute -translate-y-1 transition-transform ease-in`
      
      }
      />
      <span
      className={
      navbarOpen
      ? `w-8 h-1 bg-dark-purple rounded-lg
      absolute -rotate-45 transition-transform ease-out`
      : `w-8 h-1 bg-dark-purple rounded-lg
      absolute translate-y-1 transition-transform ease-in`
      }
      />

    </div>
  )
}

export default HamburgerMenuButton