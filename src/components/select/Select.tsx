import React, { useState } from "react";
import Dropdown from "../dropdown";
import Text from '../text';
import Icon from "../icon";
import classNames from 'classnames';
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
  size = "sm",
  selectedValue,
  defaultText = "Select an option",
  options,
  onChange = (option: OptionEntry) => console.log("selected option", option),
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
      <Dropdown open={showOptions} width="inherit">
        <Dropdown.Header>
          <div
            className={showOptions ? "selection_text active" : "selection_text"}
            onClick={handleOptionsDisplay}
          >
            <Text value={selectionText} />
            <Icon name={showOptions ? "caretUp" : "caretDown"} color="black" size={20} />
          </div>
        </Dropdown.Header>
        <Dropdown.Content orientation="centered">
          {showOptions && (
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
          )}
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
};

export default Select;
