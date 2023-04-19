import React, { ReactElement } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { montserrat } from "utils/fonts";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div
      className={`bg-primary h-screen w-screen overflow-x-hidden ${montserrat.className} font-regular scroll-smooth main-margin`}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
