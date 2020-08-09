import * as React from "react";
import classNames from "classnames";
import "./items_container.scss";

interface ItemsContainerProps {
  style: object;
  className: string;
  orientation: "row" | "column";
  firstItemsGroup: any,
  secondItemsGroup: any,
}

const baseClass = "UI_collection_items_container";
const dividerClass = "divider";

const ItemsContainer: React.FC<ItemsContainerProps> = ({
  style,
  className,
  orientation,
  firstItemsGroup,
  secondItemsGroup,
}) => {
    const orientationClass = `__${orientation}`
  const classes = classNames(baseClass, className, orientationClass);

  return <div className={classes} style={style}>
      {firstItemsGroup}
      <div className={dividerClass} />
      {secondItemsGroup}
  </div>;
};

export default ItemsContainer;
