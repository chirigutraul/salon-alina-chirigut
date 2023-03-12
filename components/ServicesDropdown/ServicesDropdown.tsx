import { Service, Servname } from "@prisma/client";
import { FunctionComponent, useState } from "react";
import { montserrat, roboto } from "utils/fonts";
import { servicesLabels } from "utils/constants";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DropdownProps {
  options: Service[];
  onSelect: (selectedService: Service) => void;
}

const Dropdown: FunctionComponent<DropdownProps> = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<Service>();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((curr) => !curr);

  return (
    <div className="relative inline-block w-full text-left">
      <div className="w-full">
        <button
          type="button"
          className={`
          inline-flex justify-between items-center w-full px-4 py-2 bg-white rounded-sm shadow-md hover:bg-gray-100 focus:outline-none
          ${roboto.className} font-regular text-md truncate 
          ${selectedValue ? "text-accent" : "text-gray-400"}
          lg:py-1 lg:px-4 lg:w-64
          `}
          onClick={() => toggleDropdown()}
        >
          <span
            className={`
          truncate
          sm:text-xl ${roboto.className} font-light
          lg:text-lg
          `}
          >
            {(selectedValue && servicesLabels.get(selectedValue.name)) ??
              "Serviciul"}
          </span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`
            text-xl text-accent
            sm:text-2xl
            lg:text-xl
            `}
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute h-[20vh] right-0 z-10 w-full mt-2 overflow-scroll origin-top-right bg-white rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                type={"button"}
                key={option.id}
                onClick={() => {
                  setSelectedValue(option);
                  onSelect(option);
                  toggleDropdown();
                }}
                className={`
                block w-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900
                ${roboto.className} font-light text-accent 
                sm:text-lg sm:py-2
                `}
                role="menuitem"
              >
                {servicesLabels.get(option.name)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
