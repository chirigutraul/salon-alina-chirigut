import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const steps = [
  {
    instruction: "Navigheaza la sectiunea de profil",
    picture:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    instruction: "Autentifica-te cu contul de Google Sau Facebook ",
    picture:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    instruction: "Apasa pe butonul ‘Rezerva Acum’",
    picture:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    instruction: "Navigheaza la sectiunea de profil",
    picture:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    instruction: "Navigheaza la sectiunea de profil",
    picture:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const Programari = () => {
  const router = useRouter();

  const navigateToSignIn = () => {
    router.push("/profile");
  };

  return (
    <section className={`nav-pad sp-h`}>
      <div>
        <h1>Programari</h1>
        <h5>
          Pentru a face o programare, <br /> urmeaza urmatorii pasi:
        </h5>
      </div>
      <div className={`sp-2v`}>
        <h3>Cum fac o programare?</h3>
      </div>
      <div
        className={`grid grid-cols-1 gap-4
      md:grid-cols-2 lg:grid-cols-3
      `}
      >
        {steps.map((step, index) => (
          <div
            key={step.instruction + index}
            className={`flex flex-col justify-between`}
          >
            <div className={`sp-1/2v`}>
              <h5>
                {index + 1}. {step.instruction}
              </h5>
            </div>
            <div className={`relative w-full aspect-video bg-black-25`}>
              <Image
                src={step.picture}
                alt="Poza cu instructiuni"
                fill={true}
                className={`object-cover`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={`sp-2v`} onClick={navigateToSignIn}>
        <button className={`btn btn-gradient btn-icon`}>
          <h6>Programeaza-te</h6>
          <h6>
            <FontAwesomeIcon icon={faArrowRight} />
          </h6>
        </button>
      </div>
    </section>
  );
};

export default Programari;
