import { prisma } from "prisma/client";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "utils/constants";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;

  if (method === "GET") {
    const { clientId } = req.query;

    const appointments = await prisma.appointment.findMany({
      where: {
        ...(clientId ? { clientId: clientId as string } : {}),
      },
      include: {
        service: true,
      },
    });

    if (!appointments)
      return res.status(400).json({
        message: ERROR_MESSAGES.APPOINTMENTS_NOT_FOUND,
        status: "error",
      });

    return res.status(200).json(appointments);
  }

  if (method === "POST") {
    const { data } = req.body;
    const result = await prisma.appointment.create({
      data: { ...data },
    });

    if (!result)
      return res.status(400).json({
        message: ERROR_MESSAGES.SOMETHING_WENT_WRONG,
        status: "error",
      });

    return res.status(200).json({
      message: SUCCESS_MESSAGES.APPOINTMENT_CREATED,
      status: "success",
    });
  }
}
