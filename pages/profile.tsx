import AuthenticatedUserWithoutPhone from "components/AuthenticatedUserWithoutPhone";
import React, { useState } from "react";

import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { AppointmentsHistory, UnauthenticatedUser } from "components";
import AppointmentSpotlight from "components/AppointmentSpotlight/AppointmentSpotlight";
import ProfileInfo from "components/ProfileInfo/ProfileInfo";

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
  const [date, setDate] = useState<Date>(new Date());

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

      <AppointmentSpotlight session={session} />

      <AppointmentsHistory userId={session.user.id} />
    </div>
  );
};

export default Profile;
