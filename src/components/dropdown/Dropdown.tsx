import React, { useEffect, useContext, useRef } from "react";
import classNames from "classnames";
import "./dropdown.scss";

const baseClass = "UI_collection_dropdown";
const dropdownContentBaseClass = "UI_collection_dropdown_content";

interface DropdownContext {
  open: boolean;
}

const DropdownContext = React.createContext<DropdownContext | undefined>({
  open: false,
});

interface DropdownHeaderProps {}

const DropdownHeader: React.FC<DropdownHeaderProps> = ({ children }) => {
  return <> {children} </>;
};

interface DropdownContentProps {
  size?: "sm" | "md" | "lg";
  orientation: "toLeft" | "toRight";
}

const DropdownContent: React.FC<DropdownContentProps> = ({
  size = "md",
  orientation = "toLeft",
  children,
}) => {
  const dropdownContext = useContext(DropdownContext);
  const sizeClass = `__${size}`;
  const contentOrientationClass = `__${orientation}`;
  const classes = classNames(
    dropdownContentBaseClass,
    sizeClass,
    contentOrientationClass,
    {
      ["__open"]: dropdownContext?.open,
      ["__close"]: !dropdownContext?.open,
    }
  );
  return <div className={classes}>{children}</div>;
};

interface DropdownProps {
  className?: string;
  open: boolean;
  onClickOutside?: Function;
}

type IDropdown = React.FunctionComponent<DropdownProps> & {
  Header: typeof DropdownHeader;
  Content: typeof DropdownContent;
};

const Dropdown: IDropdown = ({
  className = "",
  open,
  onClickOutside = () => null,
  children,
}) => {
  const dropdownRef = useRef(null);
  const classes = classNames(baseClass, className);

  const onDocumentClick = (event: any) => {
    if (event.target === dropdownRef?.current) {
      onClickOutside();
    }
  };

  useEffect(() => {
    window.addEventListener("click", onDocumentClick);
    return () => {
      window.removeEventListener("click", onDocumentClick);
    };
  }, []);

  return (
    <div className={classes}>
      <DropdownContext.Provider value={{ open }}>
        {React.Children.map(children, (child) => {
          return React.isValidElement(child) ? React.cloneElement(child) : null;
        })}
      </DropdownContext.Provider>
    </div>
  );
};

Dropdown.Header = DropdownHeader;
Dropdown.Content = DropdownContent;

export default Dropdown;
