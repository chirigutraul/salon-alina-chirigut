import React from 'react'
import {roboto, montserrat} from 'utils/fonts'

interface Props {
  
}

const AppointmentCard = () => {
  return (
    <div className={`
    border-2 border-dark-purple border-solid rounded-md
    p-4
    `}>
      <p className={`
      ${roboto.className}
      font-bold text-lg
      `}>
        Constructie gel
      </p>
      <p className={`
      `}>
        Data: 25.12.2023
      </p>
      <div className={`
      flex flex-row justify-between
      `}>
        <p className={`
        `}>
          Ora 15:00
        </p>
        <p className={`
        `}>
          Aprobata
        </p>
      </div>
    </div>
  )
}

export default AppointmentCard