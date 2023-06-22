interface LinkType {
  title: string;
  route: string;
}

export const links: LinkType[] = [
  {
    title: "ACASA",
    route: "/",
  },
  {
    title: "GALERIE",
    route: "/galerie",
  },
  {
    title: "PRETURI",
    route: "/preturi",
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

export const shouldNavbarBeDarker = {
  "/galerie": true,
  "/programari": true,
};
