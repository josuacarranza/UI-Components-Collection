import React, { useState } from "react";
import classNames from "classnames";
import Header from "./header";
import Content from "./content";

import "./expansion-panel.scss";

type ExpansionPanelContext = {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

export const ExpansionPanelContext = React.createContext<ExpansionPanelContext>({
  expanded: false,
  setExpanded: () => null
});

interface ExpansionPanelProps {
  className?: string;
  style?: object;
  expanded?: boolean;
}

type IExpansionPanel = React.FunctionComponent<ExpansionPanelProps> & {
  Header: typeof Header;
  Content: typeof Content;
};

const baseClass = "UI_collection_expansion_panel";

const ExpansionPanel: IExpansionPanel = ({
  className = "",
  style = {},
  expanded = false,
  children,
}) => {
  const [isExpanded, setExpanded] = useState(expanded)
  const classes = classNames(baseClass, className);

  return (
    <div className={classes} style={style}>
        <ExpansionPanelContext.Provider value={{ expanded: isExpanded, setExpanded: setExpanded }}>
        {React.Children.map(children, (child) => {
          return React.isValidElement(child) ? React.cloneElement(child) : null;
        })}
      </ExpansionPanelContext.Provider>
    </div>
  );
};

ExpansionPanel.Header = Header;
ExpansionPanel.Content = Content;

export default ExpansionPanel;
