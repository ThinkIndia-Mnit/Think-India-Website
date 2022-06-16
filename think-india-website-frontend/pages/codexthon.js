import React from "react";

import Navbar from "../Components/Codexthon/Navbar";
import About from "../Components/Codexthon/About";
import Idea from "../Components/Codexthon/Idea";
import EvalCriteria from "../Components/Codexthon/EvalCriteria";
import ProblemStatement from "../Components/Codexthon/ProblemStatement";
import Organiser from "../Components/Codexthon/Organiser";

const codexthon = () => {
  return (
    <div
      style={{
        color: "white",
        fontFamily: "'Mukta', sans-serif",
        height: "max-content",
      }}
      id="codexthonInnerDiv"
    >
      <Navbar />
      <About />
      <Idea />
      <EvalCriteria />
      <ProblemStatement />
      <Organiser />
    </div>
  );
};

export default codexthon;
