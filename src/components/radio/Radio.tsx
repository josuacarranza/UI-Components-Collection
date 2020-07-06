import * as React from "react";
import classNames from "classnames";
import "./radio.scss";

interface ButtonProps {
  className?: string;
  color?: "primary" | "success" | "secondary" | "danger" | "warning";
  size?: "sm" | "md" | "lg",
  value: string | number,
  selected: boolean,
  disabled?: boolean;
  onChange: (event:  React.ChangeEvent<HTMLInputElement>) => void;
}

const baseClass = "UI_collection_radio";

const Radio: React.FC<ButtonProps> = ({
  className = "",
  color = "primary",
  size = "",
  disabled = false,
  value,
  onChange,
  ...otherProps
}) => {
  const colorClass = `btn__${color}`;
  const sizeClass = `btn__${size}`;
  const classes = classNames(baseClass, className,colorClass, sizeClass);
  return (
    <input type="radio" className={classes} value={value} disabled={disabled} onChange={onChange} {...otherProps} />
  );
};

export default Radio;