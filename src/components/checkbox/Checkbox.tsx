import * as React from "react";
import classNames from "classnames";
import "./checkbox.scss";

interface ButtonProps {
  className?: string;
  color?: "primary" | "success" | "secondary" | "danger" | "warning";
  size?: "sm" | "md" | "lg",
  value: string | number,
  selected: boolean,
  disabled?: boolean;
  onChange: (event:  React.ChangeEvent<HTMLInputElement>) => void;
}

const baseClass = "UI_collection_checkbox";

const Checkbox: React.FC<ButtonProps> = ({
  className = "",
  color = "primary",
  size = "",
  disabled = false,
  value,
  onChange,
  ...otherProps
}) => {
  const colorClass = `__${color}`;
  const sizeClass = `__${size}`;
  const classes = classNames(baseClass, className,colorClass, sizeClass);
  return (
    <input type="checkbox" className={classes} value={value} disabled={disabled} onChange={onChange} {...otherProps}></input>
  );
};

export default Checkbox;