import { Appointment } from '@prisma/client';
import React, { FunctionComponent } from 'react'

interface Props {
  appointments: Appointment[];
}

const AvailableHoursInDate: FunctionComponent<Props> = ({appointments}) => {
  return (
    <div>
      {appointments.map(appointment => (
        <div key={appointment.id}>
          {appointment.id}
        </div>
      ))}
    </div>
  )
}

export default AvailableHoursInDate