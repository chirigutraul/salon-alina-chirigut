import { Client } from "@prisma/client"

const updateClientById = (id:string, dto:Client) => {
 return fetch(`/api/clients/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({data:dto}),
  })
}

export default updateClientById 