import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import { roboto } from "utils/fonts";

interface Props {
  client: {
    id: string;
    email: string;
    name: string;
    image: string;
    phone?: string | undefined;
  };
}

const UserInfo: FunctionComponent<Props> = ({ client }) => {
  return (
    <div
      className={` text-accent
      md:col-span-2
      lg:col-span-1 lg:row-span-2
    `}
    >
      <div className={"flex flex-col items-center py-4"}>
        <Image
          src={client.image}
          alt="Profile picture of the user"
          width={128}
          height={128}
          className={`rounded-full`}
        />
        <h1
          className={`
        ${roboto.className} text-2xl font-bold
        `}
        >
          {client.name}
        </h1>
      </div>
      <div className={"flex flex-col gap-4"}>
        <span>
          <h2 className={`text-xl font-bold ${roboto.className}`}>Email:</h2>
          <span className={"flex items-center gap-2"}>
            <FontAwesomeIcon icon={faEnvelope} className={`text-xl`} />
            <p className={`text-xl`}>{client.email}</p>
          </span>
        </span>

        <span>
          <h2 className={`text-xl font-bold ${roboto.className}`}>Telefon:</h2>
          <span className={"flex items-center gap-2"}>
            <FontAwesomeIcon icon={faPhone} className={`text-xl`} />
            <p className={`text-xl`}>{client.phone}</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
