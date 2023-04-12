import React, { FunctionComponent } from "react";

interface HamburgerMenuButtonProps {
  navbarOpen: boolean;
  toggleNavbar: () => void;
  isMedium: boolean;
}

const HamburgerMenuButton: FunctionComponent<HamburgerMenuButtonProps> = ({
  navbarOpen,
  toggleNavbar,
  isMedium,
}) => {
  if (isMedium) return null;

  return (
    <div
      onClick={toggleNavbar}
      className={`
    flex flex-col gap-1 justify-center items-center content-center relative
    h-8 rounded-md p-4 cursor-pointer
    xs:p-6
    `}
    >
      <span
        className={`
      bg-white rounded-lg absolute transition-transform 
      w-6 h-1
      xs:w-8 xs:h-1 
      ${navbarOpen ? "rotate-45 ease-out" : "-translate-y-1 ease-in"}
      `}
      />
      <span
        className={`bg-white rounded-lg absolute transition-transform 
      w-6 h-1
      xs:w-8 xs:h-1
      ${navbarOpen ? "-rotate-45  ease-out" : "translate-y-1 ease-in"}
      `}
      />
    </div>
  );
};

export default HamburgerMenuButton;
