import React from "react";
import classNames from "classnames";

import "./table_header.scss";

interface TableHeaderProps {
  className?: string;
  sticky?: boolean;
  color?: "primary" | "success" | "dark" | "transparent";
}

const baseClass = "UI_collection_table_header";
const stickyClass = "__sticky";

const TableHeader: React.FC<TableHeaderProps> = ({
  className = "",
  sticky = false,
  color = "primary",
  children,
}) => {
  const colorClass = `__${color}`;
  const tableHeaderContainerClasses = classNames(
    baseClass,
    className,
    colorClass,
    {
      [stickyClass]: sticky,
    }
  );
  return (
    <div className={tableHeaderContainerClasses}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child) ? React.cloneElement(child) : null;
      })}
    </div>
  );
};

export default TableHeader;
