import * as React from "react";
import classNames from "classnames";

import Radio from "../radio";
import "./radio_group.scss";

type RadioData = {
  label: string;
  value: string;
};

interface ButtonProps {
  className?: string;
  direction: "row" | "column";
  radiosData: RadioData[];
  selectedValue: String;
  centered: boolean;
  onChange: (value: string) => void;
}

const baseClass = "UI_collection_radio_group";

const RadioGroup: React.FC<ButtonProps> = ({
  className = "",
  radiosData = [],
  selectedValue = null,
  direction = "column",
  centered = true,
  onChange,
  ...otherProps
}) => {
  const directionClass = `group__${direction}`;
  const classes = classNames(baseClass, className, directionClass, {
    ["group__centered"]: centered,
  });
  return (
    <div className={classes} {...otherProps}>
      {radiosData.map((radioData) => (
        <Radio
          label={radioData.label}
          value={radioData.value}
          checked={selectedValue === radioData.value}
          onChange={(e) => onChange(e.target.value)}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
