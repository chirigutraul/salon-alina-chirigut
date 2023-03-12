import { Appointment } from "@prisma/client";
import { AppointmentCard } from "components";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React, { FunctionComponent, useEffect, useState } from "react";
import { roboto } from "utils/fonts";
import { getUserAppointments } from "utils/hooks/requests/appointments";

interface Props {
  userId: string;
}

const AppointmentsHistory: FunctionComponent<Props> = ({ userId }) => {
  const [appointments, setAppointments] = useState<Appointment[] | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUserAppointments = async (userId: string) => {
    setLoading(true);
    const appointments = await getUserAppointments(userId);
    console.log(appointments);
    setAppointments(appointments);
    setLoading(false);
  };

  useEffect(() => {
    fetchUserAppointments(userId);
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!appointments && !loading) return <p>No appointments</p>;

  return (
    <div
      className={`
    bg-primary px-10 flex flex-col gap-6 py-8
    md:h-[18rem] md:overflow-scroll md:row-start-2 md:overflow-x-hidden
    md:px-4 md:box-content
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

      {appointments?.map((appointment) => (
        <AppointmentCard appointment={appointment} />
      ))}
    </div>
  );
};

export default AppointmentsHistory;
