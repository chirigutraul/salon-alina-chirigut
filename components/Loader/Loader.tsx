import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => setLoading(true);
    const handleComplete = (url: any) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  // if (!loading) return null;

  return (
    <div
      className={`absolute top-0 z-50 grid w-full h-full text-black bg-white place-content-center

      `}
    >
      <h1>Loading...</h1>
    </div>
  );
};

export default Loader;
