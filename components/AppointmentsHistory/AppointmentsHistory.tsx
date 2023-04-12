import { Appointment, AppointmentStatus, Service } from "@prisma/client";
import { AppointmentCard } from "components";
import React, { FunctionComponent } from "react";
import { roboto } from "utils/fonts";
import { servicesLabels, appointmentStatuses } from "utils/constants";
import breakpoints from "utils/TailwindBreakPoints";
import useWindowSize from "utils/hooks/BreakPointsHooks";
import { extendedAppointment } from "types/DbEntitiesTypes";

interface Props {
  appointments: extendedAppointment[] | null;
}

const DesktopAppointmentsHistory: FunctionComponent<Props> = ({
  appointments,
}) => {
  return (
    <div
      className={
        "flex justify-center rounded-scrollbar-thumb rounded-scrollbar"
      }
    >
      <table className={"w-[90%] text-left"}>
        <thead>
          <tr>
            <th className={`${roboto.className} text-2xl`}>Serviciu</th>
            <th className={`${roboto.className} text-2xl text-right`}>
              Data si ora
            </th>
            <th className={`${roboto.className} text-2xl text-right`}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((appointment) => (
            <tr key={"row" + appointment.id} className={"h-12"}>
              <td className={"text-lg font-bold"}>
                {servicesLabels.get(appointment.service.name)}
              </td>
              <td className={"text-lg text-right font-bold"}>
                {appointment?.date.toString().split("T")[0]}{" "}
                {appointment?.date.toString().split("T")[1].substring(0, 5)}
              </td>
              <td className={"text-lg text-right font-bold"}>
                {appointmentStatuses.get(appointment.status)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AppointmentsHistory: FunctionComponent<Props> = ({ appointments }) => {
  const { width } = useWindowSize();
  const mobile = width && width < breakpoints.lg;

  if (!appointments)
    return (
      <div>
        <h1>Nu ai nicio programare in istoric</h1>
      </div>
    );

  return (
    <div
      className={`
    bg-primary flex flex-col gap-6 my-8
    md:h-[24rem] md:overflow-scroll md:overflow-x-hidden md:box-content md:col-span-2
    lg:border-2 lg:border-accent lg:rounded-md lg: py-8
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

      {mobile ? (
        appointments?.map((appointment) => (
          <AppointmentCard appointment={appointment} key={appointment.id} />
        ))
      ) : (
        <DesktopAppointmentsHistory appointments={appointments} />
      )}
    </div>
  );
};

export default AppointmentsHistory;
