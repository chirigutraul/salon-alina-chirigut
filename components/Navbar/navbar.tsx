import React, { FunctionComponent, useState } from "react";

import useWindowSize from "utils/hooks/BreakPointsHooks";
import breakpoints from "utils/TailwindBreakPoints";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { links } from "./navbarLinks";
import ReactModal from "react-modal";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const { width } = useWindowSize();
  const { data: session } = useSession();

  const isLarge = (!!width && !!(width >= breakpoints.lg)) ?? false;
  const [isHamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const toggleNavbar = () => setHamburgerOpen((currentValue) => !currentValue);

  const navigateToSignIn = () => router.push("/profile");

  const navigateHome = () => router.push("/");

  if (isHamburgerOpen)
    return (
      <HamburgerMenu
        isHamburgerOpen={isHamburgerOpen}
        toggleNavbar={toggleNavbar}
        navigateToSignIn={navigateToSignIn}
      />
    );

  return (
    <>
      <nav
        className={`
      bg-white-80 left-0 right-0 absolute z-50 flex h-[96px] xl:h-[128px] justify-between items-center px-4 
      ${isHamburgerOpen ? "" : ""}
      xl:px-16 
      `}
      >
        <div
          onClick={navigateHome}
          className={`relative h-[48px] w-[147px] md:h-[55px] md:w-[172px] xl:h-[87px] xl:w-[268px] cursor-pointer`}
        >
          <Image src="/images/logo.png" alt="Logo-ul salonului" fill />
        </div>
        {isLarge ? (
          <DesktopLinks navigateToSignIn={navigateToSignIn} />
        ) : (
          <HamburgerButton toggleNavbar={toggleNavbar} />
        )}
      </nav>
    </>
  );
};

interface DesktopLinksProps {
  navigateToSignIn: () => void;
}

const DesktopLinks: FunctionComponent<DesktopLinksProps> = ({
  navigateToSignIn,
}) => (
  <div className={"flex items-center"}>
    <ul className={"flex gap-8 text-black sp-h"}>
      {links.map((link) => (
        <li key={"desktop" + link.route}>
          <Link href={link.route}>{link.title}</Link>
        </li>
      ))}
    </ul>
    <div>
      <button
        className={"btn btn-gradient btn-icon"}
        onClick={() => navigateToSignIn()}
      >
        <h6>Conectare</h6>
        <h6>
          <FontAwesomeIcon icon={faSignIn} />
        </h6>
      </button>
    </div>
  </div>
);

interface HamburgerButtonProps {
  toggleNavbar: () => void;
}

const HamburgerButton: FunctionComponent<HamburgerButtonProps> = ({
  toggleNavbar,
}) => (
  <div
    className={
      "grid place-items-center bg-gradient p-4 text-white rounded-md btn-gradient cursor-pointer"
    }
    onClick={toggleNavbar}
  >
    <FontAwesomeIcon icon={faBars} className={`text-2xl`} />
  </div>
);

interface HamburgerMenuProps {
  isHamburgerOpen: boolean;
  toggleNavbar: () => void;
  navigateToSignIn: () => void;
}

const HamburgerMenu: FunctionComponent<HamburgerMenuProps> = ({
  navigateToSignIn,
  isHamburgerOpen,
  toggleNavbar,
}) => {
  const navigateAndClose = () => {
    navigateToSignIn();
    toggleNavbar();
  };

  return (
    <ReactModal
      isOpen={isHamburgerOpen}
      onRequestClose={toggleNavbar}
      className={`
    w-[80%] z-50 bg-gradient h-screen py-8 px-8  text-white
    focus:outline-none rounded-r-lg
    `}
    >
      <nav className={"relative h-full w-full"}>
        <button onClick={toggleNavbar}>
          <FontAwesomeIcon
            icon={faClose}
            className={`absolute right-8 text-4xl`}
          />
        </button>
        <ul className={"flex flex-col gap-16"}>
          {links.map((link) => (
            <li onClick={toggleNavbar} key={"mobile" + link.route}>
              <Link href={link.route}>
                <h5>{link.title}</h5>
              </Link>
            </li>
          ))}
        </ul>
        <div className={"absolute bottom-0"}>
          <button
            onClick={navigateAndClose}
            className={"btn btn-border-light btn-icon"}
          >
            <h5>Conectare</h5>
            <FontAwesomeIcon icon={faSignIn} />
          </button>
        </div>
      </nav>
    </ReactModal>
  );
};

export default Navbar;
