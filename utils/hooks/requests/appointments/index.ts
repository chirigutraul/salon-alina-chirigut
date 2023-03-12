import { Appointment, Service } from "@prisma/client"
import moment from "moment";

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

export async function getUserAppointments(userId: string): Promise<Appointment[]>{
  const user = await fetch(`/api/clients/${userId}`);
  const userJson = await user.json();
  return userJson.appointments;
}
