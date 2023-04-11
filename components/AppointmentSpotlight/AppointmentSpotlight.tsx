import { Appointment } from "@prisma/client";
import React, { FunctionComponent } from "react";
import { roboto } from "utils/fonts";
import { servicesLabels, appointmentStatuses } from "utils/constants";
import { extendedAppointment } from "types";

interface Props {
  closestAppointment: extendedAppointment | null;
}

const AppointmentSpotlight: FunctionComponent<Props> = ({
  closestAppointment,
}) => {
  if (!closestAppointment)
    return (
      <div
        className={`
        h-64 border-2 border-accent rounded-md mt-8 p-4
        flex flex-col justify-between py-8 text-center
        lg:h-72
      `}
      >
        <h1 className={`${roboto.className} text-3xl font-light`}>
          Nu ai nicio programare in viitorul apropiat.
        </h1>
        <h2 className={`${roboto.className} text-3xl font-light`}>
          Te asteptam cu drag!
        </h2>
      </div>
    );

  return (
    <div
      className={`
      h-64 border-2 border-accent rounded-md mt-8 p-4
      flex flex-col justify-between
      lg:h-72
  `}
    >
      <span>
        <h1 className={`${roboto.className} text-3xl font-light`}>
          Te asteptam!
        </h1>
        <h1 className={`text-xl`}>Urmatoarea ta programare:</h1>
      </span>
      <span>
        <h1 className={`${roboto.className} font-bold text-3xl`}>
          {servicesLabels.get(closestAppointment.service.name)}
        </h1>
      </span>
      <div>
        <span>
          <h3 className={`text-xl`}>
            Data: {closestAppointment.date.toString().split("T")[0]}
          </h3>
        </span>
        <div className={`flex justify-between`}>
          <h3 className={`text-xl`}>
            Ora:{" "}
            {closestAppointment.date.toString().split("T")[1].substring(0, 5)}
          </h3>
          <h3 className={`text-xl`}>
            Cost: {closestAppointment.service.price}RON
          </h3>
        </div>
        <div className={`flex justify-end`}>
          <h3 className={`text-xl`}>
            Status: {appointmentStatuses.get(closestAppointment.status)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSpotlight;
