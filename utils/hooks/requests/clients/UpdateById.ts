import { IClient } from "types"

const updateClientById = (id:string, dto:IClient) => {
  fetch(`/api/clients/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({data:dto}),
  })
}

export default updateClientById 