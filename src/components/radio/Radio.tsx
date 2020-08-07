import * as React from "react";
import classNames from "classnames";
import "./radio.scss";

interface ButtonProps {
  className?: string;
  color?: "primary" | "success" | "secondary" | "danger" | "warning";
  size?: "sm" | "md" | "lg",
  value: string | number,
  checked: boolean,
  disabled?: boolean;
  label: string,
  onChange: (event:  React.ChangeEvent<HTMLInputElement>) => void;
}

const baseClass = "UI_collection_radio";
const radioContainerClass = "UI_collection_radio_container";

const Radio: React.FC<ButtonProps> = ({
  className = "",
  color = "primary",
  size = "",
  disabled = false,
  checked = false,
  value,
  label = "",
  onChange,
  ...otherProps
}) => {
  const colorClass = `radio__${color}`;
  const sizeClass = `radio__${size}`;
  const classes = classNames(baseClass, className,colorClass, sizeClass);
  return (
    <div className={radioContainerClass}>
      <input type="radio" className={classes} value={value} checked={checked} disabled={disabled} onChange={onChange} {...otherProps} />
      {label}
    </div>
    
  );
};

export default Radio;