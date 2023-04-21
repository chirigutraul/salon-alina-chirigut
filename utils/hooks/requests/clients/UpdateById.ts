import { IClient } from "types/DbEntitiesTypes"

const updateClientById = (id:string, dto:IClient) => {
 return fetch(`/api/clients/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({data:dto}),
  })
}

export default updateClientById 