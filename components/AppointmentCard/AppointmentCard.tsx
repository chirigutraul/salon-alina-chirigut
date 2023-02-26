import React from 'react'
import {roboto, montserrat} from 'utils/fonts'

interface Props {
  
}

const AppointmentCard = () => {
  return (
    <div className={`
    border-2 border-accent border-solid rounded-md
    p-4
    `}>
      <p className={`
      ${roboto.className}
      font-medium text-lg
      sm:text-xl
      md:text-lg
      `}>
        Constructie gel
      </p>
      <p className={`
      ${montserrat.className}
      `}>
        Data: 25.12.2023
      </p>
      <div className={`
      flex flex-row justify-between
      md:flex-col
      `}>
        <p className={`
        ${montserrat.className}
        `}>
          Ora 15:00
        </p>
        <p className={`
        ${montserrat.className}
        font-bold
        `}>
          Aprobata
        </p>
      </div>
    </div>
  )
}

export default AppointmentCard