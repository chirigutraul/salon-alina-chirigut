// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { multipleMethods, entity } from 'prisma/methods/methods';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return multipleMethods(req, res, 'appointment' as entity)
}