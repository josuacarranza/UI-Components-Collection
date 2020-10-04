import React from "react";
import classNames from "classnames";

import "./table_column.scss";

interface TableColumnProps {
  className?: string;
  itemsAlignment?: "centered" | "start";
}

const baseClass = "UI_collection_table_column";

const TableColumn: React.FC<TableColumnProps> = ({
  className,
  itemsAlignment = "centered",
  children,
}) => {
  const itemsAlignmentaClass = `__${itemsAlignment}`;
  const tableColumnContainerClasses = classNames(
    baseClass,
    className,
    itemsAlignmentaClass
  );
  return (
    <div className={tableColumnContainerClasses}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child) ? React.cloneElement(child) : null;
      })}
    </div>
  );
};

export default TableColumn;
