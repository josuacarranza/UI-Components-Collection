import * as React from "react";
import classNames from "classnames";
import "./select.scss";

type OptionEntry = {
  text: string;
  value: string | number;
};
interface SelectProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  value: any;
  options: OptionEntry[];
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const baseClass = "UI_collection_select";
const optionsBaseClass = "UI_collection_select_option";

const Select: React.FC<SelectProps> = ({
  className,
  size,
  value,
  options,
  onChange,
  disabled,
  ...otherProps
}) => {
  const sizeClass = `select__${size}`;
  const classes = classNames(baseClass, className, sizeClass);
  return (
    <select
      className={classes}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...otherProps}
    >
      {options.map((option) => (
        <option className={optionsBaseClass} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
