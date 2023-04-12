import { FunctionComponent, useState } from "react";
import { roboto } from "utils/fonts";
import { Appointment } from "@prisma/client";
import useGetAvailableHours from "utils/hooks/date/get-available-hours";

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
    <div className="relative inline-block w-full text-left">
      <div className="w-full">
        <button
          type="button"
          className={`
          inline-flex justify-between w-full px-4 py-2 bg-white rounded-sm shadow-md hover:bg-gray-100 focus:outline-none relative
          ${roboto.className} font-light text-lg text-center truncate
          ${selectedValue ? "text-accent" : "text-gray-400"}
          `}
          onClick={() => toggleDropdown()}
        >
          <span className={"truncate"}>{selectedValue ?? "Ora"}</span>
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 w-full h-48 mt-2 overflow-scroll origin-top-right bg-white rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {availableHours.map((option, index) => (
              <button
                type={"button"}
                key={option + index}
                onClick={() => {
                  setSelectedValue(option);
                  onSelect(option);
                  toggleDropdown();
                }}
                className="block w-full px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableHoursDropdown;
