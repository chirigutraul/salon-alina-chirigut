import { Appointment } from '@prisma/client';
import React, { FunctionComponent } from 'react'
import {getAvailableHours} from 'utils/hooks/date/GetAvailableHoursFromDate'
import {Moment} from 'moment'

interface Props {
  appointments: Appointment[];
  selectedDate: Date;
}

const AvailableHoursInDate: FunctionComponent<Props> = ({appointments, selectedDate}) => {
  const availableHours = getAvailableHours(appointments, selectedDate.toLocaleDateString(), 40);

  return (
    <div>
      {
      availableHours.map((hour, index) => 
        <div key={index}>
          {JSON.stringify(hour)}
        </div>
      )}
    </div>
  )
}

export default AvailableHoursInDate