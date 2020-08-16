import React from "react";
import classNames from "classnames";

import '../modal.scss';

interface FooterProps {
    className?: string,
    alignment?: "start" | "stretch" | "end" | "center",
}

const baseClass = "UI_collection_modal_footer";

const Footer:React.FC <FooterProps> = ({className, alignment="end",  children})=> {

    const alignmentClass = `__${alignment}` ;
    const classes = classNames(baseClass, alignmentClass, className);

    return(<div className={classes}>
        {children}
    </div>);
}

export default Footer;