// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'prisma/client';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'utils/constants/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if(method === 'POST'){
    const { client } = req.body;

    const { id, firstName, lastName, email, picture } = client;

    if(!client || !id || !firstName || !lastName || !email || !picture){
      return res.status(400).json({message: ERROR_MESSAGES.SOMETHING_WENT_WRONG});
    }

    const createdClient = await prisma.client.create({
      data: {...client}
    });

    if(!createdClient) {
      return res.status(400).json({message: ERROR_MESSAGES.SOMETHING_WENT_WRONG});
    }

    return res.status(200).json({ message : SUCCESS_MESSAGES.ACCOUNT_CREATED});
  } 
}