import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextInput from "components/TextInput";
import { Session } from "next-auth";
import React, { FunctionComponent, useState } from "react";
import { updateClientById } from "utils/hooks/requests/clients";
import { validatePhoneNumber } from "utils/helpers/validatePhoneNumber";
import { toast } from "react-toastify";
import { RequestResponse } from "types/ResponseTypes";

interface Props {
  session: Session | null;
}

const AuthenticatedUserWithoutPhone: FunctionComponent<Props> = ({
  session,
}) => {
  const [phone, setPhone] = useState<string>("");

  const addPhoneNumberToUser = async () => {
    if (session) {
      if (phone && session.user.id) {
        await updateClientById(session.user.id, { phone }).then(
          (res: RequestResponse) => {
            if (res) {
              toast[res.status](res.message);
            }
          }
        );
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
        <div className={`sp-t w-full flex flex-col align-center`}>
          <label className={`text-left`}>
            <h6>Numar de telefon:</h6>
          </label>
          <TextInput
            name="phone"
            placeholder="Numarul tau de telefon"
            value={phone}
            onChange={(e) => setPhone(e)}
            validationMethod={validatePhoneNumber}
          />
          <button
            type="submit"
            onClick={addPhoneNumberToUser}
            className={`btn btn-border-light btn-icon sp-t ml-auto mr-auto`}
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
