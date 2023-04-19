import { Appointment } from "@prisma/client";
import React, { FunctionComponent } from "react";
import useGetAvailableHours from "utils/hooks/date/get-available-hours";

interface Props {
  appointments: Appointment[];
  selectedDate: Date;
  setHour(hour: string): void;
  selectedHour: string;
  selectedServiceDuration: string | null;
}

const AvailableHoursInDate: FunctionComponent<Props> = ({
  appointments,
  selectedDate,
  setHour,
  selectedHour,
  selectedServiceDuration,
}) => {
  const availableHours = useGetAvailableHours(
    appointments,
    selectedDate,
    selectedServiceDuration
  );

  if (!selectedDate || !selectedServiceDuration) return null;

  return (
    <div
      className={`  
    flex flex-row flex-wrap justify-center gap-4 transition-all duration-300
    `}
    >
      {availableHours &&
        availableHours.map((hour, index) => (
          <div
            key={index + hour}
            onClick={() => setHour(hour)}
            className={`
        border-2 py-2 px-4 rounded-md cursor-pointer border-secondary
        transition-all duration-300
        hover: hover:text-white
        ${selectedHour === hour && " text-white"}
        `}
          >
            {hour}
          </div>
        ))}
    </div>
  );
};

export default AvailableHoursInDate;
