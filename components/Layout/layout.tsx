import React, { ReactElement } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />

      <ToastContainer theme="dark" position="bottom-right" />
    </div>
  );
}
