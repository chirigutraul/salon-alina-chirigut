import { Appointment } from "@prisma/client";
import React, { FunctionComponent } from "react";
import { roboto, montserrat } from "utils/fonts";

interface Props {
  appointment: Appointment;
}

const AppointmentCard: FunctionComponent<Props> = ({ appointment }) => {
  return (
    <div
      className={`
    border-2 border-accent border-solid rounded-md
    p-4
    `}
    >
      <p
        className={`
      ${roboto.className}
      font-medium text-lg
      sm:text-xl
      md:text-lg
      `}
      >
        {appointment.id}
      </p>
      <p
        className={`
      ${montserrat.className}
      `}
      >
        {appointment.date.toISOString().split("T")[0]}
      </p>
      <div
        className={`
      flex flex-row justify-between
      md:flex-col
      `}
      >
        <p
          className={`
        ${montserrat.className}
        `}
        >
          Ora 15:00
        </p>
        <p
          className={`
        ${montserrat.className}
        font-bold
        `}
        >
          Aprobata
        </p>
      </div>
    </div>
  );
};

export default AppointmentCard;
