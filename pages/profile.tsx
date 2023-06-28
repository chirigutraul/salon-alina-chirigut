import AuthenticatedUserWithoutPhone from "components/AuthenticatedUserWithoutPhone";
import React, { FunctionComponent, useState } from "react";

import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import UnauthenticatedUser from "components/UnauthenticatedUser";
import { getUserAppointments } from "utils/hooks/requests/appointments";
import { extendedAppointment } from "types/DbEntitiesTypes";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { appointmentStatuses, servicesLabels } from "utils/constants";
import AppointmentModal from "components/AppointmentModal";

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
  if (!session || !session.user) return <UnauthenticatedUser />;

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

interface UserInfoProps {
  session: Session;
}
const UserInfo: FunctionComponent<UserInfoProps> = ({ session }) => {
  return (
    <div className={`bg-black-50 sp-h sp-v rounded-lg`}>
      <div className={`flex flex-col items-center`}>
        <div className={`w-32 h-32 relative rounded-full overflow-hidden`}>
          <Image
            fill={true}
            src={session.user.image}
            alt="Imaginea de profil"
            className={`object-cover`}
          />
        </div>
        <h4 className={`sp-t`}>{session.user.name}</h4>
      </div>
      <div className={`sp-t overflow-auto`}>
        <span className={`flex gap-2 items-end`}>
          <h5>Email:</h5>
          <h6>{session.user.email}</h6>
        </span>
        <span className={`flex gap-2 items-end sp-1/2t`}>
          <h5>Telefon:</h5>
          <h6>{session.user.phone}</h6>
        </span>
      </div>
    </div>
  );
};

interface AppointmentSpotlight {
  closestAppointment: extendedAppointment | null;
}
const AppointmentSpotlight: FunctionComponent<AppointmentSpotlight> = ({
  closestAppointment,
}) => {
  if (!closestAppointment)
    return (
      <div
        className={`bg-black-50 sp-h sp-v rounded-lg text-center grid place-items-center
        md:flex-grow 
        `}
      >
        <div>
          <h3>Te asteptam!</h3>
          <h5 className={`sp-t`}>
            Momentan, nu ai nicio programare in viitorul apropiat..
          </h5>
        </div>
      </div>
    );

  const [date, time] = closestAppointment.date.toString().split("T");

  return (
    <div className={`bg-black-50 sp-h sp-v rounded-lg flex-grow`}>
      <h4 className={`sp-t`}>Te asteptam!</h4>
      <h5>Urmatoarea ta programare:</h5>

      <h3 className={`sp-1/2t`}>
        {servicesLabels.get(closestAppointment.service.name)}
      </h3>

      <h5 className={`sp-1/2t`}>Data: {date}</h5>

      <span className={`flex justify-between`}>
        <h5>Ora: {time.substring(0, 5)}</h5>
        <h5>Cost: {closestAppointment.service.price}LEI</h5>
      </span>

      <h5 className={`text-right`}>
        Status: {appointmentStatuses.get(closestAppointment.status)}
      </h5>
    </div>
  );
};

interface AppointmentButtonProps {
  toggleAppointmentModal: () => void;
}
const AppointmentButton: FunctionComponent<AppointmentButtonProps> = ({
  toggleAppointmentModal,
}) => {
  return (
    <div
      className={`profile-dark-container flex flex-col gap-4 justify-center text-center sp-1/2h sp-2v rounded-lg
      hover:text-black hover:bg-white-80 cursor-pointer md:aspect-square
      md:h-64 lg:h-80
      `}
      onClick={toggleAppointmentModal}
    >
      <h5>Rezerva acum!</h5>
      <FontAwesomeIcon
        icon={faCalendarPlus}
        className={`
        text-9xl
        md:text-8xl md:order-3
      `}
      />
    </div>
  );
};
interface AppointmentsHistoryProps {
  appointments: extendedAppointment[] | null;
}
const AppointmentsHistory: FunctionComponent<AppointmentsHistoryProps> = ({
  appointments,
}) => {
  if (!appointments) {
    return (
      <div
        className={`bg-black-50 sp-h sp-v rounded-lg overflow-auto appointments-history-container
        text-center md:h-64 md:flex-grow md:-order-1
        lg:h-80 
        `}
      >
        <div className={`flex flex-col h-full w-full justify-center`}>
          <h4>Istoric programari</h4>
          <h5 className={`sp-t`}>
            Momentan, nu ai nicio programare in istoric..
          </h5>
          <h5 className={`sp-t`}>
            Poti face o programare dand click pe butonul Rezerva Acum.
          </h5>
        </div>
      </div>
    );
  }

  return (
    <div className={`order-2 flex-grow md:-order-1`}>
      <div
        className={`bg-black-50 sp-h sp-v rounded-lg h-96 
      overflow-auto appointments-history-container
      md:hidden 
      `}
      >
        <h4 className={`text-center`}>Istoricul programarilor tale</h4>
        <ul>
          {appointments?.map((appointment) => {
            const date = appointment.date.toString().split("T")[0];
            const hour = appointment.date
              .toString()
              .split("T")[1]
              .substring(0, 5);
            return (
              <li
                className={`border-[1px] border-white-80 rounded-lg sp-t`}
                key={appointment.id}
              >
                <div className={`sp-h sp-v`}>
                  <h5>{servicesLabels.get(appointment.service.name)}</h5>
                  <span className={`flex justify-between`}>
                    <h6>{`Data: ${date}`}</h6>
                    <h6>{`Ora: ${hour}`}</h6>
                  </span>
                  <p className={`text-right`}>
                    Status: {appointmentStatuses.get(appointment.status)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`bg-black-50 sp-h sp-v hidden rounded-lg overflow-auto appointments-history-container
        md:h-64 md:flex-grow md:-order-1 md:block
        lg:h-80 
        `}
      >
        <h5>Istoricul programarilor tale</h5>
        <table className={`w-full sp-t`}>
          <thead>
            <tr>
              <th>
                <h6>Serviciu</h6>
              </th>
              <th>
                <h6>Data</h6>
              </th>
              <th>
                <h6>Status</h6>
              </th>
            </tr>
          </thead>
          <tbody className={`divide divide-solid divide-white divide-y-[1px]`}>
            {appointments.map((appointment) => {
              const date = appointment.date.toString().split("T")[0];
              return (
                <tr key={appointment.id}>
                  <td className={`py-2`}>
                    <p className={`h7`}>
                      {servicesLabels.get(appointment.service.name)}
                    </p>
                  </td>
                  <td className={`text-right`}>
                    <p className={`h7`}>{date}</p>
                  </td>
                  <td className={`text-right`}>
                    <p className={`h7`}>
                      {appointmentStatuses.get(appointment.status)}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
