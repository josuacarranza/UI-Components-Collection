import * as React from "react";
import classNames from "classnames";
import "./text_area.scss";

interface TextProps {
  className?: string;
  errorState?: boolean;
  size?: "sm" | "md" | "lg";
  value?: any;
  placeHolder?: string;
  defaultValue?: string;
  disabled?: boolean;
  bordered?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const baseClass = "UI_collection_text_area";

const TextArea: React.FC<TextProps> = ({
  className,
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

  const valueToUse = value ? value : defaultValue;

  return (
    <textarea
      className={classes}
      value={valueToUse}
      placeholder={placeHolder}
      onChange={onChange}
      disabled={disabled}
      {...otherProps}
    ></textarea>
  );
};

export default TextArea;
