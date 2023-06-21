// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if(method === 'GET'){
    const retrievedServices = await prisma.service.findMany();

    if(!retrievedServices) {
      return res.status(400).json({message: "No services were found"});
    }

    return res.status(200).json(retrievedServices);
  } 
}