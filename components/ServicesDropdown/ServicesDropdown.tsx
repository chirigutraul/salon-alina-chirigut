import { Service, Servname } from '@prisma/client';
import { FunctionComponent, useState } from 'react';
import { montserrat, roboto } from 'utils/fonts';
import { servicesLabels } from 'utils/constants';

interface DropdownProps {
  options: Service[];
  onSelect: (selectedService: Service) => void;
}

const Dropdown: FunctionComponent<DropdownProps> = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<Service>();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(curr => !curr);

  return (
    <div className="relative inline-block w-full text-left">
      <div className='w-full'>
        <button
          type="button"
          className={`
          inline-flex justify-between w-full px-4 py-2 bg-white rounded-sm shadow-md hover:bg-gray-100 focus:outline-none
          ${roboto.className} font-regular text-md text-center truncate 
          ${selectedValue ? 'text-accent' : 'text-gray-400'}
          `}
          onClick={() => toggleDropdown()}>
          <span className={'truncate'}>{(selectedValue && servicesLabels.get(selectedValue.name)) ?? 'Serviciul'}</span>
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M10.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {
        isOpen &&
        <div className="absolute right-0 z-10 w-full mt-2 origin-top-right bg-white rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <button
                type={'button'}
                key={option.id}
                onClick={() => {
                  setSelectedValue(option);
                  onSelect(option);
                  toggleDropdown();
                }}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem">
                {servicesLabels.get(option.name)}
              </button>
            ))}
          </div>
        </div>
      }

    </div>
  );
}

export default Dropdown;
