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
      <div
        className={`flex flex-col items-center py-4
      `}
      >
        <div
          className={`relative h-32 w-32
        xl:h-36 xl:w-36
        `}
        >
          <Image
            src={client.image}
            alt="Profile picture of the user"
            fill={true}
            className={`rounded-full`}
          />
        </div>
        <h1
          className={`
        ${roboto.className} text-2xl font-bold
        md:text-3xl
        xl:text-4xl
        `}
        >
          {client.name}
        </h1>
      </div>
      <div className={"flex flex-col gap-4"}>
        <span>
          <h2
            className={`text-xl font-bold ${roboto.className}
          md:text-2xl 
          xl:text-3xl
          `}
          >
            Email:
          </h2>
          <span className={"flex items-center gap-2"}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={`text-xl xl:text-2xl`}
            />
            <p className={`text-xl xl:text-2xl`}>{client.email}</p>
          </span>
        </span>

        <span>
          <h2
            className={`text-xl font-bold ${roboto.className}
          md:text-2xl 
          xl:text-3xl
          `}
          >
            Telefon:
          </h2>
          <span className={"flex items-center gap-2"}>
            <FontAwesomeIcon icon={faPhone} className={`text-xl xl:text-2xl`} />
            <p className={`text-xl xl:text-2xl`}>{client.phone}</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
