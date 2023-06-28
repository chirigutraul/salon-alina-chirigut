import React, { ReactElement } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const shouldBackgroundBeGradient = {
  "/profile": true,
};

export default function Layout({ children }: { children: ReactElement }) {
  const router = useRouter();
  const path = router.asPath as keyof typeof shouldBackgroundBeGradient;

  return (
    <div className={`${shouldBackgroundBeGradient[path] ? "bg-gradient" : ""}`}>
      <Navbar />
      {children}
      <Footer />

      <ToastContainer
        theme="dark"
        position="bottom-right"
        key="toast-container"
      />
    </div>
  );
}
