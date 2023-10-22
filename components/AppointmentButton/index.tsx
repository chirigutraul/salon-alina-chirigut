import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

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

  export default AppointmentButton
  