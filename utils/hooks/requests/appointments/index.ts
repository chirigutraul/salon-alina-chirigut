import { Appointment, Service } from "@prisma/client"

export function createAppointment(clientId:string, date:Date, time:String, service:Service): string | Appointment | undefined {
  // calculate date
  // calculate enddate
  // status pending by default
  // rejetionDetails null by default
  // clientId userId
  //service id
  if(!service || !service.duration) return 'Service and service duration is required';

  const parsedDate = new Date(date);
  parsedDate.setDate(parsedDate.getDate()+1);
  console.log("clientId:", clientId)
  console.log("time:", time)
  console.log("service:", service)
  console.log("date:", date.toISOString())

  const dateAndTime = parsedDate.toISOString().split('T')[0]+'T'+time+':00.000Z'
  const endTime = new Date(dateAndTime);
  
  const hoursAdded = parseInt(service.duration)/60;
  const minutesAdded = parseInt(service.duration)%60;

  endTime.setHours(endTime.getHours() + hoursAdded);
  endTime.setMinutes(endTime.getMinutes() +minutesAdded);

  console.log('hoursAdded', hoursAdded)
  console.log('minutesAdded', minutesAdded)
  console.log('dateAndTime', dateAndTime)
  console.log('endTime', endTime.toISOString())

  const groupedData = {
    data:{
      date: dateAndTime,
      endDate:endTime.toISOString(),
      status:'pending',
      serviceId:service.id,
      clientId:clientId,
    }
  } 

  fetch('/api/appointments/create', {
    method:'post',
    body: JSON.stringify(groupedData),
    headers: {
      'Content-Type': 'application/json'
    },
  })
}
