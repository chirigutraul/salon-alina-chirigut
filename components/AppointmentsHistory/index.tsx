import { FunctionComponent } from "react";
import { extendedAppointment } from "types/DbEntitiesTypes";
import { appointmentStatuses, servicesLabels } from "utils/constants";

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

export default AppointmentsHistory