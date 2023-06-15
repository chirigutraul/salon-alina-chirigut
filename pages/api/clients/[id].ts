// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if(!id){
    return res.status(400).json({message: "No id provided"});
  }

  const { method } = req;
  
  if(method === 'GET'){
    const result = await prisma.client.findUnique({
      where: {
        id: id.toString(),
      },
      include:{
        appointments: {
          include:{
            service: true
          }
        }
      }
    });

    if(!result || !result.id) return res.status(404).json({message: "No client was found.", status: 'error'});

    return res.status(200).json(result);
  }

  if(method === 'PATCH'){
    const { data } = req.body;

    const updateResult = await prisma.client.update({
      where: { 
        id: id.toString()
      },
      data,
    });

    if(!updateResult.id) return res.status(404).json({message: "No client was found.", status: 'error'});

    return res.status(200).json({ message: "Numar de telefon adaugat cu success!" , status: 'success'});
  }
}