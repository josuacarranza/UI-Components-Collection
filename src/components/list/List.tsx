import * as React from "react";
import classnames from "classnames";

import ListItem from "./list-item";

import './list.scss';

interface ListProps {
  style?: object;
  className?: string;
}

type IList = React.FC<ListProps> & {
  ListItem: typeof ListItem;
};

const baseClass = "UI_collection_list";

const List: IList = ({ className, style, children }) => {
  const classNames = classnames(baseClass, className);

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

List.ListItem = ListItem;

export default List;
