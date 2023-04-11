import { AppointmentStatus, Service } from "@prisma/client";

export interface IClient {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?:string;
  phone?: string;
}

export interface IService {
  id:number;
  name: string;
  price: number;
  duration:string;
  description:string;
}

export interface extendedAppointment {
  id: number;
  date: Date;
  rejectionDetails: string | null;
  status: AppointmentStatus;
  createdAt: Date;
  clientId: string;
  serviceId: number;
  endDate: Date;
  service: Service;
}