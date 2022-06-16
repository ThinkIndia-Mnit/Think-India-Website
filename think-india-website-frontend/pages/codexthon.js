import React from "react";

import Navbar from "../components/Codexthon/Navbar";
import About from "../components/Codexthon/About";
import Idea from "../components/Codexthon/Idea";
import EvalCriteria from "../components/Codexthon/EvalCriteria";
import ProblemStatement from "../components/Codexthon/ProblemStatement";
import Organiser from "../components/Codexthon/Organiser";

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
