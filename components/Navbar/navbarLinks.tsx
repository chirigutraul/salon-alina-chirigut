import Link from "next/link";
import React from "react";

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

const NavbarLinks = ({ isMedium }: { isMedium: boolean }) => {
  if (!isMedium) return null;

  return (
    <div
      className={`
    py-4 flex flex-col items-center 
    lg:flex-row
    `}
    >
      <ul
        className={`
      flex flex-col gap-6 items-center mb-10
      md:flex md:flex-row md:basis-full md:gap-6 md:mb-0
      lg:flex-row lg:gap-8 lg:justify-center
      xl:gap-16
      `}
      >
        {links.map((link: LinkType, index: number) => (
          <li
            key={index}
            className={`
          text-xl text-white font-sans font-medium
          sm:text-2xl
          md:text-sm
          lg:text-lg
          xl:text-xl
          `}
          >
            <Link href={link.route}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarLinks;
