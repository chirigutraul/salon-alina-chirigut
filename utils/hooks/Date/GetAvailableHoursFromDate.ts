import { Appointment, Service } from '@prisma/client';
import moment, {Moment} from 'moment';

export function getAvailableHours(
  appointments:Appointment[],
  selectedDate:string,
  serviceDuration:number):string[]
  {
  const availableHours:string[] = [];
  
  const minutesStep = 30;

  const parsedSelectedDate = new Date(selectedDate);

  const startOfDay = new Date( 
  parsedSelectedDate.getFullYear(),
  parsedSelectedDate.getMonth(),
  parsedSelectedDate.getDate(),
  9, 0, 0);

  const endOfDay = new Date(
  parsedSelectedDate.getFullYear(),
  parsedSelectedDate.getMonth(),
  parsedSelectedDate.getDate(),
  21, 0, 0);

  for(let time = startOfDay; time <= endOfDay; time.setMinutes(time.getMinutes() + minutesStep)){
    var availability = true;

    const endTime = new Date(time);
    endTime.setMinutes(endTime.getMinutes() + serviceDuration);

    if(endTime >= endOfDay){
      availability = false;
    }

    appointments.forEach(appointment => {
      const appointmentStart = new Date(appointment.date);
      appointmentStart.setHours(appointmentStart.getHours() - 2);
      const appointmentEnd = new Date(appointment.endDate);
      appointmentEnd.setHours(appointmentEnd.getHours() - 2);

      console.log('time', time)
      console.log('endtime', endTime)

      if(
        time >= appointmentStart && time < appointmentEnd || 
        (endTime > appointmentStart && endTime < appointmentEnd)
        ){
        availability = false;
      }
    })

    if(availability){
      availableHours.push(time.toLocaleTimeString('ro-RO', {hour: '2-digit', minute: '2-digit'}))
    }
  }
  
  return availableHours
}