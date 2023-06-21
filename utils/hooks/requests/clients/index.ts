import { Appointment } from "@prisma/client";
import { IClient } from "types/DbEntitiesTypes"
import { CLIENTS_API_URL } from "utils/constants"

export const getClientById = async (id:string) => {
  const client = await fetch(`${CLIENTS_API_URL}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const clientResponse = await client.json();

  return clientResponse;
}

export const createClient = async (dto:IClient) => {
  const result = await fetch(`${CLIENTS_API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client: dto
    }),
  })

  return result;
}

export const updateClientById = async (id:string, dto:IClient) => {
 const updateResult = await fetch(`${CLIENTS_API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({data:dto}),
  })

  const updateResultJson = await updateResult.json();

  return updateResultJson;
}

interface userProfileAppointments {
  appointments: Appointment[];
  closestAppointment: Appointment | null;
}

export async function getUserAppointments(userId: string): Promise<userProfileAppointments>{
  const user = await fetch(`${CLIENTS_API_URL}/${userId}`);
  const userJson = await user.json();

  if(!userJson.appointments || !userJson.appointments.length) return {appointments: [], closestAppointment: null};

  const sortedAppointments:Appointment[] = userJson.appointments.sort((a: Appointment, b: Appointment) => {
   return new Date(a.date).getTime() -  new Date(b.date).getTime()
  })

  const dateToday = new Date();

  let closestAppointment:Appointment | null = null;

  for(const appointment of sortedAppointments){
    if(new Date(appointment.date).getTime() > dateToday.getTime()){
      closestAppointment = appointment;
      break;
    } 
  }

  const appointmentsAndSpotlight: userProfileAppointments = {
    appointments: sortedAppointments,
    closestAppointment: closestAppointment
  }

  return appointmentsAndSpotlight;
}

