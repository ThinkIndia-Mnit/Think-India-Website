import React from "react";
import Image from "next/image";

const organiser = () => {
  return (
    <div
      className="lg:px-20 lg:py-20 md:px-20 md:py-20 px-5 py-10"
      id="organisers"
    >
      <div className="text-5xl my-5" style={{ color: "#ADEFD1FF" }}>
        Organisers
      </div>
      <div className="text-2xl w-full" style={{ textAlign: "-webkit-center" }}>
        <div
          className="bg-white p-5 rounded-2xl"
          style={{ width: "max-content" }}
        >
          <img
            src="/thinkindialogo.png"
            alt="org1"
            className="rounded-2xl text-center h-auto"
            style={{ width: "250px" }}
          />
          <div
            className="mt-6 text-2xl text-black font-semibold"
            style={{ width: "max-content" }}
          >
            DIY SECTION
          </div>
          <div
            className="my-3 text-2xl text-black font-semibold"
            style={{ width: "max-content" }}
          >
            THINK INDIA MNIT JAIPUR
          </div>
        </div>
      </div>
    </div>
  );
};

export default organiser;
