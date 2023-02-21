import { IClient } from "types";

export function createAppointment(event:any): void {
  event.preventDefault();
  const formDatas = new FormData(event.target);
  const phone = formDatas.get("phone");
  const date = formDatas.get("date");
  const time = "14:00";
  const dateAndTime = new Date(`${date}T${time}`);
  const rejectionDetails = "No details";
  const status = "approved";

  const groupedData = {
    data:{
      date: dateAndTime,
      rejectionDetails,
      status,
    }
  } 

  fetch('/api/appointments/', {
    method:'post',
    body: JSON.stringify(groupedData),
    headers: {
      'Content-Type': 'application/json'
    },
  })
}
