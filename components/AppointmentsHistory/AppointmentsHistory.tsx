import {AppointmentCard} from 'components'
import React from 'react'
import { roboto } from 'utils/fonts'

const AppointmentsHistory = () => {
  return (
    <div className={`
    bg-primary px-10 flex flex-col gap-6 py-8
    `}>
      <p className={`
      ${roboto.className}
      font-light text-center 
      text-2xl
      sm:text-3xl
      `}>
        Istoricul programarilor tale:
      </p>
      
      <AppointmentCard/>
      <AppointmentCard/>
      <AppointmentCard/>
      <AppointmentCard/>
    </div>
  )
}

export default AppointmentsHistory