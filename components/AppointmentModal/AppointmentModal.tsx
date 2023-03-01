import React, {useState} from 'react'
import Modal from 'react-modal'
import { Session } from 'next-auth';
import { montserrat, roboto } from 'utils/fonts';
import Flatpickr from 'react-flatpickr';
import ReactModal from 'react-modal';
import "flatpickr/dist/themes/airbnb.css";
import AvailableHoursInDate from 'components/AvailableHoursInDate';

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
  session? : Session | null;
}



const AppointmentModal = ({ session, isOpen, toggleModal }: Props) => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <ReactModal
    isOpen={isOpen}
    onRequestClose={toggleModal}
    className={`
      p-8
      w-[40rem] h-[40rem] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] 
    bg-primary rounded-md shadow-md
    `}
    overlayClassName={`h-screen w-screen absolute top-0 bg-[rgba(0,0,0,0.5)] border-0 backdrop-blur`}
    >
    <form className={`
       h-full w-full flex flex-col items-center gap-4
      `}>
        <h1 className={`
         ${montserrat.className}
        text-4xl font-light text-center 
        `}>
          Buna, {session?.user.name}
        </h1>
        <p className={`
          ${roboto.className}
          font-light text-center 
          text-2xl
        `}>
          Te rugam sa selectezi data si ora la care doresti sa faci programarea. {date.toString()}
        </p>
        <Flatpickr
        name="date"
        value={date}
        className={'w-30 h-10 rounded-sm shadow-md text-center text-xl'}
        onChange={date => setDate(date[0])}
        options={{
          enableTime: false, 
          time_24hr: true,
          minDate:"today",
          disable: [
          function (date){
            return date.getDay() === 0
          },
          function(date){
            return date.getHours() === 12
          }
          ],
          onDayCreate: function(dObj, dStr, fp, dayElem){
            if (Math.random() < 0.5)
              dayElem.innerHTML += `<span style='position: absolute;  width: 3px; height: 3px; border-radius: 150px; bottom: 3px; left: calc(50% - 1.5px); content: " "; display: block; background: #3d8eb9;'></span>`;
            else if (Math.random() > 0.5)
              dayElem.innerHTML += `<span style='position: absolute;  width: 3px; height: 3px; border-radius: 150px; bottom: 3px; left: calc(50% - 1.5px); content: " "; display: block; background: #f64747;'></span>`;
          }
        }}
        />
        { !!date && 
        <AvailableHoursInDate
        date={date}
        />
        }
      </form>
    </ReactModal>
  )
}

export default AppointmentModal