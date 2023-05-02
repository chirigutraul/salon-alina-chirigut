import React, { useEffect, useMemo, useRef, useState } from "react";
import { Session } from "next-auth";
import Flatpickr from "react-flatpickr";
import ReactModal from "react-modal";
import "flatpickr/dist/themes/airbnb.css";
import ServicesDropdown from "components/ServicesDropdown";
import AvailableHoursDropdown from "components/AvailableHoursDropdown";
import { Appointment, Service } from "@prisma/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {
  createAppointment,
  getAppointmentsFromCertainDate,
} from "utils/hooks/requests/appointments";
import { useMinutesToString } from "utils/hooks/date/format-hour";

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
  session: Session;
}

const AppointmentModal = ({ session, isOpen, toggleModal }: Props) => {
  const [date, setDate] = useState<Date>();
  const [hour, setHour] = useState<string>("");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedService, setSelectedService] = useState<Service>();
  const [response, setResponse] = useState<{
    status: number;
    message: string;
  }>();
  const fp = useRef<any>(null);
  const serviceDuration = useMinutesToString(selectedService);

  const canUserMakeAppointment = useMemo(() => {
    return date && hour && selectedService;
  }, [date, hour, selectedService]);

  const fetchAppointments = async (date: Date) => {
    const appointments = await getAppointmentsFromCertainDate(date);
    setAppointments(appointments);
  };

  const handleAppointmentCreation = async () => {
    if (!date || !hour || !selectedService) return;

    await createAppointment(session.user.id, date, hour, selectedService).then(
      async (res) => {
        const parsedResponse = await res.json();
        setResponse(parsedResponse);
        toggleModal();
      }
    );
  };

  useEffect(() => {
    if (date) fetchAppointments(date);
  }, [date]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className={`h-screen w-screen bg-black`}
    ></ReactModal>
  );
};

export default AppointmentModal;

{
  /* <Flatpickr
  ref={fp}
  name="date"
  value={date}
  className={`
    min-w-[90%]
    xs:min-w-8
    flex-grow xs:text-2xl focus:outline-none font-light text-gray-400`}
  placeholder="Data"
  onChange={(date) => setDate(date[0])}
  options={{
    enableTime: false,
    time_24hr: true,
    minDate: "today",
    disable: [
      function (date) {
        return date.getDay() === 0;
      },
    ],
  }}
/> */
}
