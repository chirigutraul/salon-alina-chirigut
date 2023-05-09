import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import { Session } from "next-auth";
import React, { FunctionComponent, useState } from "react";
import { updateClientById } from "utils/hooks/requests/clients";

interface Props {
  session: Session | null;
}

const AuthenticatedUserWithoutPhone: FunctionComponent<Props> = ({
  session,
}) => {
  const [phone, setPhone] = useState<string>();

  const addPhoneNumberToUser = async () => {
    if (session) {
      if (phone && session.user.id) {
        await updateClientById(session.user.id, { phone }).then((res) => {
          if (res) {
            window.location.reload();
          }
        });
      }
    }
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
        <div className={`sp-t`}>
          <input
            type="text"
            name="phone"
            placeholder="Numar de telefon"
            onChange={(e) => setPhone(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 rounded-sm shadow-sm text-black-50"
          />
          <button
            type="submit"
            onClick={addPhoneNumberToUser}
            className={`btn btn-border-light btn-icon`}
          >
            <h6>Confirma</h6>
            <h6>
              <FontAwesomeIcon icon={faArrowRight} />
            </h6>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthenticatedUserWithoutPhone;
