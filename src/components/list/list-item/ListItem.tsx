import * as React from "react";
import classnames from "classnames";

import "../list.scss";

interface IconProps {
  style?: object;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const baseClass = "UI_collection_list_item";

const ListItem: React.FC<IconProps> = ({
  className,
  style,
  onClick = () => null,
  children,
}) => {
  const classNames = classnames(baseClass, className);
  return (
    <div className={classNames} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default ListItem;
