import * as React from "react";
import classNames from "classnames";

import Checkbox from '../checkbox';
import "./checkbox_group.scss";

type CheckboxData = {
    label: string,
    value: string,
}

interface ButtonProps {
  className?: string,
  direction: "row" | "column",
  checkboxData: CheckboxData[],
  selectedValues: String[],
  centered: boolean,
  onChange: (value: string) => void,
}

const baseClass = "UI_collection_checkbox_group";

const CheckboxGroup: React.FC<ButtonProps> = ({
  className = "",
  checkboxData = [],
  selectedValues = [],
  direction = "column",
  centered = true,
  onChange,
  ...otherProps
}) => {
    const directionClass = `group__${direction}`;
    const classes = classNames(baseClass,className, directionClass, {
        ["group__centered"]: centered,
    });
  return (
    <div className={classes} {...otherProps}>
        {checkboxData.map(checkboxData => <Checkbox label={checkboxData.label} value={checkboxData.value} checked={checkboxData.value in selectedValues} onChange={(e) => onChange(e.target.value)} /> )}
    </div>
  );
};

export default CheckboxGroup;