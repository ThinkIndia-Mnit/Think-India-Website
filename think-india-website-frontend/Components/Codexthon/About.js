import React from "react";

const About = () => {
  return (
    <div
      className="py-20 justify-evenly items-center flex lg:flex-row md:flex-row flex-col text-4xl px-2"
      id="about"
    >
      <div className="flex flex-col mx-10 lg:items-start md:items-start items-center">
        <div className="lg:my-5 md:my-5 my-3 font-robotic lg:text-6xl md:text-4xl text-4xl">
          CODEXTHON
        </div>
        <div className="lg:text-2xl md:text-xl text-lg my-5">
          Tech Hackathon
        </div>
      </div>
      <div className="flex flex-col space-y-5 items-center">
        <div className="flex flex-col lg:text-xl md:text-base text-sm text-center rounded-lg shadow-emerald-400 shadow-lg border-white border-2 p-2">
          <ul className=" list-none">
            <li>
              <u>Idea Submission</u> :{" "}
              <span className="font-mono">20 June - 5 July 2022</span>
            </li>
            <li>
              <u>Prototype submission</u> :{" "}
              <span className="font-mono">10 June - 25 July 2022</span>
            </li>
            <li>
              <u>Mode of conduct</u>: Online
            </li>
          </ul>
        </div>
        <div>
          <div
            id="registerBtnOuterDiv"
            className=" shadow-emerald-400 shadow-lg hover:bg-emerald-400 text-black hover:shadow-none hover:text-black"
          >
            <a
              href="https://docs.google.com/forms/d/1oN1pb4ZJSQ4Q9ZXSCwBpC_k3Ek5ngAfrcsewQsT5nsE/edit?usp=sharing_eil_se_dm&ts=62a986da"
              className="rounded-lg border-2 hover:border-none border-white px-3 py-2 block my-2 text-white hover:text-black lg:text-2xl md:text-lg text-base"
              target="_blank"
              rel="noreferrer"
              id="registerBtn"
            >
              Register here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
