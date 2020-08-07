import * as React from "react";
import classNames from "classnames";
import "./checkbox.scss";

interface ButtonProps {
  className?: string;
  color?: "primary" | "success" | "secondary" | "danger" | "warning",
  size?: "sm" | "md" | "lg",
  label: string,
  value: string | number,
  checked: boolean,
  disabled?: boolean;
  onChange: (event:  React.ChangeEvent<HTMLInputElement>) => void;
}

const baseClass = "UI_collection_checkbox";
const checkboxContainerClass = "UI_collection_checkbox_container";

const Checkbox: React.FC<ButtonProps> = ({
  className = "",
  color = "primary",
  size = "",
  disabled = false,
  label,
  value,
  checked,
  onChange,
  ...otherProps
}) => {
  const colorClass = `chk__${color}`;
  const sizeClass = `chk__${size}`;
  const classes = classNames(baseClass, className,colorClass, sizeClass);
  return (
    <div className={checkboxContainerClass}>
      <input type="checkbox" className={classes} value={value} disabled={disabled} checked={checked} onChange={onChange} {...otherProps} />
      {label}
    </div>
  );
};

export default Checkbox;