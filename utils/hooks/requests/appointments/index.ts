import { Appointment, Service } from "@prisma/client"
import moment from "moment";
import App from "next/app";

export async function createAppointment(clientId: string, date: Date, time: String, service: Service): Promise<Response> {
  if (!service || !service.duration) {
    throw new Error('Service is not valid')
  }

  const parsedDate = new Date(date);
  parsedDate.setDate(parsedDate.getDate() + 1);

  const dateAndTime = parsedDate.toISOString().split('T')[0] + 'T' + time + ':00.000Z'
  const endTime = new Date(dateAndTime);

  const hoursAdded = parseInt(service.duration) / 60;
  const minutesAdded = parseInt(service.duration) % 60;

  endTime.setHours(endTime.getHours() + hoursAdded);
  endTime.setMinutes(endTime.getMinutes() + minutesAdded);

  const groupedData = {
    data: {
      date: dateAndTime,
      endDate: endTime.toISOString(),
      status: 'pending',
      serviceId: service.id,
      clientId: clientId,
    }
  }

  const createdAppointment = await fetch('/api/appointments/create', {
    method: 'post',
    body: JSON.stringify(groupedData),
    headers: {
      'Content-Type': 'application/json'
    },
  })

  return createdAppointment;
}

export async function getAppointmentsFromCertainDate(date:Date): Promise<Appointment[]>{
  const response = await fetch(
    "/api/appointments/get-appointments-from-date",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: moment(date).format() }),
    }
  );

  const parsedResponse = await response.json();
  return parsedResponse;
}

interface userProfileAppointments {
  appointments: Appointment[];
  closestAppointment: Appointment | boolean;
}

export async function getUserAppointments(userId: string): Promise<userProfileAppointments>{
  const user = await fetch(`/api/clients/${userId}`);
  const userJson = await user.json();

  const sortedAppointments:Appointment[] = userJson.appointments.sort((a: Appointment, b: Appointment) => {
   return new Date(a.date).getTime() -  new Date(b.date).getTime()
  })

  const dateToday = new Date();

  let closestAppointment:Appointment | boolean = false;

  for(const appointment of sortedAppointments){
    if(new Date(appointment.date).getTime() > dateToday.getTime()){
      closestAppointment = appointment;
      break;
    } else closestAppointment = false;
  }

  const appointmentsAndSpotlight: userProfileAppointments = {
    appointments: sortedAppointments,
    closestAppointment: closestAppointment
  }

  return appointmentsAndSpotlight;
}
