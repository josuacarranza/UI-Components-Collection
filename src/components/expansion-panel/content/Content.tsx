import React, { useContext } from "react";
import classNames from "classnames";

import { ExpansionPanelContext } from "../ExpansionPanel";

import "../expansion-panel.scss";

interface ExpansionPanelProps {
  className?: string;
  style?: object;
}

const baseClass = "UI_collection_expansion_panel_content";

const ExpansionPanelContent: React.FC<ExpansionPanelProps> = ({
  className = "",
  style = {},
  children,
}) => {
    const { expanded } = useContext(ExpansionPanelContext);
  const classes = classNames(baseClass, className, {
      ["__open"]: expanded,
  });

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default ExpansionPanelContent;
