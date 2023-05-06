import Image from "next/image";
import React from "react";

import { signIn } from "next-auth/react";

const UnauthenticatedUser = () => {
  const googleAuth = () => {
    signIn("google", {});
  };
  return (
    <section className={`bg-gradient sp-h`}>
      <div
        className={`text-white sp-4t sp-2h sp-2v flex flex-col items-center text-center bg-black-75 w-full justify-between rounded-lg`}
      >
        <h3>
          Pentru a putea face programari, te rugam sa te autentifici folosind
          una din metodele de mai jos:
        </h3>
        <div className={`sp-2t`}>
          <div className={`w-72 h-16 bg-white rounded-md`}></div>
          <div className={`w-72 h-16 bg-white sp-t rounded-md`}></div>
        </div>
      </div>
    </section>
  );
};

export default UnauthenticatedUser;
