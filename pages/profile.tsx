import AuthenticatedUserWithoutPhone from "components/AuthenticatedUserWithoutPhone";
import React from "react";

import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import { PrismaClient } from "@prisma/client";
import {
  AppointmentsHistory,
  AppointmentSpotlight,
  MakeAppointmentButton,
  UnauthenticatedUser,
  UserInfo,
} from "components";
import { getUserAppointments } from "utils/hooks/requests/appointments";
import { ParsedUrlQuery } from "querystring";
import { extendedAppointment } from "types";

interface Props {
  session: Session | null;
  appointments: extendedAppointment[] | null;
  closestAppointment: extendedAppointment | null;
}

export const getServerSideProps: any = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);

  if (session) {
    const prisma = new PrismaClient();

    const user = await prisma.client.findUnique({
      where: {
        id: session.user.id,
      },
    });

    if (user && user.phone) {
      session.user.phone = user.phone;
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
