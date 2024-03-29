import React, { ReactElement, createContext, useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Loader from "components/Loader";

const shouldBackgroundBeGradient = {
  "/profile": true,
};

type LoadingContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setDebouncedLoading: (loading: boolean) => void;
};

export const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {},
  setDebouncedLoading: () => {},
});

export const LoadingContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const setDebouncedLoading = (value: boolean) => {
    setTimeout(() => {
      setLoading(value);
    }, 300);
  };

  const contextValue: LoadingContextType = {
    loading,
    setLoading,
    setDebouncedLoading,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};

export default function Layout({ children }: { children: ReactElement }) {
  const router = useRouter();
  const path = router.asPath as keyof typeof shouldBackgroundBeGradient;

  return (
    <div className={`${shouldBackgroundBeGradient[path] ? "bg-gradient" : ""}`}>
      <Navbar />

      <LoadingContextProvider>
        <>
          <Loader />
          {children}
        </>
      </LoadingContextProvider>
      <Footer />

      <ToastContainer
        theme="dark"
        position="bottom-right"
        key="toast-container"
      />
    </div>
  );
}
