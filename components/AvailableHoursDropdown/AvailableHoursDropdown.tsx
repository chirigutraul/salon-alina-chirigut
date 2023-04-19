import { FunctionComponent, useState } from "react";
import { Appointment } from "@prisma/client";
import useGetAvailableHours from "utils/hooks/date/get-available-hours";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface DropdownProps {
  onSelect: (selectedHour: string) => void;
  appointments: Appointment[];
  selectedDate?: Date;
  selectedServiceDuration?: string | null;
}

const AvailableHoursDropdown: FunctionComponent<DropdownProps> = ({
  onSelect,
  appointments,
  selectedDate,
  selectedServiceDuration,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);

  const availableHours = useGetAvailableHours(
    appointments,
    selectedDate,
    selectedServiceDuration
  );

  if (!selectedDate || !selectedServiceDuration) return null;

  const toggleDropdown = () => setIsOpen((curr) => !curr);

  return (
    <div
      className={`relative rounded-md h-12 text-gray-400 bg-white cursor-pointer  font-light`}
    >
      <div
        className={`flex items-center justify-between w-full h-full px-4 shadow-md border-[1px] rounded-md border-secondary
        xs:text-2xl 
        `}
        onClick={() => toggleDropdown()}
      >
        <span className={"truncate"}>{selectedValue ?? "Ora"}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-secondary
        xs:text-3xl
        `}
        />
      </div>

      {isOpen && (
        <ul
          className={`absolute py-1 overflow-y-scroll bg-white rounded-md shadow-md h-48
          top-10 w-full z-50 text-secondary
          md:h-28
          `}
        >
          {availableHours.map((option, index) => (
            <li
              key={option + index}
              onClick={() => {
                setSelectedValue(option);
                onSelect(option);
                toggleDropdown();
              }}
              className={`px-4 py-1 overflow-hidden hover:bg-primary hover:bg-opacity-30
              xs:text-xl cursor-pointer
              `}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AvailableHoursDropdown;
