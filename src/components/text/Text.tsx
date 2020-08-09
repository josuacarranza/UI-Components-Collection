import * as React from "react";
import classNames from "classnames";
import "./text.scss";

interface TextProps {
  className?: string,
  type?: "title" | "subtitle" | "normal",
  color?: "primary" | "success" | "secondary" | "danger" | "warning",
  bold?: boolean,
  link?: boolean,
  value: Number | String,
}

const baseClass = "UI_collection_text";
const linkBaseClass = "link__text";

const Text: React.FC<TextProps> = ({
  className,
  type = "normal",
  color = "",
  bold = false,
  value = "",
  link = false,
  ...otherProps
}) => {
  const colorClass = `font__${color}`;
  const classes = classNames(baseClass, className, colorClass, type, {
      ['font__bold'] : bold,
      [linkBaseClass]: link,
  });
  if (!link) {
    return (
        <label className={classes}> {value} </label>
      );
  }

  else {
      return (<a className={classes} {...otherProps}>
          {value}
      </a>);
  }
  
};

export default Text;
