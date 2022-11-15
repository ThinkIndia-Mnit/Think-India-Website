import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const Visibility = (props) => {
  const {
    animation,
    additionalClasses,
    offset,
    children,
    callback,
    initVisible,
  } = props;

  const [shown, setShown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (initVisible) {
          setShown(initVisible);
        }
        if (isVisible) {
          setIsVisible(isVisible);
          setShown(true);
          if (callback) callback();
        }
      }}
      partialVisibility={true}
      minTopValue={offset ? offset : 250}
    >
      <div
        className={`${additionalClasses ?? ""} ${isVisible ? animation : ""}`}
        style={{
          opacity: shown ? 1 : 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </VisibilitySensor>
  );
};

export default Visibility;
