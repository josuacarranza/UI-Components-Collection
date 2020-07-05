import * as React from "react";
import classNames from "classnames";
import "./dropdown.scss";

interface DropdownProps {
  className?: string;
  open: boolean;
  size?: "sm" | "md" | "lg";
  contentOrientation: "toLeft" | "toRight";
}

const baseClass = "UI_collection_dropdown";
const dropdownContentBaseClass = "UI_collection_dropdown_content";

const Dropdown: React.FC<DropdownProps> = ({
  className = "",
  size = "sm",
  open = false,
  contentOrientation = "toLeft",
  children,
}) => {
  const classes = classNames(baseClass, className);

  const sizeClass = `__${size}`;
  const contentOrientationClass = `__${contentOrientation}`;
  const contentClasses = classNames(
    dropdownContentBaseClass,
    sizeClass,
    contentOrientationClass,
    {
      ["__open"]: open,
      ["__close"]: !open,
    }
  );

  return (
    <div className={classes}>
      {children?.[0]}
      <div className={contentClasses}>{children?.[1]}</div>
    </div>
  );
};

export default Dropdown;
