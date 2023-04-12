import React, { useEffect, useRef, useState } from "react";
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
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service>();
  const [response, setResponse] = useState<{
    status: number;
    message: string;
  }>();
  const fp = useRef<any>(null);

  const { width } = useWindowSize();
  const isScreenAboveMedium = width && width >= breakpoints.md;

  const fetchAppointments = async (date: Date) => {
    const appointments = await getAppointmentsFromCertainDate(date);
    setAppointments(appointments);
  };

  const fetchAndSetServices = async () => {
    const services = await getServices();
    setServices(services);
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
    });

    console.log("response", response);
  };

  useEffect(() => {
    if (date) fetchAppointments(date);
    fetchAndSetServices();
  }, [date]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className={`
      py-8 px-4 ${roboto.className} 
      w-full h-screen max-h-screen overflow-scroll overflow-x-hidden absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] 
      bg-primary shadow-md outline-none max-w-[32rem]
      sm:px-8
      md:h-[90vh] md:rounded-md
      lg:h-[75vh] lg:max-w-[40rem] 
    `}
      overlayClassName={`h-screen w-screen absolute top-0 bg-[rgba(0,0,0,0.5)] border-0 backdrop-blur`}
    >
      <form
        className={`
       h-full w-full flex flex-col items-center justify-between text-accent
      `}
      >
        <div
          className={`h-full w-full flex flex-col gap-8
        lg:items-center
        `}
        >
          <div className={`flex flex-row justify-between w-full items-center`}>
            <h1
              className={`
              text-4xl font-medium 
              md:text-3xl md:text-center
              `}
            >
              Buna, {session?.user.name}!
            </h1>
            <div onClick={toggleModal} className={"cursor-pointer"}>
              {!!true && (
                <FontAwesomeIcon
                  icon={faClose}
                  className={`text-accent group-hover:text-primary 
              text-4xl
              `}
                />
              )}
            </div>
          </div>
          <p
            className={`
          font-light text-left 
          text-xl
          sm:text-2xl
          lg:text-center
        `}
          >
            Pentru a realiza o programare, te rugam sa completezi formularul de
            mai jos.
          </p>
          <div
            className={`flex flex-col gap-2 w-full
          lg:items-center 
          `}
          >
            <label
              className={`
          text-xl
          font-light my-0
          lg:text-xl lg:w-96
          `}
            >
              Selecteaza data :
            </label>
            <div
              className={`w-full flex flex-row bg-white items-center px-4 rounded-sm overflow-hidden shadow-md relative
              lg:w-96 
              `}
              onClick={() => {
                if (!fp?.current?.flatpickr.isOpen)
                  fp.current.flatpickr.close();
                fp.current.flatpickr.open();
              }}
            >
              <Flatpickr
                ref={fp}
                name="date"
                value={date}
                className={`
                font-light
                w-full py-2 text-left text-xl focus:border-0 focus:outline-none
                sm:text-xl
                lg:text-lg lg:py-1
                `}
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
                className={`text-accent text-3xl cursor-pointer
                lg:text-2xl 
                `}
              />
            </div>
          </div>

          <div
            className={`flex flex-col gap-2 w-full text-xl
          lg:w-96
          `}
          >
            <label
              className={`
          text-xl font-light
          lg:text-xl
          `}
            >
              Selecteaza serviciul dorit :
            </label>
            <ServicesDropdown
              options={services}
              onSelect={setSelectedService}
            />
          </div>
          {date && selectedService && (
            <div
              className={`w-full flex flex-col gap-2
            lg:w-96
            `}
            >
              <label
                className={`
              text-xl font-light
              sm:text-2xl
              lg:text-xl
              `}
              >
                Selecteaza una din orele disponibile :
              </label>
              <AvailableHoursDropdown
                appointments={appointments}
                selectedDate={date}
                selectedServiceDuration={selectedService?.duration}
                onSelect={setHour}
              />
            </div>
          )}
        </div>
        {response && (
          <RequestFeedback
            message={response.message}
            status={response.status}
          />
        )}
        <div className={"my-8"}>
          <Button
            title={
              response && response.status === 200 ? "Inchide" : "Programeaza!"
            }
            onClick={
              response && response.status === 200
                ? toggleModal
                : handleAppointmentCreation
            }
            size={isScreenAboveMedium ? "xl" : "lg"}
            disabled={!(date && hour && selectedService)}
          />
        </div>
      </form>
    </ReactModal>
  );
};

export default AppointmentModal;
