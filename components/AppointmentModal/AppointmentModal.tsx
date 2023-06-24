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
import {
  faArrowRight,
  faClose,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Label from "components/Label";
import {
  createAppointment,
  getAppointmentsFromCertainDate,
} from "utils/hooks/requests/appointments";
import { minutesToString } from "utils/helpers/format-hour";
import DatePicker from "components/DatePicker";
import { toast } from "react-toastify";
import { RequestResponse } from "types/ResponseTypes";

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
  session: Session;
}

const AppointmentModal = ({ session, isOpen, toggleModal }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [hour, setHour] = useState<string>("");
  const [appointmentsFromSelectedDate, setAppointmentsFromSelectedDate] =
    useState<Appointment[]>([]);
  const [selectedService, setSelectedService] = useState<Service>();
  const fp = useRef<any>(null);

  const canUserMakeAppointment = useMemo(() => {
    return selectedDate && hour && selectedService;
  }, [selectedDate, hour, selectedService]);

  const fetchAppointments = async (date: Date) => {
    const retrievedAppointments = await getAppointmentsFromCertainDate(date);
    setAppointmentsFromSelectedDate(retrievedAppointments);
  };

  const resetAppointmentForm = () => {
    setSelectedDate(undefined);
    setHour("");
    setSelectedService(undefined);
  };

  const handleAppointmentCreation = async () => {
    if (!selectedDate || !hour || !selectedService) return;

    await createAppointment(
      session.user.id,
      selectedDate,
      hour,
      selectedService
    ).then(async (res: RequestResponse) => {
      toast[res.status](res.message);
      toggleModal();
      resetAppointmentForm();
    });
  };

  const showErrorMessage = () => {
    toast.error("Toate campurile sunt obligatiorii!");
  };

  useEffect(() => {
    if (selectedDate) {
      fetchAppointments(selectedDate);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className={`bg-white-80 absolute p-8 h-full w-full
      md:max-w-[32rem] md:max-h-[40rem] md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2
      md:rounded-md md:overflow-hidden
      `}
      overlayClassName={`h-full w-full bg-black bg-opacity-50 fixed z-10 top-0 backdrop-blur-sm`}
    >
      <div className={`relative h-full`}>
        <div className={`flex justify-between items-center`}>
          <h5>Programare</h5>
          <div className={`p-2 cursor-pointer`} onClick={toggleModal}>
            <h4>
              <FontAwesomeIcon icon={faXmark} />
            </h4>
          </div>
        </div>
        <h6>
          Pentru a realiza o programare, te rugam sa completezi formularul:
        </h6>
        <div className={`flex flex-col gap-4 sp-t`}>
          <ServicesDropdown onSelect={setSelectedService} />
          <DatePicker
            ref={fp}
            setDate={setSelectedDate}
            selectedDate={selectedDate}
          />
          <AvailableHoursDropdown
            onSelect={(selectedHour) => setHour(selectedHour)}
            appointments={appointmentsFromSelectedDate}
            selectedDate={selectedDate}
            selectedServiceDuration={selectedService?.duration}
          />
        </div>
        <div className={`w-full flex justify-center absolute bottom-0`}>
          <button
            className={`btn-icon btn-border-dark sp-2t`}
            onClick={
              canUserMakeAppointment
                ? handleAppointmentCreation
                : showErrorMessage
            }
          >
            <h6 className={`font-bold`}>Programeaza</h6>
            <h5>
              <FontAwesomeIcon icon={faArrowRight} />
            </h5>
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default AppointmentModal;
