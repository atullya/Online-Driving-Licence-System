import React from "react";
import { Link } from "react-router-dom";

const NewNavbar = () => {
  return (
    <div className="bg-[#2460B9] p-4">
      <ul className="flex gap-6 text-white font-bold text-[14px] ml-30">
        <Link to={"/"}>
          {" "}
          <li>Home</li>
        </Link>
        <Link to={"/licensecheck"}>
          <li>License Search</li>
        </Link>
        <li>Print Check</li>
        <li>FAQ</li>
        <li>Guide</li>
      </ul>
    </div>
  );
};

export default NewNavbar;
