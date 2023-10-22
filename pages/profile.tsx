import AuthenticatedUserWithoutPhone from "components/AuthenticatedUserWithoutPhone";
import React, { useState } from "react";

import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import { getUserAppointments } from "utils/hooks/requests/appointments";
import { extendedAppointment } from "types/DbEntitiesTypes";
import AppointmentModal from "components/AppointmentModal";
import { useRouter } from "next/router";
import AppointmentSpotlight from "components/AppointmentSpotlight";
import UserInfo from "components/UserInfo"
import AppointmentButton from "components/AppointmentButton"
import AppointmentsHistory from "components/AppointmentsHistory"

interface Props {
  session: Session | null;
  appointments: extendedAppointment[] | null;
  closestAppointment: extendedAppointment | null;
}

export const getServerSideProps: any = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);

  if (session && session.user && session.user.id) {
    const { appointments, closestAppointment } = await getUserAppointments(
      session.user.id
    );

    return {
      props: { session, appointments, closestAppointment },
    };
  }

  return {
    props: {
      session: null,
    },
  };
};

export default function Profile({
  session,
  appointments,
  closestAppointment,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navigateToSignIn = () => router.push("/sign-in");
  if (!session || !session.user) return navigateToSignIn();

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
            <AppointmentSpotlight closestAppointment={closestAppointment} />
          </div>

          <div
            className={`flex flex-col gap-8 mt-8
          md:flex-row
          `}
          >
            <AppointmentButton
              toggleAppointmentModal={toggleAppointmentModal}
            />
            <AppointmentsHistory appointments={appointments} />
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

