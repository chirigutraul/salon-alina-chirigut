import React, { FunctionComponent, useState } from "react";

import useWindowSize from "utils/hooks/BreakPointsHooks";
import breakpoints from "utils/TailwindBreakPoints";

import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faSignIn,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { links, shouldNavbarBeDarker } from "./navbarLinks";
import ReactModal from "react-modal";
import Link from "next/link";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const router = useRouter();
  const path = router.asPath as keyof typeof shouldNavbarBeDarker;
  const { width } = useWindowSize();
  const { data: session } = useSession();

  const isLarge = (!!width && !!(width >= breakpoints.lg)) ?? false;
  const [isHamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const toggleNavbar = () => setHamburgerOpen((currentValue) => !currentValue);

  const navigateToSignIn = () => router.push("/sign-in");

  const navigateToProfile = () => router.push("/profile");

  const navigateHome = () => router.push("/");

  if (isHamburgerOpen)
    return (
      <HamburgerMenu
        isHamburgerOpen={isHamburgerOpen}
        toggleNavbar={toggleNavbar}
        navigateToProfile={navigateToProfile}
        navigateToSignIn={navigateToSignIn}
        session={session}
      />
    );

  return (
    <>
      <nav
        key="navbar"
        className={`
      left-0 right-0 absolute flex h-[96px] xl:h-[128px] justify-between z-10 items-center px-4
      ${isHamburgerOpen ? "" : ""}
      ${shouldNavbarBeDarker[path] ? "bg-black-10" : "bg-white-80"}
      xl:px-16 
      `}
      >
        <div
          onClick={navigateHome}
          className={`relative cursor-pointer
          h-[48px] w-[147px] 
          md:h-[55px] md:w-[172px]
          xl:h-[72px] xl:w-[221px]
          2xl:h-[87px] 2xl:w-[268px]
            `}
        >
          <Image src="/images/logo.png" alt="Logo-ul salonului" fill />
        </div>
        {isLarge ? (
          <DesktopLinks navigateToSignIn={navigateToSignIn}
            navigateToProfile={navigateToProfile}
            session={session} />
        ) : (
          <HamburgerButton toggleNavbar={toggleNavbar} />
        )}
      </nav>
    </>
  );
};

interface DesktopLinksProps {
  navigateToSignIn: () => void;
  navigateToProfile: () => void;
  session: Session | null;
}

const DesktopLinks: FunctionComponent<DesktopLinksProps> = ({
  navigateToSignIn,
  navigateToProfile,
  session,
}) => (
  <div className={"flex items-center"}>
    <ul className={"flex gap-8 text-black sp-h"}>
      {links.map((link) => (
        <li key={"desktop" + link.route}>
          <Link href={link.route}>{link.title}</Link>
        </li>
      ))}
    </ul>
    {session ? (
      <div
        className={`h-12 w-12  xl:h-12 xl:w-12 relative cursor-pointer group`}
        onClick={() => navigateToProfile()}
      >
        <Image
          src={session.user.image}
          alt="Imaginea de profil"
          fill={true}
          className={`object-cover rounded-full`}
        />
        <div
          className={`absolute text-white top-[99%] left-[-100%] rounded-md overflow-hidden
          hidden group-hover:block 
          `}
        >
          <nav>
            <ul>
              <li
                className={`py-2 px-2 bg-black-75 hover:bg-black flex items-center justify-center gap-2 cursor-pointer`}
                onClick={() => navigateToProfile()}
              >
                <h6>Profil</h6>
                <h6>
                  <FontAwesomeIcon icon={faUser} />
                </h6>
              </li>
              <li
                className={`py-2 px-2 bg-black-75 hover:bg-black flex gap-2 items-center justify-center cursor-pointer`}
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                <h6>Delogare</h6>
                <h6>
                  <FontAwesomeIcon icon={faSignOut} />
                </h6>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    ) : (
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
    )}
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
  navigateToProfile: () => void;
  navigateToSignIn: () => void;
  session: Session | null;
}

const HamburgerMenu: FunctionComponent<HamburgerMenuProps> = ({
  navigateToSignIn,
  navigateToProfile,
  isHamburgerOpen,
  toggleNavbar,
  session,
}) => {

  const redirectToSignIn = () => {
    navigateToSignIn();
    toggleNavbar();
  };

  const redirectToProfile = () => {
    navigateToProfile();
    toggleNavbar();
  }

  return (
    <ReactModal
      isOpen={isHamburgerOpen}
      onRequestClose={toggleNavbar}
      className={`
    w-[80%] z-10 bg-gradient text-white
    focus:outline-none rounded-l-lg min-h-screen right-0 absolute 
    sp-2v sp-h
    `}
    >
      <div className={`flex items-center justify-between`}>
        {session ? (
          <div
            className={`flex items-center gap-4 cursor-pointer`}
            onClick={redirectToProfile}
          >
            <div className={`relative h-16 w-16 rounded-full overflow-hidden`}>
              <Image
                src={session.user.image}
                alt="Imaginea de profil"
                fill={true}
                className={`object-cover`}
              />
            </div>
            <h5>{session?.user.name.split(" ")[0]}</h5>
          </div>
        ) : (
          <h5> Nu esti conectat. </h5>
        )}
        <FontAwesomeIcon
          icon={faClose}
          className={`text-3xl cursor-pointer`}
          onClick={toggleNavbar}
        />
      </div>
      <nav className={`sp-v`}>
        <ul>
          {links.map((link) => (
            <li key={"mobile" + link.title} className={`sp-v`}>
              <Link href={link.route} onClick={toggleNavbar}>
                <h5>
                  {link.title.substring(0, 1) +
                    link.title.substring(1).toLowerCase()}
                </h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {session ? (
        <div onClick={() => signOut({ callbackUrl: '/' })}>
          <button className={`btn btn-border-light btn-icon`}>
            <h5>Delogare</h5>
            <h5>
              <FontAwesomeIcon icon={faSignOut} />
            </h5>
          </button>
        </div>
      ) : (
        <div onClick={() => redirectToSignIn()}>
          <button className={`btn btn-border-light btn-icon`}>
            <h5>Conectare</h5>
            <h5>
              <FontAwesomeIcon icon={faSignIn} />
            </h5>
          </button>
        </div>
      )}
    </ReactModal>
  );
};

export default Navbar;
