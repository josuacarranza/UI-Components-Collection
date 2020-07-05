import * as React from "react";
import classNames from "classnames";
import "./input.scss";

interface InputProps {
  className?: string;
  type: string;
  errorState?: boolean;
  size?: "sm" | "md" | "lg";
  value: any;
  placeHolder?: string;
  defaultValue?: string;
  disabled?: boolean;
  bordered?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const baseClass = "UI_collection_input";

const Input: React.FC<InputProps> = ({
  className,
  type = "text",
  errorState,
  bordered = true,
  size,
  placeHolder,
  value,
  defaultValue,
  onChange,
  disabled,
  ...otherProps
}) => {
  const sizeClass = `inp__${size}`;
  const classes = classNames(baseClass, className, sizeClass, {
    ["inp__bordered"]: bordered,
    ["inp__unbordered"]: !bordered,
    ["inp__error"]: errorState,
  });
  return (
    <input
      className={classes}
      type={type}
      value={value || defaultValue}
      placeholder={placeHolder}
      onChange={onChange}
      disabled={disabled}
      {...otherProps}
    />
  );
};

export default Input;
