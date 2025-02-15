import React from "react";

import Slider from "../Slider/Slider.jsx";
import Nav1 from "./Nav1.jsx";

function Navbar() {
  return (
    <>
      <Nav1 />

      <div className="p-1 bg-[#fff] relative">
        <Slider />
      </div>
    </>
  );
}

export default Navbar;
