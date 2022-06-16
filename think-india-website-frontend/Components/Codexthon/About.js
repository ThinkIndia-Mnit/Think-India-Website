import React from "react";

const About = () => {
  return (
    <div
      className="py-20 justify-evenly items-center flex lg:flex-row md:flex-row flex-col text-4xl px-2"
      id="about"
    >
      <div className="flex flex-col mx-10 ">
        <div className="lg:my-5 md:my-5 my-3 font-robotic lg:text-7xl md:text-6xl text-4xl">
          CODEXTHON
        </div>
        <div className="lg:my-5 md:my-5 my-3">Tech Hackathon</div>
      </div>
      <div className="flex flex-col text-2xl">
        <ul style={{ listStyleType: "inherit" }}>
          <li>
            <u>Idea Submission</u> :{" "}
            <span className="font-mono">20 June 2022 - 5 July 2022</span>
          </li>
          <li>
            <u>Prototype submission</u> :{" "}
            <span className="font-mono">10 June 2022 - 25 July 2022</span>
          </li>
          <li>
            <u>Mode of conduct</u>: Online
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
