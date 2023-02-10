import React,{ useState } from 'react'
import { useSession } from "next-auth/react"
import AvailableHours from './AvailableHours';
import "flatpickr/dist/themes/airbnb.css";
import Flatpickr from "react-flatpickr";
import Link from 'next/link';

function AppointmentForm() {
  const {data : session}  = useSession();
  const [date, setDate] = useState<Date>();

  if(!session) return null;

  return (
    <div className="bg-light-pink mt-2 mb-2 p-8"> 
    <div className='flex flex-col pt-2'>
      <div className='flex justify-center'>
      <p className='text-2xl'>Buna, {session.user.name} !</p>
      </div>
      <div className='flex justify-center'>
        <p>Te rugam sa completezi urmatorul formular pentru a realiza o programare</p>
      </div>
    </div>
    <form className='grid'>
      <label>Numar de telefon:</label>
      <input type="text" name="phone"/>
      <label>Data : </label>
      Tre sa dau disable la orele la care sunt facute programari deja
      Disable merge da trebe sa ii arate ca nu ii okay ora {JSON.stringify(date)}

      <Flatpickr
        data-enable-time
        value={date}
        onChange={date => setDate(date[0])}
        options={{
          enableTime: false, 
          time_24hr: true,
          minDate:"today",
          minTime:"9:00",
          maxTime:"18:00",
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
      { date &&  <AvailableHours date={date}/> }
    </form>
    <Link
    href="/api/auth/signout">
      sign out
    </Link>
  </div>
  )
}

export default AppointmentForm
