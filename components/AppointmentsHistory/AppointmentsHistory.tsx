import { Appointment } from "@prisma/client";
import { AppointmentCard } from "components";
import React, { FunctionComponent } from "react";
import { roboto } from "utils/fonts";

interface Props {
  appointments: Appointment[];
}

const AppointmentsHistory: FunctionComponent<Props> = ({ appointments }) => {
  if (!appointments) return <p>No appointments</p>;

  return (
    <div
      className={`
    bg-primary px-10 flex flex-col gap-6 py-8
    md:h-[18rem] md:overflow-scroll md:row-start-2 md:overflow-x-hidden
    md:px-4 md:box-content
    `}
    >
      <p
        className={`
      ${roboto.className}
      font-light text-center 
      text-2xl
      sm:text-3xl
      `}
      >
        Istoricul programarilor tale:
      </p>

      {appointments?.map((appointment) => (
        <AppointmentCard appointment={appointment} key={appointment.id} />
      ))}
    </div>
  );
};

export default AppointmentsHistory;
