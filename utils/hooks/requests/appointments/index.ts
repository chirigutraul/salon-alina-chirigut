import { Appointment, Service } from "@prisma/client"
import { RequestResponse } from "types/ResponseTypes";
import { APPOINTMENTS_API_URL, CLIENTS_API_URL } from 'utils/constants'

export async function createAppointment(clientId: string, date: Date, time: String, service: Service): Promise<RequestResponse> {
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

  const response = await fetch(APPOINTMENTS_API_URL, {
    method: 'post',
    body: JSON.stringify(groupedData),
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const createdAppointment = await response.json();
  return createdAppointment;
}

export async function getAppointmentsFromCertainDate(date:Date): Promise<Appointment[]>{
  const formatedDate = date.toISOString();
  const response = await fetch(
    `${APPOINTMENTS_API_URL}/get-appointments-from-date`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: formatedDate }),
    }
  );
  const parsedResponse = await response.json();
  return parsedResponse;
}