import { faCalendarPlus } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { montserrat, roboto } from 'utils/fonts'

const AppointmentSpotlight = () => {
  return (
    <div className={`
    bg-primary px-10 py-8
    `}>
      <p className={`
      ${roboto.className}
      font-light text-2xl text-center mb-8
      `}>
        Increderea incepe cu unghii bine ingrijite!
      </p>

      <div className={`
      border-2 border-accent border-solid rounded-md
      flex flex-col items-center group cursor-pointer mb-8
      hover:bg-accent 
      h-[16rem] w-[100%]
      `}>
       
        <h1 className={`
        ${montserrat.className}
        font-bold text-2xl mt-4 text-accent
        group-hover:text-primary
        `}>
          Rezerva Acum!
        </h1>
        <div className={`
        mt-4
        `}>
        <FontAwesomeIcon 
        icon={faCalendarPlus}
        className={`text-accent group-hover:text-primary`}
        size="10x"
        />
        </div>
      </div>
   
      <div className={`
      border-2 border-accent border-solid rounded-md
      flex flex-col group p-4 gap-2
      h-[16rem] w-[100%]
      `}>
        <div>
          <h1 className={`
          ${montserrat.className} font-medium text-2xl text-accent
          `}>
            Te asteptam!
          </h1>
          <h1 className={`
          ${montserrat.className} font-medium text-2xl text-accent
          `}>
            Urmatoarea ta programare:
          </h1>
        </div>
        <h1 className={`
        ${roboto.className} font-bold text-2xl text-accent
        `}>
          Intretinere
        </h1>
        <div>
          <p className={`
          ${montserrat.className} font-light text-md
          `}>
            Data: 25.12.2023
          </p>
        </div>
        <div className={`
        flex flex-row justify-between
        `}>
          <p className={`
          ${montserrat.className} font-light text-md
          `}>
            Ora: 12:00
          </p>
          <p className={`
          ${montserrat.className} font-light text-md
          `}>
            Cost: 80RON
          </p>
        </div>
        <div className={`
          flex flex-row justify-end
        `}>
          <p  className={`
          ${montserrat.className} font-light text-md
          `}>
          Status: aprobata
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default AppointmentSpotlight