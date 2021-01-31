import * as React from "react";
import classNames from "classnames";
import "./text.scss";

interface TextProps {
  className?: string;
  size?: "sm" | "sm2" | "sm3" | "md" | "md2" | "md3" | "md4" | "lg" | "lg2";
  color?: "primary" | "success" | "secondary" | "danger" | "warning";
  bold?: boolean;
  link?: boolean;
  value: Number | String;
}

const baseClass = "UI_collection_text";
const linkBaseClass = "link__text";

const Text: React.FC<TextProps> = ({
  className,
  size = "sm3",
  color = "",
  bold = false,
  value = "",
  link = false,
  children,
  ...otherProps
}) => {
  const colorClass = `font__${color}`;
  const classes = classNames(baseClass, className, colorClass, size, {
    ["font__bold"]: bold,
    [linkBaseClass]: link,
  });
  if (!link && value) {
    return <label className={classes}> {value} </label>;
  } else if (value) {
    return (
      <a className={classes} {...otherProps}>
        {value}
      </a>
    );
  } else {
    return <label className={classes}> {children} </label>;
  }
};

export default Text;
