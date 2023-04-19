import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import HamburgerMenuButton from "./HamburgerMenuButton";
import MobileProfilePicture from "./MobileProfilePicture";
import { motion } from "framer-motion";
import Button from "components/Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { roboto } from "utils/fonts";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

interface LinkType {
  title: string;
  route: string;
}

const links: LinkType[] = [
  {
    title: "ACASA",
    route: "/",
  },
  {
    title: "GALERIE",
    route: "/galerie",
  },
  {
    title: "DESPRE NOI",
    route: "/despre",
  },
  {
    title: "PROGRAMARI",
    route: "/programari",
  },
  {
    title: "CONTACT",
    route: "#contact",
  },
];

interface MobileNavbarProps {
  isMedium: boolean;
  navbarOpen: boolean;
  toggleNavbar: () => void;
}

const MobileNavbar: FunctionComponent<MobileNavbarProps> = ({
  isMedium,
  navbarOpen,
  toggleNavbar,
}) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/");
    signOut();
  };

  if (isMedium || !navbarOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`
      h-screen w-screen absolute bg-[rgba(0,0,0,0.5)] top-0 left-0 overflow-hidden
      backdrop-blur-sm z-50
      `}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        className={`
      h-screen w-[90%] absolute bg-accent top-0 right-0
      bg-opacity-80
      flex flex-col pl-8 pt-16
      rounded-l-[1rem]
      xs:w-[80%]
      sm:pl-16
      `}
      >
        <div
          className={`flex flex-row items-center justify-end
      pr-8
      sm:pr-24
      `}
        >
          {session && session.user.image && session.user.name && (
            <MobileProfilePicture
              image={session.user.image}
              name={session.user.name}
              isMedium={isMedium}
              toggleModal={toggleNavbar}
            />
          )}

          <HamburgerMenuButton
            navbarOpen={navbarOpen}
            toggleNavbar={toggleNavbar}
            isMedium={isMedium}
          />
        </div>

        <ul
          className={`ml-4 flex flex-col justify-center gap-12 ${
            !!session && "mt-16"
          }
      sm:pl-16
      `}
        >
          {links.map((link: LinkType, index: number) => (
            <li
              key={index + link.title}
              className={`
              text-3xl text-white font-sans font-medium
            `}
              onClick={toggleNavbar}
            >
              <Link href={link.route}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {!!session ? (
          <span
            className={`mt-16 text-white ${roboto.className}
          flex flex-row ml-4 text-2xl underline cursor-pointer
          `}
            onClick={handleSignOut}
          >
            {/* <FontAwesomeIcon
              icon={faSignOut}
              className={`
            mr-4 text-3xl
            `}
            /> */}
            <p>Deconectare</p>
          </span>
        ) : (
          <div className={`mt-16`}>
            <Link href="/profile">
              <Button title="Conecteaza-te" onClick={toggleNavbar} size="2xl" />
            </Link>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default MobileNavbar;
