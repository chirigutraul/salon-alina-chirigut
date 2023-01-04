import { PrismaClient } from "@prisma/client"
import AppointmentForm from "components/AppointmentForm/AppointmentForm";
import React, { useState } from "react";
import { IClient, IService } from "types";
import { createAppointment } from "utils/hooks/Requests/Appointments";

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const services = await prisma.service.findMany();

  return {
    props : { services }
  }
}
export default function Programari({
  services
}:{
  services:IService[];
}) {
  const [data, setData] = useState({})

  const handleAppointmentCreating = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("DATA:", data)
  }

  const handleInputChange = (e:any) => {
    setData(current => {return {...current , [e.target.name]:e.target.value}})
  }

  return (
    <div className="flex justify-center">
    <AppointmentForm/>
    </div>
  )
}
