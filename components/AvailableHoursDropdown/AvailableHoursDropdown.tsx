import { FunctionComponent, useMemo, useState } from "react";
import { Appointment } from "@prisma/client";
import getAvailableHours from "utils/helpers/get-available-hours";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Label from "components/Label";

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

  const availableHours = useMemo(() => {
    const availableHoursInSelectedDate = getAvailableHours(
      appointments,
      selectedDate,
      selectedServiceDuration
    );

    return availableHoursInSelectedDate;
  }, [appointments, selectedDate, selectedServiceDuration]);

  if (!selectedDate || !selectedServiceDuration) return null;

  const toggleDropdown = () => setIsOpen((curr) => !curr);

  return (
    <div>
      <p>{JSON.stringify(availableHours)}</p>
      <p>{availableHours.length}</p>
      <Label text="Ora" />
      <div
        className={`relative rounded-md h-12 text-black bg-black-25 cursor-pointer font-light`}
      >
        <div
          className={`flex items-center justify-between w-full h-full py-3 px-6 shadow-md rounded-md
          xs:text-2xl 
          `}
          onClick={() => toggleDropdown()}
        >
          <h6 className={"truncate"}>{selectedValue ?? "Ora"}</h6>

          <h5>
            <FontAwesomeIcon icon={faChevronDown} />
          </h5>
        </div>

        {isOpen && (
          <ul
            className={`absolute py-1 overflow-y-scroll bg-black-75 rounded-md shadow-md h-48
            top-10 w-full z-50 text-white styled-scrollbar
            md:h-28
            `}
          >
            {!!availableHours.length ? (
              availableHours.map((option, index) => (
                <li
                  key={option + index}
                  onClick={() => {
                    setSelectedValue(option);
                    onSelect(option);
                    toggleDropdown();
                  }}
                  className={`px-4 py-1 overflow-hidden hover:bg-black hover:bg-opacity-30
                xs:text-xl cursor-pointer
                `}
                >
                  <h6>{option}</h6>
                </li>
              ))
            ) : (
              <li
                key={"no-available-hours"}
                className={`px-4 py-1 overflow-hidden hover:bg-black hover:bg-opacity-30
              xs:text-xl cursor-pointer
              `}
              >
                <h6>Nu exista ore disponibile.</h6>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AvailableHoursDropdown;
