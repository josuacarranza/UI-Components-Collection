import * as React from "react";
import classNames from "classnames";
import "./button.scss";

interface ButtonProps {
  className?: string;
  color?: "primary" | "success" | "secondary" | "danger" | "warning" | "transparent";
  size?: "sm" | "md" | "lg", 
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const baseClass = "UI_collection_button";

const Button: React.FC<ButtonProps> = ({
  className = "",
  color = "primary",
  size = "",
  disabled = false,
  onClick,
  children,
  ...otherProps
}) => {
  const colorClass = `btn__${color}`;
  const sizeClass = `btn__${size}`;
  const classes = classNames(baseClass, className,colorClass, sizeClass);
  return (
    <button className={classes} disabled={disabled} onClick={onClick} {...otherProps}>
        {children}
    </button>
  );
};

export default Button;
