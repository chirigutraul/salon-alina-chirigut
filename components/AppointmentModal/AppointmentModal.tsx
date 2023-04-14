import React, { useEffect, useMemo, useRef, useState } from "react";
import { Session } from "next-auth";
import { roboto } from "utils/fonts";
import Flatpickr from "react-flatpickr";
import ReactModal from "react-modal";
import "flatpickr/dist/themes/airbnb.css";
import {
  ServicesDropdown,
  Button,
  AvailableHoursDropdown,
  RequestFeedback,
} from "components";
import { Appointment, Service } from "@prisma/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {
  createAppointment,
  getAppointmentsFromCertainDate,
} from "utils/hooks/requests/appointments";
import breakpoints from "utils/TailwindBreakPoints";
import useWindowSize from "utils/hooks/BreakPointsHooks";
import { getServices } from "utils/hooks/requests/services";

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

  const { width } = useWindowSize();

  const canUserMakeAppointment = useMemo(() => {
    return date && hour && selectedService;
  }, [date, hour, selectedService]);

  const fetchAppointments = async (date: Date) => {
    const appointments = await getAppointmentsFromCertainDate(date);
    setAppointments(appointments);
  };

  const handleAppointmentCreation = async () => {
    if (!date || !hour || !selectedService) return;

    const response = await createAppointment(
      session.user.id,
      date,
      hour,
      selectedService
    ).then(async (res) => {
      const parsedResponse = await res.json();
      setResponse(parsedResponse);
      toggleModal();
    });
  };

  useEffect(() => {
    if (date) fetchAppointments(date);
  }, [date]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className={` bg-primary
      absolute top-0 left-0 bottom-0 right-0 text-accent min-h-[530px] min-w-[170px]
      `}
      overlayClassName={`h-screen w-screen absolute top-0 bg-[rgba(0,0,0,0.5)] border-0 backdrop-blur`}
    >
      <div className={"flex flex-col justify-between h-full w-full p-4"}>
        <form className={"flex flex-col gap-4"}>
          <div
            className={`flex items-center justify-between ${roboto.className} xs:text-3xl`}
          >
            <p>Buna, {session.user.name}!</p>
            <FontAwesomeIcon
              onClick={toggleModal}
              icon={faClose}
              className={`
              cursor-pointer
              xs:text-4xl
              `}
            />
          </div>

          <h3 className={"xs:text-2xl"}>
            Pentru a face o programare, te rugam sa completezi formularul de mai
            jos:
          </h3>

          <div>
            <label>
              <p className={"xs:text-2xl"}>Selecteaza data:</p>
            </label>
            <div
              onClick={() => fp.current.flatpickr.open()}
              className={`flex bg-white px-4 h-12 items-center mt-2 rounded-md border-[1px] border-accent`}
            >
              <Flatpickr
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
              />
              <FontAwesomeIcon
                icon={faCalendarPlus}
                className={`
                  text-xl
                  xs:text-3xl
                  `}
              />
            </div>
          </div>
          <div>
            <label>
              <p className={"xs:text-2xl"}>Selecteaza serviciul:</p>
            </label>
            <div className={"mt-2"}>
              <ServicesDropdown onSelect={setSelectedService} />
            </div>
          </div>
          {date && selectedService && (
            <div>
              <label>
                <p className={"xs:text-2xl"}>
                  Selecteaza una din orele disponibile:
                </p>
              </label>
              <div className={"mt-2"}>
                <AvailableHoursDropdown
                  selectedDate={date}
                  appointments={appointments}
                  onSelect={setHour}
                  selectedServiceDuration={selectedService?.duration}
                />
              </div>
            </div>
          )}
        </form>
        <div className={"mt-4"}>
          <button
            className={` ${
              roboto.className
            } w-full text-white bg-accent py-2 rounded-md
            xs:text-2xl font-medium
            ${!canUserMakeAppointment && "bg-gray-400"}
            `}
            disabled={!canUserMakeAppointment}
            onClick={handleAppointmentCreation}
          >
            Programeaza
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default AppointmentModal;
