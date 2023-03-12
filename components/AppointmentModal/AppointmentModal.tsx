import React, { useEffect, useState } from "react";
import { Session } from "next-auth";
import { montserrat, roboto } from "utils/fonts";
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
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { createAppointment } from "utils/hooks/requests/appointments";
import breakpoints from "utils/TailwindBreakPoints";
import useWindowSize from "utils/hooks/BreakPointsHooks";

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

  const { width } = useWindowSize();
  const isScreenAboveMedium = width && width >= breakpoints.md;
  const isScreenAboveLarge = width && width >= breakpoints.lg;

  const fetchAppointments = async () => {
    const response = await fetch(
      "/api/appointments/get-appointments-from-date",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: moment(date).format() }),
      }
    );
    const data = await response.json();
    setAppointments(data);
  };

  const fetchServices = async () => {
    const response = await fetch("/api/services");
    const data = await response.json();
    setServices(data);
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
    // toggleModal();
  };

  useEffect(() => {
    fetchAppointments();
    fetchServices();
  }, [date]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className={`
      py-8 px-4
      w-full h-screen overflow-hidden absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] 
      bg-primary rounded-md shadow-md outline-none max-w-[32rem]
      sm:px-8
      md:h-[90vh]
      lg:h-[80vh]
    `}
      overlayClassName={`h-screen w-screen absolute top-0 bg-[rgba(0,0,0,0.5)] border-0 backdrop-blur`}
    >
      <form
        className={`
       h-full w-full flex flex-col items-center justify-between
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
              ${montserrat.className}
              text-3xl font-light 
              sm:text-4xl
              md:text-3xl md:text-center
              `}
            >
              Buna, {session?.user.name}
            </h1>
            <div onClick={toggleModal}>
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
          ${roboto.className}
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
          text-xl ${roboto.className}
          font-light my-0
          sm:text-2xl
          lg:text-xl
          `}
            >
              Selecteaza data :
            </label>
            <div
              className={`w-full flex flex-row bg-white items-center px-4 rounded-sm overflow-hidden shadow-md
              lg:w-96
              `}
            >
              <Flatpickr
                name="date"
                value={date}
                className={`
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
                className={`text-accent group-hover:text-primary text-3xl
                lg:text-2xl
                `}
              />
            </div>
          </div>

          <div
            className={`flex flex-col gap-2 w-full
          lg:w-96
          `}
          >
            <label
              className={`
          text-xl ${roboto.className}
          font-light
          sm:text-2xl
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
              text-xl ${roboto.className}
              font-light
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
          {response && (
            <RequestFeedback
              message={response.message}
              status={response.status}
            />
          )}
        </div>
        {
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
          />
        }
      </form>
    </ReactModal>
  );
};

export default AppointmentModal;
