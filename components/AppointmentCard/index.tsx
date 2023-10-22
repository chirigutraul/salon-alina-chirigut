import React, { FunctionComponent } from "react";
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
      
      font-medium text-lg
      sm:text-xl
      md:text-lg
      `}
      >
        {servicesLabels.get(appointment.service.name)}
      </p>
      <p
        className={`
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
        `}
        >
          Ora {time.substring(0, 5)}
        </p>
        <p
          className={`
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
