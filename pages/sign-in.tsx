import { FunctionComponent } from "react";
import React from "react";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";


const SignIn: FunctionComponent = () => {
  return (
    <section className={`bg-gradient sp-h grid place-items-center`}>
      <div
        className={`text-white sp-4t sp-2h sp-2v text-center bg-black-75 w-full justify-between rounded-lg
        max-w-[500px]
        xl:sp-h
        `}
      >
        <h5>
          Pentru a putea face programari, te rugam sa te autentifici folosind
          una din metodele de mai jos:
        </h5>
        <div
          className={`w-full flex flex-col items-center justify-between gap-4 sp-t`}
        >
          <div
            onClick={() => signIn("google", { callbackUrl: '/profile' })}
            className={`flex justify-between gap-4 cursor-pointer relative bg-white text-black px-4 py-2 rounded-md pr-10
            hover:bg-white-80
            `}
          >
            <h5>
              <FontAwesomeIcon icon={faGoogle} />
            </h5>
            <h6>Sign in with google</h6>
          </div>
          <div
            onClick={() => signIn("facebook", { callbackUrl: '/profile' })}
            className={`flex justify-between gap-4 cursor-pointer relative bg-white text-black px-4 py-2 rounded-md
            hover:bg-white-80
            `}
          >
            <h5>
              <FontAwesomeIcon icon={faFacebook} />
            </h5>
            <h6>Sign in with Facebook</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;