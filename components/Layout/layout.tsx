import React, { ReactElement } from "react";
import { Navbar, Footer } from "components";
import { roboto } from "utils/fonts";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div
      className={`bg-diamond bg-primary h-screen w-screen overflow-x-hidden ${roboto.className}`}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
