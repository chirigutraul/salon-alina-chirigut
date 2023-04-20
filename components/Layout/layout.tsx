import React, { ReactElement } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className={`bg-primary`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
