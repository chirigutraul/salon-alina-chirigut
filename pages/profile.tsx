import AuthenticatedUserWithoutPhone from "components/AuthenticatedUserWithoutPhone";
import React from "react";

import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import AppointmentsHistory from "components/AppointmentsHistory";
import AppointmentSpotlight from "components/AppointmentSpotlight";
import MakeAppointmentButton from "components/MakeAppointmentButton";
import UnauthenticatedUser from "components/UnauthenticatedUser";
import UserInfo from "components/UserInfo";
import { getUserAppointments } from "utils/hooks/requests/appointments";
import { extendedAppointment } from "types/DbEntitiesTypes";
import { prisma } from "prisma/client";
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
    if (!session.user.phone) {
      const user = await prisma.client.findUnique({
        where: {
          id: session.user.id,
        },
      });

      if (user && user.phone) {
        session.user.phone = user.phone;
      }
    }

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

const Profile = ({ session, appointments, closestAppointment }: Props) => {
  if (!session || !session.user) return <UnauthenticatedUser />;

  if (!session.user.phone)
    return <AuthenticatedUserWithoutPhone session={session} />;

  return (
    <div
      className={`px-4 grid grid-cols-1
    md:grid-cols-2 md:gap-x-4
    lg:grid-cols-3
    `}
    >
      <UserInfo client={session.user} />
      <MakeAppointmentButton session={session} />
      <AppointmentSpotlight closestAppointment={closestAppointment} />
      <AppointmentsHistory appointments={appointments} />
    </div>
  );
};

export default Profile;
