import CustomModal from 'components/CustomModal'
import React, { FunctionComponent } from 'react'
import { montserrat } from 'utils/fonts';

interface Props { 
  isOpen: boolean;
  onRequestClose():void;
}

const AppointmentModal:FunctionComponent<Props> = ({
  isOpen,
  onRequestClose,
}) => {
  return (
    <CustomModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={`
      bg-red-200 p-8
    `}
    >
      <div>
        <h1 className={`
        ${montserrat.className} font-bold text-accent
        text-2xl
        `}>
          Rezerva acum!
        </h1>

        <div>
          <p>
            Serviciu:
          </p>
          <p>
            Data:
          </p>
        </div>
      </div>
    </CustomModal>
  )
}

export default AppointmentModal