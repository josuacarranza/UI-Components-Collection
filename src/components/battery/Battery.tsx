import React from "react";
import classNames from "classnames";

import Text from '../text';

import './battery.scss';

interface BatteryProps {
    className?: string,
    style: object,
    level: Number,
  }

const baseClass = "UI_collection_battery";

const Battery : React.FC<BatteryProps> = ({ 
    className = "",
    style = {},
    level = 0
  }) => {


  const levelText = `${level}%`;
  const mainContainerClasses = classNames( baseClass, className);
  const batteryContainerClasses = classNames("__battery_container", "__dark");
  const batteryLevelClasses = classNames("__battery_level", {
      ["__high"]: level >= 50,
      ["__low"]: level < 50,
  });

  return (
    <div className={mainContainerClasses} style={style}>
      <div className={batteryContainerClasses}>
        <div className={batteryLevelClasses} style={{width:levelText}} ></div>
      </div>
      <Text value={levelText} />
    </div>
  );
};

export default Battery;