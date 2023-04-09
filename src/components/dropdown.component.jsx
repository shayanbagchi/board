import React, { useState } from "react";
import { ReactComponent as ChevronDownIcon } from "../assets/chevron_down_icon.svg";


const Dropdown = ({ options, className }) => {
  const label = options[0];
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        type="button"
        className="flex items-center justify-between w-full text-sm text-[#858585] font-normal focus:outline-none"
        onClick={handleDropdownToggle}
      >
        <span>{selectedOption || label}</span>
        <ChevronDownIcon className="w-2 h-2 ml-1"/>
      </button>

      {isDropdownOpen && (
        <div className="absolute z-10 w-full mt-1 bg-bgwhite rounded">
          <ul className="">
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  className="block w-full p-1 text-sm text-[#858585] font-normal hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.defaultProps = {
  options: [],
  label: "Select an option",
  className: "",
};

export default Dropdown;
