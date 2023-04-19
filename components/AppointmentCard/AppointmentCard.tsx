import { Appointment } from "@prisma/client";
import React, { FunctionComponent } from "react";
import { roboto, montserrat } from "utils/fonts";
import { appointmentStatuses, servicesLabels } from "utils/constants";
import { extendedAppointment } from "types/DbEntitiesTypes";

interface Props {
  appointment: extendedAppointment;
}

const AppointmentCard: FunctionComponent<Props> = ({ appointment }) => {
  const dateAndTime = appointment.date.toString().split("T");

  const [date, time] = dateAndTime;
  return (
    <div
      className={`
    border-2 border-secondary border-solid rounded-md
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
        {servicesLabels.get(appointment.service.name)}
      </p>
      <p
        className={`
      ${montserrat.className}
      `}
      >
        {date}
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
          Ora {time.substring(0, 5)}
        </p>
        <p
          className={`
        ${montserrat.className}
        font-bold
        `}
        >
          {appointmentStatuses.get(appointment.status)}
        </p>
      </div>
    </div>
  );
};

export default AppointmentCard;
