import { Appointment } from "@prisma/client";
import { IClient } from "types/DbEntitiesTypes";
import { CLIENTS_API_URL } from "utils/constants";

export const getClientById = async (id: string) => {
  const client = await fetch(`${CLIENTS_API_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const clientResponse = await client.json();

  return clientResponse;
};

export const createClient = async (dto: IClient) => {
  const result = await fetch(`${CLIENTS_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client: dto,
    }),
  });

  return result;
};

export const updateClientById = async (id: string, dto: IClient) => {
  const updateResult = await fetch(`${CLIENTS_API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: dto }),
  });

  const updateResultJson = await updateResult.json();

  return updateResultJson;
};
