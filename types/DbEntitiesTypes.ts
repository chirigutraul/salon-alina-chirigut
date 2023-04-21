import { AppointmentStatus, Service } from "@prisma/client";

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

export interface IClient {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?:string;
  phone?: string;
}