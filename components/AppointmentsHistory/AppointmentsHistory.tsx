import { Appointment } from "@prisma/client";
import { AppointmentCard } from "components";
import React, { FunctionComponent } from "react";
import { roboto } from "utils/fonts";
import { servicesLabels, appointmentStatuses } from "utils/constants";
import breakpoints from "utils/TailwindBreakPoints";
import useWindowSize from "utils/hooks/BreakPointsHooks";

interface Props {
  appointments: Appointment[];
}

const DesktopAppointmentsHistory: FunctionComponent<Props> = ({
  appointments,
}) => {
  return (
    <>
      <div className={"grid grid-cols-3 text-center gap-y-4 h-72"}>
        <h2>Serviciu</h2>
        <h2>Data si ora</h2>
        <h2>Status</h2>
        {appointments?.map((appointment) => (
          <>
            <p>{servicesLabels.get(appointment.service.name)}</p>
            <p>
              {appointment?.date.toString().split("T")[0]}{" "}
              {appointment?.date.toString().split("T")[1].substring(0, 5)}
            </p>
            <p>{appointmentStatuses.get(appointment.status)}</p>
          </>
        ))}
      </div>
    </>
  );
};

const AppointmentsHistory: FunctionComponent<Props> = ({ appointments }) => {
  const { width } = useWindowSize();
  const mobile = width && width < breakpoints.md;

  if (!appointments) return <p>No appointments</p>;

  return (
    <div
      className={`
    bg-primary px-10 flex flex-col gap-6 py-8
    md:h-[18rem] md:overflow-scroll md:row-start-2 md:overflow-x-hidden
    md:px-16 md:box-content md:row-end-3 md:col-start-2
    md:col-span-2 md:border-2 md:border-accent md:rounded-md
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
