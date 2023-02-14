// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const isEntityRetrieved = req.method === "GET";
  const isEntityUpdated = req.method === "PATCH";

  const { id } = req.query;

  if(!!!id){
    // const getAllUsers = await prisma.client.findMany();
    const updateUser = {message:"HELLO THERE"}
    return res.status(200).json(updateUser);
  }

  const parsedId = parseInt(id[0]);

  const where = {
    id: parsedId
  }

  if(isEntityRetrieved){
    const getUserById = await prisma.client.findUnique({
      where,
    })

    return res.status(200).json(getUserById)
  } else if (isEntityUpdated){
    const updatedUser = await prisma.client.update({
      where,
      data: {
        ...req.body
      },
    })

    return res.status(200).json(updatedUser);
  }
}
