// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { singleMethods, entity } from 'prisma/methods/methods';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if(!id){
    return res.status(400).json({message: "No id provided"});
  }

  const parsedId = parseInt(id[0]);

  return singleMethods(req, res, 'service' as entity, parsedId)
}