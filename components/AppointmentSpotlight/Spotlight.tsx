import { Appointment } from "@prisma/client";
import React from "react";
import { roboto } from "utils/fonts";
import { servicesLabels, appointmentStatuses } from "utils/constants";

const Spotlight = ({
  closestAppointment,
}: {
  closestAppointment: Appointment | null;
}) => {
  const NextAppointment = () => {
    return (
      <>
        <div>
          <h1
            className={`
            font-medium text-accent 
            text-2xl
            sm:text-3xl
            lg:text-2xl
            `}
          >
            Te asteptam!
          </h1>
          <h1
            className={`
            font-medium text-accent
            text-xl
            sm:text-2xl
            lg:text-xl
            `}
          >
            Urmatoarea ta programare:
          </h1>
        </div>
        <h1
          className={`
          ${roboto.className} font-bold text-accent
          text-2xl
          sm:text-3xl
          lg:text-2xl
          `}
        >
          {closestAppointment?.service.name &&
            servicesLabels.get(closestAppointment.service.name)}
        </h1>
        <div>
          <p
            className={`
            font-light 
            text-md
            sm:text-lg
            `}
          >
            Data: {closestAppointment?.date.toString().split("T")[0]}
          </p>
        </div>
        <div
          className={`
          flex flex-row justify-between
          `}
        >
          <p
            className={`
            font-light text-md
            sm:text-lg

            `}
          >
            Ora:{" "}
            {closestAppointment?.date.toString().split("T")[1].substring(0, 5)}
          </p>
          <p
            className={`
            font-light text-md
            sm:text-lg
            `}
          >
            Cost: {closestAppointment?.service.price} lei
          </p>
        </div>
        <div
          className={`
            flex flex-row justify-end
          `}
        >
          <p
            className={`
            font-light text-md
            sm:text-lg

            `}
          >
            Status:{" "}
            {closestAppointment?.status &&
              appointmentStatuses.get(closestAppointment?.status)}
          </p>
        </div>
      </>
    );
  };

  const NoAppointment = () => {
    return (
      <div
        className={`
      flex flex-col items-center text-center justify-between h-full py-2
      `}
      >
        <h1
          className={`
            font-medium text-accent 
            text-2xl
            lg:text-2xl
            ${roboto.className}
            `}
        >
          Momentan, nu ai nicio programare in viitorul apropiat.
        </h1>
        <h1
          className={`
            font-medium text-accent 
            text-2xl
            lg:text-2xl
            ${roboto.className}
            `}
        >
          Te asteptam cu drag !
        </h1>
      </div>
    );
  };

  return (
    <div
      className={`
        border-2 border-accent border-solid rounded-md
        flex flex-col group p-4 gap-2
        h-[16rem] w-[100%]
        sm:h-[18rem] sm:p-8
        lg:w-[50%] lg:p-4
        `}
    >
      {closestAppointment ? <NextAppointment /> : <NoAppointment />}
    </div>
  );
};

export default Spotlight;
