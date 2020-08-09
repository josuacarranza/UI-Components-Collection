import React from "react";
import classNames from "classnames";

import "./form_group.scss";

interface FormGroupProps {
  className?: string;
  style?: object;
  orientation: "inline" | "block";
}

const baseClass = "UI_collection_form_group";

const FormGroup: React.FC<FormGroupProps> = ({
  className = "",
  style = {},
  orientation = "block",
  children,
}) => {
  const classes = classNames(baseClass, className, `__${orientation}`);

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default FormGroup;
