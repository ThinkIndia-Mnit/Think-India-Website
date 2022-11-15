import React from "react";

const EvalCriteria = () => {
  return (
    <div className="lg:px-20 lg:py-20 md:px-20 md:py-20 px-5 py-10" id="evalCriteria">
      <div className="text-5xl my-5" style={{ color: "#ADEFD1FF" }}>
        EVALUATION CRITERIA
      </div>
      <div className="text-2xl">
        <ul className="list-disc lg:mx-20 md:mx-20 px-7">
          <li className="my-5">Accuracy and efficiency of prediction model.</li>
          <li className="my-5">
            Design and implementation of interface to judge the result (website
            or app)
          </li>
          <li className="my-5">
            Tools and frameworks used and their scalability
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EvalCriteria;
