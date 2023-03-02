import { Appointment, Service } from '@prisma/client';
import moment, {Moment} from 'moment';

export function getAvailableHours(
  appointments:Appointment[],
  selectedDate:Date,
  duration:Number):string[]
  {
  const availableHours:string[] = [];
  
  const serviceDuration = 45;
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

    appointments.forEach(appointment => {
      const appointmentStart = new Date(appointment.date);
      const appointmentEnd = new Date(appointment.endDate);


      if(time >= appointmentStart && time < appointmentEnd || 
        endTime >= appointmentStart && endTime < appointmentEnd){
        availability = false;
      }
    })

    if(availability){
      availableHours.push(time.toLocaleDateString('ro-RO', {hour: '2-digit', minute: '2-digit'}))
    }
  }
  
  return availableHours
}