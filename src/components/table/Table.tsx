import React from "react";
import classNames from "classnames";

import TableHeader from './table-header';
import TableBody from './table-body';
import TableColumn from './table-column';
import TableRow from './table-row';

import './table.scss';

interface TableProps {
  className?: string;
}

type ITable = React.FunctionComponent<TableProps> & {
    Header: typeof TableHeader;
    Body: typeof TableBody;
    Row: typeof TableRow;
    Column: typeof TableColumn;
};

const baseClass = "UI_collection_table";

const Table: ITable = ({ className, children }) => {
  const tableContainerClasses = classNames(baseClass, className);
  return (
    <div className={tableContainerClasses}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child) ? React.cloneElement(child) : null;
      })}
    </div>
  );
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Column = TableColumn;

export default Table;
