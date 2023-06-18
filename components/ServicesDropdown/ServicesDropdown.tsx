import { Service } from "@prisma/client";
import { FunctionComponent, useEffect, useState } from "react";
import { servicesLabels } from "utils/constants";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServices } from "utils/hooks/requests/services";
import Label from "components/Label";

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
    <div>
      <div>
        <Label text="Serviciul" />
      </div>
      <div
        className={`bg-black-25 rounded-md font-light cursor-pointer relative w-full text-black
    `}
      >
        <div
          className={`py-3 px-6 flex justify-between items-center`}
          onClick={() => toggleDropdown()}
        >
          <h6>
            {(selectedValue && servicesLabels.get(selectedValue.name)) ??
              "Serviciul"}
          </h6>
          <h5>
            <FontAwesomeIcon icon={faChevronDown} />
          </h5>
        </div>

        {isOpen && (
          <div
            className={`bg-black-75 mt-4 rounded-md shadow-md overflow-x-hidden absolute w-full z-50
           top-6 h-48 overflow-y-scroll styled-scrollbar backdrop-blur-sm
          `}
          >
            <ul>
              {services.map((option) => (
                <li
                  key={option.id}
                  className={`pl-4 py-2 text-white hover:bg-black hover:bg-opacity-30`}
                  onClick={() => {
                    setSelectedValue(option);
                    onSelect(option);
                    toggleDropdown();
                  }}
                >
                  <h6>{servicesLabels.get(option.name)}</h6>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
