import { Appointment, Service } from '@prisma/client';

export function getAvailableHours(dates:Appointment[], selectedDate:Date, duration:Number):string[]{
  const parsedSelectedDate = new Date(selectedDate);
  parsedSelectedDate.setUTCDate(parsedSelectedDate.getDate());
  // parsedSelectedDate.setUTCDate(parsedSelectedDate.getDate() + 1);
  parsedSelectedDate.setUTCHours(9)
  const serviceDuration = 120;
  const minutesStep = 30;
  dates.forEach(date => {
    
  })
  return [parsedSelectedDate.toISOString(),'2']
}