import { IClient } from "types";

export function createAppointment(user: IClient): void {
  fetch('/api/appointment/create', {
    method:'post',
    body: JSON.stringify(user)
  })
}