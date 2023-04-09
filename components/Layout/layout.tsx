import React, { ReactElement } from "react";
import { Navbar, Footer } from "components";
import { montserrat } from "utils/fonts";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div
      className={`bg-primary h-screen w-screen overflow-x-hidden ${montserrat.className} font-regular`}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
