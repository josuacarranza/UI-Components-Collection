import * as React from "react";
import iconsMap from "../../icons/iconsMap";

interface IconProps {
  name: string;
  color?: "white" | "black" | "blue" | string;
  size?: Number;
  style?: object;
  className?: string;
}

const ICON_COLORS = {
  white: "#FFFFFF",
  black: "#000000",
  blue: "#417cdd",
};

const Icon: React.FC<IconProps> = ({
  className,
  name,
  style,
  size = 16,
  color = "white",
}) => {
  const iconColor = ICON_COLORS[color] ? ICON_COLORS[color] : color;
  const icon = iconsMap[name];
 // delete icon["path"];
  return (
    <svg
      className={className}
      style={style}
      width={`${size}px`}
      height={`${size}px`}
      {...icon}
    >
      <path fill={iconColor} d={icon.path} />
    </svg>
  );
};

export default Icon;
