import { FunctionComponent } from "react";
import { extendedAppointment } from "types/DbEntitiesTypes";
import { appointmentStatuses, servicesLabels } from "utils/constants";

interface AppointmentSpotlightProps {
    closestAppointment: extendedAppointment | null;
}
 
const AppointmentSpotlight: FunctionComponent<AppointmentSpotlightProps> = ({closestAppointment}) => {
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
  
 
export default AppointmentSpotlight;