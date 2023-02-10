// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if(!id){
    return res.status(400).json({error:"Missing id"});
  }
  
  const getUserById = await prisma.client.findUnique({
    where:{
      id:parseInt(id[0]),
    }
  })

  res.status(200).json(getUserById)
}
