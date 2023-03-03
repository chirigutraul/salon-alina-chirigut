import { Appointment } from '@prisma/client';
import React, { FunctionComponent } from 'react'
import {getAvailableHours} from 'utils/hooks/date/GetAvailableHoursFromDate'
import {Moment} from 'moment'

interface Props {
  appointments: Appointment[];
  selectedDate: Date;
  setHour(hour:string):void;
  selectedHour:string;
}

const AvailableHoursInDate: FunctionComponent<Props> = ({appointments, selectedDate, setHour, selectedHour}) => {
  const availableHours = getAvailableHours(appointments, selectedDate.toLocaleDateString(), 40);

  return (
    <div className={`
    flex flex-row flex-wrap justify-center gap-4
    `}>
      {
      availableHours.map((hour, index) => 
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