import React, { useEffect, useState } from 'react'
import { Session } from 'next-auth';
import { montserrat, roboto } from 'utils/fonts';
import Flatpickr from 'react-flatpickr';
import ReactModal from 'react-modal';
import "flatpickr/dist/themes/airbnb.css";
import { AvailableHoursInDate, ServicesDropdown, Button, AvailableHoursDropdown } from 'components';
import { Appointment, Service } from '@prisma/client';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { createAppointment } from 'utils/hooks/requests/appointments';

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
  session: Session;
}

const AppointmentModal = ({ session, isOpen, toggleModal }: Props) => {
  const [date, setDate] = useState<Date>();
  const [hour, setHour] = useState<string>('');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service>();

  const fetchAppointments = async () => {
    const response = await fetch('/api/appointments/get-appointments-from-date', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date: moment(date).format() })
    });
    const data = await response.json();
    setAppointments(data);
  }

  const fetchServices = async () => {
    const response = await fetch('/api/services');
    const data = await response.json();
    setServices(data);
  }

  const handleAppointmentCreation = () => {
    if (!date || !hour || !selectedService) return;

    createAppointment(session.user.id, date, hour, selectedService);
    toggleModal();
  }

  useEffect(() => {
    fetchAppointments()
    fetchServices();
  }, [date])

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className={`
      py-8 px-4
      w-full h-screen overflow-scroll absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] 
    bg-primary rounded-md shadow-md outline-none
    `}
      overlayClassName={`h-screen w-screen absolute top-0 bg-[rgba(0,0,0,0.5)] border-0 backdrop-blur`}
    >
      <form className={`
       h-full w-full flex flex-col items-center justify-between
      `}>
        <div className={'h-full w-full flex flex-col items-center gap-8'}>
          <div className={`
        flex flex-row justify-between w-full items-center
        `}>
            <h1 className={`
         ${montserrat.className}
        text-3xl font-light 
        `}>
              Buna, {session?.user.name}
            </h1>
            <div
              onClick={toggleModal}
            >
              <FontAwesomeIcon
                icon={faXmarkCircle}
                className={`text-accent group-hover:text-primary`}
                size="2xl"
              />
            </div>
          </div>
          <p className={`
          ${roboto.className}
          font-light text-center 
          text-xl
        `}>
            Pentru a realiza o programare, te rugam sa completezi formularul de mai jos.
          </p>
          <div className={'flex flex-col gap-2 w-full'}>
            <label className={`
          text-xl ${roboto.className}
          font-light my-0
          `}>
              Selecteaza data :
            </label>
            <div
              className={'w-full flex flex-row bg-white items-center px-4 rounded-sm overflow-hidden shadow-md'}>
              <Flatpickr
                name="date"
                value={date}
                className={'w-full h-10 text-left text-xl focus:border-0 focus:outline-none'}
                placeholder="Data"
                onChange={date => setDate(date[0])}
                options={{
                  enableTime: false,
                  time_24hr: true,
                  minDate: "today",
                  disable: [
                    function (date) {
                      return date.getDay() === 0
                    },
                  ]
                }}
              />
              <FontAwesomeIcon
                icon={faCalendarPlus}
                className={`text-accent group-hover:text-primary`}
                size="xl"
              />
            </div>
          </div>

          <div className={'flex flex-col gap-2 w-full'}>
            <label className={`
          text-xl ${roboto.className}
          font-light
          `}>
              Selecteaza serviciul dorit :
            </label>
            <ServicesDropdown
              options={services}
              onSelect={setSelectedService}
            />
          </div>
          {
            date && selectedService &&
            <div className={'w-full flex flex-col gap-2'}>
              <label className={`
          text-xl ${roboto.className}
          font-light
          `}>
                Selecteaza una din orele disponibile :
              </label>
              <AvailableHoursDropdown
                appointments={appointments}
                selectedDate={date}
                selectedServiceDuration={selectedService?.duration}
                onSelect={setHour}
              />
            </div>
          }
        </div>
        {
          date && selectedService && hour &&
          <Button
            title="Programeaza!"
            onClick={handleAppointmentCreation}
          />
        }
      </form>
    </ReactModal>
  )
}

export default AppointmentModal