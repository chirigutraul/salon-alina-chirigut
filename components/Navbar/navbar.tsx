import React, { useState } from "react";

import useWindowSize from "utils/hooks/BreakPointsHooks";
import breakpoints from "utils/TailwindBreakPoints";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { links } from "./navbarLinks";
import ReactModal from "react-modal";
const Navbar = () => {
  const router = useRouter();
  const { width } = useWindowSize();
  const { data: session } = useSession();

  const isLarge = (!!width && !!(width >= breakpoints.lg)) ?? false;
  const [isHamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const toggleNavbar = () => setHamburgerOpen((currentValue) => !currentValue);

  const navigateToSignIn = () => router.push("/profile");

  const DesktopLinks = () => (
    <div className={"hidden md:flex md:gap-8 items-center gap-24"}>
      <ul className={"flex gap-8 text-black"}>
        {links.map((link) => (
          <li>
            <a href={link.route}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div>
        <button
          className={"btn btn-gradient btn-icon"}
          onClick={navigateToSignIn}
        >
          <h6>Conectare</h6>
          <FontAwesomeIcon
            icon={faSignIn}
            className={`
        text-xl
        md:text-2xl
        `}
          />
        </button>
      </div>
    </div>
  );

  const HamburgerButton = () => (
    <div
      className={
        "grid place-items-center bg-gradient h-16 w-16 text-white rounded-md btn-gradient"
      }
      onClick={toggleNavbar}
    >
      <FontAwesomeIcon icon={faBars} className={`text-2xl`} />
    </div>
  );

  const HamburgerMenu = () => (
    <ReactModal
      isOpen={isHamburgerOpen}
      onRequestClose={toggleNavbar}
      className={`
      w-[80%] z-50 bg-gradient h-screen py-8 px-4 overflow-hidden
      `}
    >
      <nav>
        <ul className={"flex flex-col gap-8 text-white"}>
          {links.map((link) => (
            <li>
              <a href={link.route}>
                <h5>{link.title}</h5>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </ReactModal>
  );

  return (
    <nav
      className={`
      bg-white-80 left-0 right-0 absolute flex h-[96px] xl:h-[128px] justify-between items-center px-4 border-black-10 border-b-2
      ${isHamburgerOpen ? "" : "z-10"}
      xl:px-16 
      `}
    >
      <div
        className={`relative h-[48px] w-[147px]
      md:h-[55px] md:w-[172px] xl:h-[87px] xl:w-[268px]
      `}
      >
        <Image src="/images/logo-desktop.png" alt="Logo-ul salonului" fill />
      </div>
      {isLarge ? <DesktopLinks /> : <HamburgerButton />}
      {isHamburgerOpen && <HamburgerMenu />}
    </nav>
  );
};

export default Navbar;
