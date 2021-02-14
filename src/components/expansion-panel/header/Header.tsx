import React, { useContext } from "react";
import classNames from "classnames";
import Icon from "../../icon";

import { ExpansionPanelContext } from '../context';

import "../expansion-panel.scss";

interface ExpansionPanelProps {
  className?: string;
  style?: object;
}

const baseClass = "UI_collection_expansion_panel_header";

const ExpansionPanelHeader: React.FC<ExpansionPanelProps> = ({
  className = "",
  style = {},
  children,
}) => {
    const { expanded, setExpanded} = useContext(ExpansionPanelContext);
  const classes = classNames(baseClass, className, {
    ["__open"]: expanded,
  });
  const iconName = expanded ? "angleUp" : "angleDown";

  return (
    <div className={classes} style={style} onClick={() => setExpanded(!expanded)}>
      {children}
      <Icon name={iconName} color="black" height={20} width={20} />
    </div>
  );
};

export default ExpansionPanelHeader;
