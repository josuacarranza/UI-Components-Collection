import React from "react";
import classNames from "classnames";

import '../modal.scss';

interface HeaderProps {
    className?: string,
    alignment?: "start" | "stretch" | "end" | "center",
}

const baseClass = "UI_collection_modal_header";

const Header:React.FC <HeaderProps> = ({className, alignment="start", children})=> {

    const alignmentClass = `__${alignment}` ;
    const classes = classNames(baseClass, alignmentClass, className);

    return(<div className={classes}>
        {children}
    </div>);
}

export default Header;