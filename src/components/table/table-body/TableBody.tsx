import React from "react";
import classNames from "classnames";

import "./table_body.scss";

interface TableBodyProps {
  className?: string;
}

const baseClass = "UI_collection_table_body";

const TableBody: React.FC<TableBodyProps> = ({ className, children }) => {
  const tableBodyContainerClasses = classNames(baseClass, className);
  return (
    <div className={tableBodyContainerClasses}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child) ? React.cloneElement(child) : null;
      })}
    </div>
  );
};

export default TableBody;
