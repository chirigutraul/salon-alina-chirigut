import { IClient } from "types";

export function createAppointment(event:any): void {
  event.preventDefault();
  const formDatas = new FormData(event.target);
  const phone = formDatas.get("phone");
  const date = formDatas.get("date");
  const time = "14:00";
  // fetch('/api/appointment/create', {
  //   method:'post',
  //   body: JSON.stringify(user)
  // })
}