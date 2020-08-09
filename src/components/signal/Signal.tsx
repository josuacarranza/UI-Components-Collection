import React from "react";
import classNames from 'classnames';

import Text from '../text';

import "./signal.scss";

interface SignalProps {
    className?: string,
    style?: {},
    strength: "noSignal" | "veryWeak" | "weak" | "strong" | "veryStrong",
    signalText: string,
}

const baseClass = "UI_collection_signal";

const Signal: React.FC <SignalProps> = ({
    className = "",
    style = {}, 
    strength = "noSignal",
    signalText = "Signal",
  }) => {

  let signalStrengthHighTransparentOrLowClass = "";
  if(strength !== 'noSignal'){
    signalStrengthHighTransparentOrLowClass = ['strong', 'veryStrong'].includes(strength) ? "__high" : "__low";
  } 
  const signalBarsClasses = classNames("__dark", signalStrengthHighTransparentOrLowClass, "__signal_bar");

  const isNoSignalStrength = strength === 'noSignal';
  const isVeryWeakStrength = strength === 'veryWeak';
  const isStrongOrVeryStrongStrength =  ['strong', 'veryStrong'].includes(strength);
  const isveryStrongStrength = strength === 'veryStrong';
  const barsClassMap = {
    veryWeak: isNoSignalStrength ? "__transparent" : '',
    weak: isVeryWeakStrength || isNoSignalStrength ? "__transparent" : '',
    strong: !isStrongOrVeryStrongStrength ? "__transparent" : '',
    veryStrong: !isveryStrongStrength ? "__transparent" : ''
  }

  const mainContainerClasses = classNames(baseClass, className);
  const signalContainerClasses = classNames("__signal_container", "");

  return (
    <div className={mainContainerClasses} style={style}>
      <div className={signalContainerClasses}>
        <div className={`__very_weak ${barsClassMap.veryWeak} ${signalBarsClasses}`} />
        <div className={`__weak ${barsClassMap.weak} ${signalBarsClasses}`} />
        <div className={`__strong ${barsClassMap.strong} ${signalBarsClasses}`} />
        <div className={`__very_strong ${barsClassMap.veryStrong} ${signalBarsClasses}`} />
      </div>
      <Text value={signalText} />
    </div>
  );
};

export default Signal;
