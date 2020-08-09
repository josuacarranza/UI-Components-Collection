import React, { useState } from "react";
import classNames from "classnames";
import "./select.scss";

type OptionEntry = {
  text: string;
  value: string | number;
};
interface SelectProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  selectedValue: string | number;
  options: OptionEntry[];
  disabled: boolean;
  defaultText: string;
  onChange: (option: OptionEntry) => void;
}

const baseClass = "UI_collection_select";
const optionsBaseClass = "select_options";

const Select: React.FC<SelectProps> = ({
  className,
  size="sm",
  selectedValue,
  defaultText = "Select an option",
  options,
  onChange= (option: OptionEntry) => console.log("selected option", option),
  disabled,
  ...otherProps
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectionText, setSelectionText] = useState(defaultText);

  const handleOptionsDisplay = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option: OptionEntry) => {
    setSelectionText(option.text);
    setShowOptions(false);
    onChange(option);
  };

  const sizeClass = `select__${size}`;
  const classes = classNames(baseClass, className, sizeClass);
  return (
    <div className={classes} {...otherProps}>
      <div
        className={showOptions ? "selection_text active" : "selection_text"}
        onClick={handleOptionsDisplay}
      >
        {selectionText}
      </div>
      {showOptions && (<div>
        <ul className={optionsBaseClass}>
          {options.map((option, index) => {
            return (
              <li
                className={""}
                data-name={option.text}
                key={index}
                onClick={() => handleOptionClick(option)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
      </div>)}
    </div>
  );
};

export default Select;
