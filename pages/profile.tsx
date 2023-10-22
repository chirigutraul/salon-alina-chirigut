import AuthenticatedUserWithoutPhone from "components/AuthenticatedUserWithoutPhone";
import React, { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import { getById } from "utils/hooks/requests/appointments";
import AppointmentModal from "components/AppointmentModal";
import AppointmentSpotlight from "components/AppointmentSpotlight";
import UserInfo from "components/UserInfo"
import AppointmentButton from "components/AppointmentButton"
import AppointmentsHistory from "components/AppointmentsHistory"
import { extendedAppointment } from "types/DbEntitiesTypes";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const [userAppointments, setUserAppointments] = useState<extendedAppointment[]>();
  const [spotlightAppointment, setSpotlightAppointment] = useState<extendedAppointment>();

  const fetchAppointments = async () => {
    if (!session) {
      return setUserAppointments([]);
    }

    const appointments = await getById(session.user.id);
    setSpotlightAppointment(appointments[appointments?.length - 1]);
    setUserAppointments(appointments);
  }

  useEffect(() => {
    fetchAppointments();
  }, [session]);

  if (!session || !session.user) return console.log("No user")

  if (!session.user.phone)
    return <AuthenticatedUserWithoutPhone session={session} />;

  const toggleAppointmentModal = () => {
    setIsOpen((curr) => !curr);
  };

  return (
    <section className={`bg-white sp-h text-white bg-gradient`}>
      <div className={`sp-2t`}>
        <h1 className={`text-center`}>Profilul tau</h1>
        <div className={`sp-2v`}>
          <div
            className={`flex flex-col gap-8
          sm:flex-row
          `}
          >
            <UserInfo session={session} />
            <AppointmentSpotlight closestAppointment={spotlightAppointment} />
          </div>

          <div
            className={`flex flex-col gap-8 mt-8
          md:flex-row
          `}
          >
            <AppointmentButton
              toggleAppointmentModal={toggleAppointmentModal}
            />
            <AppointmentsHistory appointments={userAppointments} />
          </div>
        </div>
      </div>
      <AppointmentModal
        isOpen={isOpen}
        toggleModal={toggleAppointmentModal}
        session={session}
      />
    </section>
  );
}

