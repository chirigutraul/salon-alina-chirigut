import React, { ReactElement } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div
      className={`bg-primary h-screen w-screen overflow-x-hidden font-regular scroll-smooth main-margin`}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
