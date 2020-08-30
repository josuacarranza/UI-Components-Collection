import React from "react";
import classNames from "classnames";

import "../modal.scss";

interface FooterProps {
  className?: string;
  alignment?: "start" | "stretch" | "end" | "center";
  direction?: "row" | "column";
}

const baseClass = "UI_collection_modal_footer";

const Footer: React.FC<FooterProps> = ({
  className,
  alignment = "end",
  direction = "row",
  children,
}) => {
  const alignmentClass = `__${alignment}`;
  const directionClass = `__${direction}`;
  const classes = classNames(baseClass, alignmentClass, directionClass, className);

  return <div className={classes}>{children}</div>;
};

export default Footer;
