import { Service } from "@prisma/client";
import { FunctionComponent, useEffect, useState } from "react";
import { roboto } from "utils/fonts";
import { servicesLabels } from "utils/constants";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServices } from "utils/hooks/requests/services";

interface DropdownProps {
  onSelect: (selectedService: Service) => void;
}

const Dropdown: FunctionComponent<DropdownProps> = ({ onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<Service>();
  const [isOpen, setIsOpen] = useState(false);

  const [services, setServices] = useState<Service[]>([]);

  const toggleDropdown = () => setIsOpen((curr) => !curr);

  const fetchAndSetServices = async () => {
    const services = await getServices();
    setServices(services);
  };

  useEffect(() => {
    fetchAndSetServices();
  }, []);

  return (
    <div
      className={` bg-white ${roboto.className} rounded-md font-light
    border-[1px] border-secondary h-12 cursor-pointer relative w-full
    `}
    >
      <div
        className={`p-4 flex justify-between items-center h-full`}
        onClick={() => toggleDropdown()}
      >
        <p className={`xs:text-2xl text-gray-400`}>
          {(selectedValue && servicesLabels.get(selectedValue.name)) ??
            "Serviciul"}
        </p>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`xs:text-3xl text-secondary`}
        />
      </div>

      {isOpen && (
        <div
          className={`bg-white mt-4 rounded-md shadow-md overflow-x-hidden absolute w-full z-50
           top-6 h-48 overflow-y-scroll
          `}
        >
          <ul>
            {services.map((option) => (
              <li
                key={option.id}
                className={`pl-4 py-2 hover:bg-primary hover:bg-opacity-30 text-secondary
                xs:text-xl
                `}
                onClick={() => {
                  setSelectedValue(option);
                  onSelect(option);
                  toggleDropdown();
                }}
              >
                {servicesLabels.get(option.name)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
