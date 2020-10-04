import React, { MouseEvent } from "react";
import classNames from "classnames";

import "./table_row.scss";

interface TableRowProps {
  className?: string;
  isHeader?: boolean;
  onClick?: Function;
  rowData?: any;
  useHover?: boolean;
  bordered?: boolean;
}

const baseClass = "UI_collection_table_row";
const headerRowClass = "__header";
const normalRowClass = "__row";
const hoverClass = "__hoverable";
const borderedClass = "__bordered";

const TableRow: React.FC<TableRowProps> = ({
  className,
  isHeader,
  onClick = () => null,
  rowData = "",
  useHover = true,
  bordered = false,
  children,
}) => {
  const tableRowContainerClasses = classNames(baseClass, className, {
    [headerRowClass]: isHeader,
    [normalRowClass]: !isHeader,
    [hoverClass]: useHover && !isHeader,
    [borderedClass]: bordered,
  });

  const onClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    onClick(rowData);
    event.stopPropagation();
  };

  return (
    <div className={tableRowContainerClasses} onClick={onClickHandler}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child) ? React.cloneElement(child) : null;
      })}
    </div>
  );
};

export default TableRow;
