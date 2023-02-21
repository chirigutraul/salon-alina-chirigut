import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export enum entity {
  client = 'client',
  //@ts-ignore
  appointment = 'appointment',
  //@ts-ignore
  service = 'service',
}

export async function multipleMethods(
  req: NextApiRequest,
  res: NextApiResponse,
  entity: entity,
){
  const method = req.method;

  if(!method) return res.status(400).json({message: "No method provided"});

  if(method === 'GET'){
  //@ts-ignore
    const result = await prisma[entity].findMany({
      ...( entity === 'appointment' && {
        include:{
          client: true,
          service: true
        }
      })
    });
    return res.status(200).json(result);
  } 
  
  if(method === 'POST'){
    const { data } = req.body;

    console.log("BODY:", req.body)
  //@ts-ignore
    const createResult = await prisma[entity].create({ data });
    
    return res.status(200).json(createResult);
  } 
  
  if( method === 'PATCH'){
    const { data, where } = req.body;
  //@ts-ignore
    const updateResult = await prisma[entity].update({
      where,
      data,
    });
    return res.status(200).json(updateResult);
  }

  if(method === 'DELETE'){
    const { where } = req.body;
  //@ts-ignore
    const deleteResult = await prisma[entity].delete({ where });
    return res.status(200).json(deleteResult);
  }
}

export async function singleMethods(
  req: NextApiRequest,
  res: NextApiResponse,
  entity: entity,
  id: number | string | string[],
){
  const method = req.method;

  if(!method) return res.status(400).json({message: "No method provided"});

  if(method === 'GET'){
  //@ts-ignore
    const result = await prisma[entity].findUnique({
      where: { id },
      ...( entity === 'appointment' && {
        include:{
          client: true,
          service: true
        }
      })
    });
    return res.status(200).json(result);
  }

  if( method === 'PATCH'){
    const { data } = req.body;
  //@ts-ignore
    const updateResult = await prisma[entity].update({
      where: { id },
      data,
    });
    return res.status(200).json(updateResult);
  }

  if(method === 'DELETE'){
  //@ts-ignore
    const deleteResult = await prisma[entity].delete({ 
      where:{ id }
    });
    return res.status(200).json(deleteResult);
  }
}