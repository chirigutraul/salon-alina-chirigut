import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppointmentModal from "components/AppointmentModal";
import UnauthenticatedUser from "components/UnauthenticatedUser";
import { Session } from "next-auth";
import React, { FunctionComponent, useState } from "react";
interface Props {
  session: Session;
}

const MakeAppointmentButton: FunctionComponent<Props> = ({ session }) => {
  const [appointmentModal, setAppointmentModal] = useState<boolean>(false);

  if (!session) return <UnauthenticatedUser />;

  const toggleAppointmentModal = () => {
    setAppointmentModal((curr) => !curr);
  };

  return (
    <>
      <div
        onClick={toggleAppointmentModal}
        className={`
        border-2 border-secondary flex flex-col items-center justify-between
        rounded-md mt-8 cursor-pointer group hover:
        h-64 py-6
        lg:col-start-2 lg:col-end-3 lg:h-72
        `}
      >
        <h1
          className={`
         text-4xl font-bold group-hover:text-white
        `}
        >
          Rezerva acum!
        </h1>
        <FontAwesomeIcon
          icon={faCalendarPlus}
          className={`text-9xl group-hover:text-white group-hover:animate-bounce`}
        />
      </div>
      {appointmentModal && (
        <AppointmentModal
          isOpen={appointmentModal}
          toggleModal={toggleAppointmentModal}
          session={session}
        />
      )}
    </>
  );
};

export default MakeAppointmentButton;
