import { faCalendarPlus } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { montserrat, roboto } from 'utils/fonts'

const AppointmentSpotlight = () => {
  return (
    <div className={`
    bg-primary px-10 py-8
    md:col-span-2 md:row-span-2
    `}>
      <p className={`
      ${roboto.className}
      text-center mb-8
      font-medium text-2xl 
      xs:text-3xl
      sm:text-3xl
      `}>
        Increderea incepe cu unghii bine ingrijite!
      </p>

      <div className={`
      lg:flex lg:flex-row lg:justify-between
      `}>
        <div className={`
        border-2 border-accent border-solid rounded-md
        flex flex-col items-center group cursor-pointer mb-8
        hover:bg-accent 
        h-[16rem] w-[100%]
        sm:h-[18rem] md:gap-4 md:py-2
        lg:w-[50%]
        `}>
        
          <h1 className={`
          ${montserrat.className}
          font-bold text-2xl mt-4 text-accent
          group-hover:text-primary
          sm:text-3xl
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
        sm:h-[18rem] sm:p-8
        lg:w-[50%] lg:p-4
        `}>
          <div>
            <h1 className={`
            ${montserrat.className} font-medium text-accent 
            text-2xl
            sm:text-3xl
            lg:text-2xl
            `}>
              Te asteptam!
            </h1>
            <h1 className={`
            ${montserrat.className} font-medium text-accent
            text-xl
            sm:text-2xl
            lg:text-xl
            `}>
              Urmatoarea ta programare:
            </h1>
          </div>
          <h1 className={`
          ${roboto.className} font-bold text-accent
          text-2xl
          sm:text-3xl
          lg:text-2xl
          `}>
            Intretinere
          </h1>
          <div>
            <p className={`
            ${montserrat.className} font-light 
            text-md
            sm:text-lg
            `}>
              Data: 25.12.2023
            </p>
          </div>
          <div className={`
          flex flex-row justify-between
          `}>
            <p className={`
            ${montserrat.className} font-light text-md
            sm:text-lg

            `}>
              Ora: 12:00
            </p>
            <p className={`
            ${montserrat.className} font-light text-md
            sm:text-lg
            `}>
              Cost: 80RON
            </p>
          </div>
          <div className={`
            flex flex-row justify-end
          `}>
            <p  className={`
            ${montserrat.className} font-light text-md
            sm:text-lg

            `}>
            Status: aprobata
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AppointmentSpotlight