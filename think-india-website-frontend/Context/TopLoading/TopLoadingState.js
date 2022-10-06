import React from "react";
import { useState } from "react";
import TopLoadingContext from "./TopLoadingContext";

const TopLoadingState = (props) => {
  const [loadProgress, setLoadProgress] = useState(0);

  const startLoader = () => {
    let progress__ = 10;
    let s = setInterval(() => {
      if (progress__ <= 80) {
        setLoadProgress(progress__);
        progress__ += 1;
      }
    }, 10);
    localStorage.setItem("loadInterval", JSON.stringify(s));
  };

  const doneLoader = () => {
    clearInterval(JSON.parse(localStorage.getItem("loadInterval")));
    setLoadProgress(100);
  };

  return (
    <TopLoadingContext.Provider
      value={{ loadProgress, setLoadProgress, startLoader, doneLoader }}
    >
      {props.children}
    </TopLoadingContext.Provider>
  );
};

export default TopLoadingState;
