import React, {useEffect, useState} from 'react'
import { Session } from 'next-auth';
import { montserrat, roboto } from 'utils/fonts';
import Flatpickr from 'react-flatpickr';
import ReactModal from 'react-modal';
import "flatpickr/dist/themes/airbnb.css";
import {AvailableHoursInDate, Dropdown} from 'components';
import { Appointment, Service } from '@prisma/client';
import moment from 'moment';

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
  session? : Session | null;
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
      body: JSON.stringify({date: moment(date).format()})
    });
    const data = await response.json();
    setAppointments(data);
  }

  const fetchServices = async () => {
    const response = await fetch('/api/services');
    const data = await response.json();
    setServices(data);
  }

  useEffect(()=>{
    fetchAppointments()
    fetchServices();
  },[date])

  return (
    <ReactModal
    isOpen={isOpen}
    onRequestClose={toggleModal}
    className={`
      p-8
      w-[40rem] h-[40rem] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] 
    bg-primary rounded-md shadow-md outline-none
    `}
    overlayClassName={`h-screen w-screen absolute top-0 bg-[rgba(0,0,0,0.5)] border-0 backdrop-blur`}
    >
    <form className={`
       h-full w-full flex flex-col items-center gap-4
      `}>
        <h1 className={`
         ${montserrat.className}
        text-4xl font-light text-center 
        `}>
          Buna, {session?.user.name}
        </h1>
        <p className={`
          ${roboto.className}
          font-light text-center 
          text-2xl
        `}>
          Te rugam sa selectezi data si ora la care doresti sa faci programarea. {date && date.toString()}
        </p>
        <Flatpickr
        name="date"
        value={date}
        className={'w-30 h-10 rounded-sm shadow-md text-center text-xl'}
        placeholder="Selecteaza data"
        onChange={date => setDate(date[0])}
        options={{
          enableTime: false, 
          time_24hr: true,
          minDate:"today",
          disable: [
          function (date){
            return date.getDay() === 0
          },
          ],
          // onDayCreate: function(dObj, dStr, fp, dayElem){
            // console.log(dObj, dStr, fp, dayElem)
            // if (Math.random() < 0.5)
            //   dayElem.innerHTML += `<span style='position: absolute;  width: 3px; height: 3px; border-radius: 150px; bottom: 3px; left: calc(50% - 1.5px); content: " "; display: block; background: #3d8eb9;'></span>`;
            // else if (Math.random() > 0.5)
            //   dayElem.innerHTML += `<span style='position: absolute;  width: 3px; height: 3px; border-radius: 150px; bottom: 3px; left: calc(50% - 1.5px); content: " "; display: block; background: #f64747;'></span>`;
          // }
        }}
        />
        <Dropdown
          options={services}
          onSelect={setSelectedService}
        />
        { 
        !!date && 
        <AvailableHoursInDate
        appointments={appointments}
        selectedDate={date}
        setHour={setHour}
        selectedHour={hour}
        />
        }
        {
          !!services && JSON.stringify(services)
        }
        
      </form>
    </ReactModal>
  )
}

export default AppointmentModal