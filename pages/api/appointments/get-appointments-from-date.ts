// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {prisma} from "prisma/client";
import { ERROR_MESSAGES } from 'utils/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  const { date } = req.body;

  if(!date) return res.status(400).json({message: ERROR_MESSAGES.DATE_NOT_FOUND});

  if(method !== 'POST') return res.status(400).json({message: ERROR_MESSAGES.METHOD_NOT_ALLOWED});

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