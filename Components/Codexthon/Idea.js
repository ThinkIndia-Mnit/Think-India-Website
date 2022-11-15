import React from "react";

const Idea = () => {
  return (
    <div className="lg:px-20 lg:py-20 md:px-20 md:py-20 px-5 py-10" id="agenda">
      <div className="text-5xl my-10" style={{ color: "#ADEFD1FF" }}>
        WHAT SHOULD I HACK?
      </div>

      <div className="text-2xl flex lg:flex-row md:flex-row flex-col justify-evenly">
        <div className="lg:w-1/3 md:w-1/3 w-full lg:text-center md:text-center text-left">
          Put your skills to the test and apply services with Responsible AI
          into a new or existing project!
        </div>
        <div className="lg:w-1/3 md:w-1/3 w-full lg:text-center md:text-center text-left my-4">
          We welcome projects of all types, including AI-powered apps or
          devices, conversational bots, ML models, or something else entirely!
        </div>
      </div>
    </div>
  );
};

export default Idea;
