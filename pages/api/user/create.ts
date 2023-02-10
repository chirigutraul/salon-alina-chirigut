// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, picture, phone } = req.body;

  const result = await prisma.client.create({
    data: {
    firstName,
    lastName,
    phone,
    email,
    picture,
    },
  });

  res.json(result);
}