import * as React from "react";
import classnames from "classnames";
import "./loader.scss";

interface LoaderProps {
  type?: "circle" | "linear";
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  style?: object;
  className?: string;
}

const baseClass = "UI_collection_loader";
const linearBaseClasses = {
  container: "__loader_linear_container",
  bar: "__loader_linear_bar",
};

const circleBaseClass = "__circle";

const Loader: React.FC<LoaderProps> = ({
  type = "linear",
  className,
  style,
  color = "primary",
}) => {
  const colorClass = `__${color}`;
  const classes = classnames(baseClass, colorClass, className);
  if (type === "linear") {
    const linearClasses = classnames(classes, linearBaseClasses.container);
    return (
      <div className={linearClasses} style={style}>
        <div className={linearBaseClasses.bar} />
      </div>
    );
  } else {
    const circleClasses = classnames(classes, circleBaseClass);
    return <div className={circleClasses} style={style}></div>;
  }
};

export default Loader;
