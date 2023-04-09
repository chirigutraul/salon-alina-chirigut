import AuthenticatedUserWithoutPhone from "components/AuthenticatedUserWithoutPhone";
import React, { useEffect, useState } from "react";

import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import { Appointment, PrismaClient } from "@prisma/client";
import { AppointmentsHistory, UnauthenticatedUser } from "components";
import AppointmentSpotlight from "components/AppointmentSpotlight/AppointmentSpotlight";
import ProfileInfo from "components/ProfileInfo/ProfileInfo";
import { getUserAppointments } from "utils/hooks/requests/appointments";

interface Props {
  session: Session | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
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
  }

  return {
    props: { session },
  };
};

const Profile = ({ session }: Props) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [closestAppointment, setClosestAppointment] =
    useState<Appointment | null>(null);

  const fetchUserAppointments = async () => {
    if (!!session) {
      const { appointments, closestAppointment } = await getUserAppointments(
        session.user.id
      );
      setAppointments(appointments);
      setClosestAppointment(closestAppointment);
    } else {
      return "Session not found";
    }
  };

  useEffect(() => {
    fetchUserAppointments();
  }, []);

  if (!session || !session.user) return <UnauthenticatedUser />;

  if (!session.user.phone)
    return <AuthenticatedUserWithoutPhone session={session} />;

  return (
    <div
      className={`
  grid grid-cols-1 gap-8 mt-8
  md:grid-cols-3 md:grid-rows-2 md:mb-8 md:grid-flow-row-dense
  `}
    >
      <ProfileInfo session={session} />

      <AppointmentSpotlight
        session={session}
        closestAppointment={closestAppointment}
      />

      <AppointmentsHistory appointments={appointments} />
    </div>
  );
};

export default Profile;
