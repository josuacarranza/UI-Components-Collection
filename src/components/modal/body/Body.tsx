import React from "react";
import classNames from "classnames";

import '../modal.scss';

interface BodyProps {
    className?: string,
}

const baseClass = "UI_collection_modal_body";

const Body:React.FC <BodyProps> = ({className, children})=> {

    const classes = classNames(baseClass, className);

    return(<div className={classes}>
        {children}
    </div>);
}

export default Body;