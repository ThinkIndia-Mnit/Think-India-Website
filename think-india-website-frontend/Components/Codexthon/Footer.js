import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white text-xl flex flex-row items-center p-3 justify-center">
      <div className="mr-2 font-semibold">
        Number of visitors on this site:{" "}
      </div>
      <div className="inline-block">
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=8003746&style=0001&nbdigits=5&type=page&initCount=0"
          title="Free Counter"
          alt="web counter"
          border="0"
        />
      </div>
    </div>
  );
};

export default Footer;
