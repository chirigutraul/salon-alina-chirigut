import { Appointment } from '@prisma/client';
import React, { FunctionComponent } from 'react'
import {getAvailableHours} from 'utils/hooks/date/GetAvailableHoursFromDate'

interface Props {
  appointments: Appointment[];
  selectedDate: Date;
}

const AvailableHoursInDate: FunctionComponent<Props> = ({appointments, selectedDate}) => {
  const availableHours = getAvailableHours(appointments, selectedDate, 120);
  return (
    <div>
      {
      availableHours.map((hour, index) => 
        <div key={hour+index}>
          {hour}
        </div>
      )}
    </div>
  )
}

export default AvailableHoursInDate