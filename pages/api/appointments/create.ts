import {prisma} from "prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  const { data } = req.body;

  if (!method) return "Method required!";

  if (method === 'POST') {
    //@ts-ignore
    const result = await prisma.Appointment.create({
      data: { ...data }
    });

    if (!result) return res.status(400).json({ message: "Ceva nu a functionat!", status: 400 })

    return res.status(200).json({ message: "Programarea ta a fost creata! Multumim!", status: 200 })
  }
}