import React, { ReactElement } from "react";
import { Navbar, Footer } from "components";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div
      className={"bg-diamond bg-primary h-screen w-screen overflow-x-hidden"}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
