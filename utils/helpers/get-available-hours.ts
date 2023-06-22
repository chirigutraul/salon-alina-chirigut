import { Appointment } from "@prisma/client";

function getAvailableHours(
  appointments: Appointment[],
  selectedDate: Date | undefined,
  serviceDuration: string | undefined | null
): string[] {
  if (!selectedDate || !serviceDuration) return [];

  const parsedServiceDuration: number | undefined = parseInt(serviceDuration);
  const availableHours: string[] = [];

  const minutesStep = 30;

  const parsedSelectedDate: Date = new Date(selectedDate.toLocaleDateString());

  const startOfDay = new Date(
    parsedSelectedDate.getFullYear(),
    parsedSelectedDate.getMonth(),
    parsedSelectedDate.getDate(),
    9,
    0,
    0
  );

  const endOfDay = new Date(
    parsedSelectedDate.getFullYear(),
    parsedSelectedDate.getMonth(),
    parsedSelectedDate.getDate(),
    21,
    0,
    0
  );

  for (
    let time = startOfDay;
    time <= endOfDay;
    time.setMinutes(time.getMinutes() + minutesStep)
  ) {
    var availability = true;

    const endTime = new Date(time);
    endTime.setMinutes(endTime.getMinutes() + parsedServiceDuration);

    if (endTime >= endOfDay) {
      availability = false;
    }

    appointments.forEach((appointment) => {
      const appointmentStart = new Date(appointment.date);
      appointmentStart.setHours(appointmentStart.getHours() - 3);
      const appointmentEnd = new Date(appointment.endDate);
      appointmentEnd.setHours(appointmentEnd.getHours() - 3);

      if (
        (time >= appointmentStart && time < appointmentEnd) ||
        (endTime > appointmentStart && endTime < appointmentEnd)
      ) {
        availability = false;
      }
    });

    if (availability) {
      availableHours.push(
        time.toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit" })
      );
    }
  }

  return availableHours;
}

export default getAvailableHours;
