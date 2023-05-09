import Image from "next/image";
import React from "react";

import { signIn } from "next-auth/react";

const UnauthenticatedUser = () => {
  const googleAuth = () => {
    signIn("google", {});
  };

  const facebookAuth = () => {
    signIn("facebook", {});
  };

  return (
    <section className={`bg-gradient sp-h grid place-items-center`}>
      <div
        className={`text-white sp-4t sp-2h sp-2v flex flex-col items-center text-center bg-black-75 w-full justify-between rounded-lg
        max-w-[500px]
        xl:sp-h
        `}
      >
        <h5>
          Pentru a putea face programari, te rugam sa te autentifici folosind
          una din metodele de mai jos:
        </h5>
        <div className={`sp-2t`}>
          <div onClick={googleAuth} className={`cursor-pointer`}>
            <Image
              src="/images/sign-in-badges/google-2x.png"
              width={382}
              height={92}
              alt="Sign in with google button"
              className={`scale-75`}
            />
          </div>
          <div
            className={`w-72 h-16 bg-white sp-t rounded-md cursor-pointer text-black
          xl:w-96
          `}
            onClick={facebookAuth}
          >
            <h6>Sign in with facebook</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnauthenticatedUser;
