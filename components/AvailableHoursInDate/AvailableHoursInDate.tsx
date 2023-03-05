import { Appointment } from '@prisma/client';
import React, { FunctionComponent } from 'react'
import {getAvailableHours} from 'utils/hooks/date/GetAvailableHoursFromDate'

interface Props {
  appointments: Appointment[];
  selectedDate: Date;
  setHour(hour:string):void;
  selectedHour:string;
  selectedServiceDuration:string | null;
}

const AvailableHoursInDate: FunctionComponent<Props> = ({appointments, selectedDate, setHour, selectedHour, selectedServiceDuration}) => {

  if(!selectedDate || !selectedServiceDuration) return null;

  const availableHours = getAvailableHours(appointments, selectedDate.toLocaleDateString(), parseInt(selectedServiceDuration));

  return (
    <div 
    className={`  
    flex flex-row flex-wrap justify-center gap-4 transition-all duration-300
    `}>
      {
      availableHours && availableHours.map((hour, index) => 
        <div key={index+hour}
        onClick={()=>setHour(hour)}
        className={`
        border-2 py-2 px-4 rounded-md cursor-pointer border-accent
        transition-all duration-300
        hover:bg-accent hover:text-white
        ${selectedHour === hour && 'bg-accent text-white'}
        `}>
          {hour} 
        </div>
      )}
    </div>
  )
}

export default AvailableHoursInDate