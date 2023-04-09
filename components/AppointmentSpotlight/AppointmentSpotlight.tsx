import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Appointment } from "@prisma/client";
import AppointmentModal from "components/AppointmentModal";
import UnauthenticatedUser from "components/UnauthenticatedUser";
import { Session } from "next-auth";
import React, { FunctionComponent, useState } from "react";
import { montserrat, roboto } from "utils/fonts";
import Spotlight from "./Spotlight";

interface Props {
  session: Session | null;
  closestAppointment: Appointment | null;
}

const AppointmentSpotlight: FunctionComponent<Props> = ({
  session,
  closestAppointment,
}) => {
  const [appointmentModal, setAppointmentModal] = useState<boolean>(false);

  if (!session) return <UnauthenticatedUser />;

  const toggleAppointmentModal = () => {
    setAppointmentModal((curr) => !curr);
  };

  return (
    <div
      className={`
    bg-primary px-10 py-8
    md:col-span-2 md:row-span-2
    `}
    >
      <p
        className={`
      ${roboto.className}
      text-center mb-8 text-accent
      font-medium text-2xl 
      xs:text-3xl
      sm:text-3xl
      `}
      >
        Increderea incepe cu unghii bine ingrijite!
      </p>

      <div
        className={`
      lg:flex lg:flex-row lg:justify-between lg:gap-8
      `}
      >
        <div
          className={`
        border-2 border-accent border-solid rounded-md
        flex flex-col items-center group cursor-pointer mb-8
        hover:bg-accent 
        h-[16rem] w-[100%]
        sm:h-[18rem] md:gap-4 md:py-2
        lg:w-[50%]
        `}
          onClick={toggleAppointmentModal}
        >
          <h1
            className={`
          ${montserrat.className}
          font-bold text-2xl mt-4 text-accent
          group-hover:text-primary
          sm:text-3xl
          `}
          >
            Rezerva Acum!
          </h1>
          <div
            className={`
          mt-4
          `}
          >
            <FontAwesomeIcon
              icon={faCalendarPlus}
              className={`text-accent group-hover:text-primary`}
              size="10x"
            />
          </div>
        </div>

        <Spotlight closestAppointment={closestAppointment} />
      </div>
      {appointmentModal && (
        <AppointmentModal
          isOpen={appointmentModal}
          toggleModal={toggleAppointmentModal}
          session={session}
        />
      )}
    </div>
  );
};

export default AppointmentSpotlight;
