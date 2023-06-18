// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {prisma} from "prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  const { date } = req.body;

  if(!date) return res.status(400).json({message: "Date required"});

  if(!method) return res.status(400).json({message: "No method provided"});

  if(method !== 'POST') return res.status(400).json({message: "Method not allowed"});

  const nextDayAfterDate =  new Date(date);
  const newDay = new Date(nextDayAfterDate).getDate() + 1;
  nextDayAfterDate.setDate(newDay);
  //@ts-ignore
    const result = await prisma.appointment.findMany({
        where: {
          date: {
          gte: new Date(date),
          lte: nextDayAfterDate,
          },
        },
    });
    return res.status(200).json(result);
}