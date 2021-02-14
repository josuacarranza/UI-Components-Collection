import React from 'react';
type ExpansionPanelContext = {
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
  }
  
  export const ExpansionPanelContext = React.createContext<ExpansionPanelContext>({
    expanded: false,
    setExpanded: () => null
  });